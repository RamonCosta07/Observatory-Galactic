// Bibliotecas
import emailjs from "emailjs-com";

const sendWelcomeEmail = async (email: string, name: string) => {
  const emailServiceId = process.env.NEXT_PUBLIC_EMAIL_SERVICE_ID;
  const emailTemplateId = process.env.NEXT_PUBLIC_EMAIL_TEMPLATE_ID;
  const emailUserId = process.env.NEXT_PUBLIC_EMAIL_USER_ID;

  const templateParams = {
    to_email: email,
    from_name: "Galactic Observatory",
    subject: "Bem-vindo ao Galactic Observatory!",
    message: `Olá, ${name}! Bem-vindo ao nosso site. Ficamos felizes em vê-lo por aqui. Por favor, mantenha seu e-mail atualizado para que possamos enviar notificações para seus eventos marcados em nosso site. Não se preocupe, não enviaremos e-mails indesejados. Caso não queira mais receber e-mails de eventos marcados, basta efetuar login e remover os eventos adicionados. Agradecemos novamente por se juntar a nós e esperamos que você aproveite sua experiência em nosso site! Atenciosamente, Equipe do Galactic Observatory`,
  };

  try {
    await emailjs.send(
      emailServiceId!,
      emailTemplateId!,
      templateParams!,
      emailUserId!
    );
    console.log(`E-mail de boas-vindas enviado para: ${email}`);
  } catch (error) {
    console.error("Erro ao enviar o e-mail de boas-vindas:", error);
    throw error;
  }
};

export default sendWelcomeEmail;
