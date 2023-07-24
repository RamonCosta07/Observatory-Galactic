import * as functions from "firebase-functions";
import * as admin from "firebase-admin";
import * as nodemailer from "nodemailer";
import * as dotenv from "dotenv";
dotenv.config();

admin.initializeApp();

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.USER_EMAIL,
    pass: process.env.PASSWORD_APP,
  },
});

export const enviarEmailsAgendados = functions.pubsub
  .schedule("every day 00:00")
  .timeZone("America/Sao_Paulo")
  .onRun(async () => {
    console.log("Oi");
    try {
      const today = new Date();
      today.setHours(0, 0, 0, 0);

      const eventsQuery = admin
        .firestore()
        .collection("events")
        .where("date", ">=", today.toISOString())
        .where(
          "date",
          "<",
          new Date(today.getTime() + 24 * 60 * 60 * 1000).toISOString()
        );

      const eventsSnapshot = await eventsQuery.get();
      const emailPromises = [];
      const deletePromises = [];

      for (const eventDoc of eventsSnapshot.docs) {
        const eventData = eventDoc.data();
        const users = eventData.users;

        if (users.length > 0) {
          const usersPromises = users.map(async (userId:string) => {
            const userDoc = await admin
              .firestore()
              .collection("users")
              .doc(userId)
              .get();

            return userDoc.data();
          });

          const usersData = await Promise.all(usersPromises);

          for (const userData of usersData) {
            const mailOptions = {
              from: process.env.USER_EMAIL,
              to: userData.email,
              subject: "Evento Astronômico — Galactic Observatory",
              html: `<p>Olá ${userData.name}!</p>
              <p>Hoje ocorrerá um evento astronômico importante:
                ${eventData.events[0]} Não deixe de conferir!</p>`,
            };

            emailPromises.push(transporter.sendMail(mailOptions));
          }
          deletePromises.push(eventDoc.ref.delete());
        }
      }

      await Promise.all(emailPromises);
      await Promise.all(deletePromises);

      console.log("E-mails de notificação enviados com sucesso!");
    } catch (error) {
      console.error("Erro ao enviar e-mails de notificação:", error);
    }
  });

