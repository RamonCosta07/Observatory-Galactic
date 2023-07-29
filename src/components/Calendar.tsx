// Styles
import { PlanetsInformation } from "@/styles/PlanetsStyles";
import * as S from "@/styles/CalendarStyles";
// Hooks
import { useState } from "react";
import useAuth from "@/hooks/useAuth";
// Bibliotecas
import { ptBR } from "date-fns/locale";
import { format, parseISO } from "date-fns";
// Components
import MyCustomCalendar from "./MyCustomCalendar";
import GlossaryCalendar from "./GlossaryCalendar";
import Loading from "./Loading";
// Firebase
import { db } from "@/services/firebase";
import {
  DocumentData,
  DocumentSnapshot,
  doc,
  getDoc,
  setDoc,
  updateDoc,
} from "firebase/firestore";
// Interfaces
import {
  ICalendarProps,
  IEventDetails,
} from "@/interfaces/iComponents/ICalendar";

const Calendar = ({
  eclipses,
  lunarEvents,
  currentYear,
  onYearChange,
}: ICalendarProps) => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [showModal, setShowModal] = useState(false);
  const [showModalWithoutConfirmation, setShowModalWithoutConfirmation] =
    useState(false);
  const [loading, setLoading] = useState(false);
  const [eventDetails, setEventDetails] = useState<IEventDetails>({
    selectedDate: null,
    selectedLunarEvents: [],
    selectedEclipses: [],
  });
  const { user } = useAuth();

  const handleDateChange = (date: Date) => {
    setSelectedDate(date);
  };

  const handleYearChange = (year: string) => {
    onYearChange(year);
  };

  const getMoonEventEmoji = (description: string) => {
    const eventTypes = {
      Microlua: "🌜",
      Superlua: "🌝",
      "Lua Azul": "🔵",
    };
    const eventDescriptions = description.split(", ");
    const emojis = eventDescriptions.map((eventDesc) => {
      const eventType = Object.keys(eventTypes).find((type) =>
        eventDesc.includes(type)
      ) as keyof typeof eventTypes;

      return eventType ? eventTypes[eventType] : null;
    });

    return emojis.filter((emoji) => emoji !== null).join(" ");
  };

  const getEclipseEmoji = (description: string) => {
    const eclipseTypes = {
      "Eclipse solar total": "🌑",
      "Eclipse solar parcial": "🌘",
      "Eclipse solar anular": "☀️",
      "Eclipse lunar total": "🌕",
      "Eclipse lunar parcial": "🌗",
      "Eclipse lunar penumbral": "🌔",
    };

    const eventType = Object.keys(eclipseTypes).find((type) =>
      description.includes(type)
    ) as keyof typeof eclipseTypes;

    return eventType ? eclipseTypes[eventType] : "☀️";
  };

  const createOrUpdateEventDocument = async (eventDetails: IEventDetails) => {
    const { selectedDate, selectedLunarEvents, selectedEclipses } =
      eventDetails;

    if (!selectedDate) {
      return;
    }

    const eventRef = doc(db, "events", selectedDate.toISOString());

    // Verificar se o evento já existe
    const eventSnapshot: DocumentSnapshot<DocumentData> = await getDoc(
      eventRef
    );

    if (eventSnapshot.exists()) {
      // Atualizar com o UID do usuário
      const currentUserUID = user!.uid;
      const existingEvent = eventSnapshot.data();

      if (
        existingEvent &&
        existingEvent.users &&
        currentUserUID &&
        !existingEvent.users.includes(currentUserUID)
      ) {
        existingEvent.users.push(currentUserUID);
        await updateDoc(eventRef, { users: existingEvent.users });
      }
      return;
    }

    // Criar o documento com os eventos e descrições
    let eventDescription = "";

    if (selectedLunarEvents.length > 0) {
      const lunarEventDescriptions = selectedLunarEvents.map(
        (lunarEvent) => lunarEvent.description
      );
      eventDescription += lunarEventDescriptions.join(" e ");
    }

    if (selectedEclipses.length > 0) {
      const eclipseDescriptions = selectedEclipses.map(
        (eclipse) => eclipse.description
      );

      if (eventDescription.length > 0) {
        eventDescription += " e ";
      }

      eventDescription += eclipseDescriptions.join(" e ");
    }

    if (eventDescription.length > 0) {
      eventDescription = `Nessa data ocorrerá ${eventDescription}.`;
    }

    const eventData = {
      date: selectedDate.toISOString(),
      events: [eventDescription],
      users: [user!.uid],
    };

    await setDoc(eventRef, eventData);
  };

  const tileContent = ({ date }: { date: Date }) => {
    const currentDate = new Date();
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate();
    const onClickEventData = date > currentDate;

    const hasLunarEvent = lunarEvents.some((lunarEvent) => {
      const eventDate = parseISO(lunarEvent.date);
      return (
        eventDate.getFullYear() === year &&
        eventDate.getMonth() + 1 === month &&
        eventDate.getDate() === day
      );
    });

    const eclipseDescriptions = eclipses
      .filter((eclipse) => {
        const eclipseDate = parseISO(eclipse.date);
        return (
          eclipseDate.getFullYear() === year &&
          eclipseDate.getMonth() + 1 === month &&
          eclipseDate.getDate() === day
        );
      })
      .map((eclipse) => eclipse.description);

    const eventDescription = lunarEvents
      .filter((lunarEvent) => {
        const eventDate = parseISO(lunarEvent.date);
        return (
          eventDate.getFullYear() === year &&
          eventDate.getMonth() + 1 === month &&
          eventDate.getDate() === day
        );
      })
      .map((lunarEvent) => lunarEvent.description)
      .join(", ");

    const cellClassName =
      onClickEventData && (hasLunarEvent || eclipseDescriptions.length > 0)
        ? "react-calendar__tile--event"
        : "";

    const handleShowModal = async () => {
      if (cellClassName === "") return;
      setShowModalWithoutConfirmation(false);
      setLoading(true);
      const selectedDate = new Date(year, month - 1, day);

      const selectedLunarEvents: any = lunarEvents.filter((lunarEvent) => {
        const eventDate = parseISO(lunarEvent.date);
        return (
          eventDate.getFullYear() === year &&
          eventDate.getMonth() + 1 === month &&
          eventDate.getDate() === day
        );
      });

      const selectedEclipses = eclipses.filter((eclipse) => {
        const eclipseDate = parseISO(eclipse.date);
        return (
          eclipseDate.getFullYear() === year &&
          eclipseDate.getMonth() + 1 === month &&
          eclipseDate.getDate() === day
        );
      });

      setEventDetails({
        selectedDate: selectedDate,
        selectedLunarEvents: selectedLunarEvents,
        selectedEclipses: selectedEclipses,
      });

      const eventRef = doc(db, "events", selectedDate.toISOString());

      // Consulta ao Firestore para verificar se o evento já existe para o usuário
      const eventSnapshot = await getDoc(eventRef);

      if (
        eventSnapshot.exists() &&
        eventSnapshot.data().users.includes(user?.uid)
      ) {
        setShowModalWithoutConfirmation(true);
        setLoading(false);
        setShowModal(true);
        return;
      }
      setLoading(false);
      setShowModal(true);
    };

    return (
      <div className={cellClassName} onClick={handleShowModal}>
        {eclipseDescriptions.map((description, index) => (
          <span title={description} key={index + description}>
            {getEclipseEmoji(description)}
          </span>
        ))}
        {hasLunarEvent && (
          <span title={eventDescription}>
            {getMoonEventEmoji(eventDescription)}
          </span>
        )}
      </div>
    );
  };

  const months = Array.from(Array(12).keys());

  return (
    <S.Wrapper>
      <h2>Eventos Astronômicos</h2>
      <S.GlossaryInformation>
        <PlanetsInformation>Glossário</PlanetsInformation>
      </S.GlossaryInformation>
      <GlossaryCalendar />
      <>
        {loading ? (
          <Loading />
        ) : (
          <>
            <S.Navigation>
              <S.Button
                onClick={() => handleYearChange("2023")}
                active={currentYear == "2023" ? "true" : "false"}
                title="Calendário de 2023"
              >
                2023
              </S.Button>
              <S.Button
                onClick={() => handleYearChange("2024")}
                active={currentYear == "2024" ? "true" : "false"}
                title="Calendário de 2024"
              >
                2024
              </S.Button>
            </S.Navigation>
            <S.GlossaryInformation>
              <PlanetsInformation>
                Clique em cima da data do evento desejado para receber um
                lembrete em seu e-mail na data.
              </PlanetsInformation>
            </S.GlossaryInformation>
            <S.CalendarGrid>
              {months.map((month) => {
                const startDate = new Date(parseInt(currentYear), month, 1);
                const endDate = new Date(parseInt(currentYear), month + 1, 0);
                const monthName = format(startDate, "LLLL", { locale: ptBR });
                return (
                  <S.MonthCell key={month}>
                    <h3>
                      {monthName.charAt(0).toUpperCase() +
                        monthName.slice(1) +
                        " – " +
                        currentYear}
                    </h3>
                    <MyCustomCalendar
                      onChange={handleDateChange}
                      value={selectedDate}
                      tileContent={tileContent}
                      minDate={startDate}
                      maxDate={endDate}
                      showModal={showModal}
                      setShowModal={setShowModal}
                      eventDetails={eventDetails}
                      createOrUpdateEventDocument={createOrUpdateEventDocument}
                      showModalWithoutConfirmation={
                        showModalWithoutConfirmation
                      }
                    />
                  </S.MonthCell>
                );
              })}
            </S.CalendarGrid>
          </>
        )}
      </>
    </S.Wrapper>
  );
};

export default Calendar;
