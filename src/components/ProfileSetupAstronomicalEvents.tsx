'use cliente';
// Styles
import * as S from "@/styles/ProfileSetupAstronomicalEventsStyles";
import { Button } from "@/styles/ButtonStyles";
import { ConfigContainer } from "@/styles/ProfileSetupStyles";
// Hooks e Next
import useAuth from "@/hooks/useAuth";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
// Firebase
import {
  collection,
  query,
  where,
  getDocs,
  doc,
  getDoc,
  updateDoc,
  writeBatch,
} from "firebase/firestore";
import { db } from "@/services/firebase";
// Components
import Loading from "./Loading";
import ModalConfirm from "./ModalConfirm";
// Interfaces
import { IOpenMenuProfile } from "@/interfaces/iComponents/IProfile";

const formatDate = (dateString: string) => {
  const date = new Date(dateString);
  const day = String(date.getDate()).padStart(2, "0");
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const year = date.getFullYear();
  return `${day}-${month}-${year}`;
};

const ProfileSetupAstronomicalEvents = ({ setIsMenuOpen }: IOpenMenuProfile) => {
  const [activeTab, setActiveTab] = useState("all");
  const [events, setEvents] = useState<any[]>([]);
  const [eventsDelete, setEventsDelete] = useState(false);
  const [loading, setLoading] = useState(false);
  const [dateDelete, setDateDelete] = useState("");
  const [showModalDeleteEvent, setShowModalDeleteEvent] = useState(false);
  const [showModalDeleteAllEvents, setShowModalDeleteAllEvents] =
    useState(false);
  const { user } = useAuth();
  const router = useRouter();

  useEffect(() => {
    setIsMenuOpen(false);
  }, []);

  useEffect(() => {
    setLoading(true);
    const uid = user!.uid;

    const fetchEvents = async () => {
      const q = query(
        collection(db, "events"),
        where("users", "array-contains", uid)
      );
      const snapshot = await getDocs(q);
      const fetchedEvents = snapshot.docs.map((doc) => doc.data()) as any[];
      setEvents(fetchedEvents);
    };

    fetchEvents();
    setLoading(false);
  }, [eventsDelete]);

  const handleTabClick = (tab: string) => {
    setActiveTab(tab);
  };

  const handleDeleteEvent = async (date: string) => {
    const userId = user!.uid;

    try {
      const eventRef = doc(db, "events", date);
      const eventSnapshot = await getDoc(eventRef);

      if (eventSnapshot.exists()) {
        const eventData = eventSnapshot.data();

        if (
          Array.isArray(eventData.users) &&
          eventData.users.includes(userId)
        ) {
          // Remover o UID do usuário do array de usuários
          const updatedUsers = eventData.users.filter(
            (uid: string) => uid !== userId
          );

          await updateDoc(eventRef, { users: updatedUsers });

          // Atualizar a lista de eventos para refletir a remoção do evento
          setEvents((prevEvents) => {
            const updatedEvents = prevEvents.filter(
              (event) => event.date !== date
            );
            return updatedEvents;
          });
        }
      }
    } catch (error) {
      console.log("Erro ao excluir evento:", error);
    } finally {
      setDateDelete("");
    }
  };

  const removeUserFromEvents = async () => {
    try {
      const userId = user?.uid;
      const eventsRef = collection(db, "events");
      const eventsSnapshot = await getDocs(eventsRef);

      const batch = writeBatch(db);

      eventsSnapshot.forEach((eventDoc) => {
        const eventData = eventDoc.data();

        if (
          Array.isArray(eventData.users) &&
          eventData.users.includes(userId)
        ) {
          const updatedUsers = eventData.users.filter(
            (uid: string) => uid !== userId
          );
          const eventRef = doc(db, "events", eventDoc.id);
          batch.update(eventRef, { users: updatedUsers });
        }
      });

      await batch.commit();
      setEventsDelete(true);
    } catch (error) {
      console.log("Erro ao remover UID dos eventos:", error);
    } finally {
      setShowModalDeleteAllEvents(false);
    }
  };

  const filteredEvents =
    activeTab === "all"
      ? events
      : events.filter((event) => {
          if (activeTab === "eclipse") {
            return (
              typeof event.events === "object" &&
              event.events.some((e: string) =>
                e.toLowerCase().includes("eclipse")
              )
            );
          } else if (activeTab === "lunar") {
            return (
              typeof event.events === "object" &&
              event.events.some(
                (e: string) =>
                  e.toLowerCase().includes("lua") &&
                  !e.toLowerCase().includes("lunar")
              )
            );
          }
          return false;
        });

  const handleEventsRedirect = () => {
    router.push("/eventos");
  };

  const handleModalDeleteEvent = (date: string) => {
    setShowModalDeleteEvent(true);
    setDateDelete(date);
  };

  const handleDeleteEventConfirmation = async () => {
    await handleDeleteEvent(dateDelete);
    setShowModalDeleteEvent(false);
  };

  const handleDeleteAllEvents = () => {
    setShowModalDeleteAllEvents(true);
  };

  const handleCloseModal = () => {
    setShowModalDeleteEvent(false);
    setShowModalDeleteAllEvents(false);
    setDateDelete("");
  };

  return (
    <ConfigContainer>
      <h1>
        Meus Lembretes de Eventos
      </h1>
      <S.Container>
        <S.Tabs>
          <S.TabButton
            active={activeTab === "all" ? "true" : "false"}
            onClick={() => handleTabClick("all")}
            title="Acessar todos os eventos marcados"
          >
            Todos os Eventos
          </S.TabButton>
          <S.TabButton
            active={activeTab === "eclipse" ? "true" : "false"}
            onClick={() => handleTabClick("eclipse")}
            title="Acessar os eventos de eclipses marcados"
          >
            Eventos Eclipses
          </S.TabButton>
          <S.TabButton
            active={activeTab === "lunar" ? "true" : "false"}
            onClick={() => handleTabClick("lunar")}
            title="Acessar os eventos de lunares marcados"
          >
            Eventos Lunares
          </S.TabButton>
        </S.Tabs>

        <S.EventsList>
          {loading ? (
            <Loading />
          ) : (
            <>
              {filteredEvents.length === 0 && (
                <div style={{padding: "8px"}}>
                  <p>
                    {activeTab === "all"
                      ? "Nenhum evento cadastrado ainda."
                      : activeTab === "lunar"
                      ? "Nenhum evento lunar cadastrado ainda."
                      : "Nenhum evento de eclipse cadastrado ainda."}
                  </p>
                  <Button
                    style={{ marginRight: "10rem", marginTop: "1rem" }}
                      onClick={handleEventsRedirect}
                      title="Ver todos os eventos disponíveis"
                  >
                    Buscar novos eventos
                  </Button>
                </div>
              )}
              {filteredEvents.map((event) => (
                <li key={event.date}>
                  <S.EventItem>
                    <div>
                      <S.EventDate>{formatDate(event.date)}</S.EventDate>
                      {typeof event.events === "object" &&
                        event.events.map((e: string, i: number) => (
                          <p key={i}>{e}</p>
                        ))}
                    </div>
                    <S.TrashIcon
                      onClick={() => handleModalDeleteEvent(event.date)}
                      title="Excluir lembrete"
                    />
                  </S.EventItem>
                </li>
              ))}
            </>
          )}
          {activeTab === "all" && filteredEvents.length > 0 && (
            <Button onClick={handleDeleteAllEvents} title="Excluir todos os lembretes">
              Excluir todos os lembretes
            </Button>
          )}
        </S.EventsList>
        {showModalDeleteEvent && (
          <ModalConfirm
            msg="Deseja excluir esse evento da sua lista de lembretes? Uma vez excluido, você não receberá um e-mail na data do evento"
            handleConfirmModal={handleDeleteEventConfirmation}
            handleCancelModal={handleCloseModal}
          />
        )}
        {showModalDeleteAllEvents && (
          <ModalConfirm
            msg="Deseja excluir todos os eventos da sua lista de lembretes? Uma vez excluidos, você não receberá nenhum e-mail nas datas dos eventos"
            handleConfirmModal={removeUserFromEvents}
            handleCancelModal={handleCloseModal}
          />
        )}
      </S.Container>
    </ConfigContainer>
  );
};

export default ProfileSetupAstronomicalEvents;
