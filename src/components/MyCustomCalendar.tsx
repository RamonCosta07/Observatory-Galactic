// Styles
import { CustomCalendar } from "@/styles/CalendarStyles";
// Hooks e Bibliotecas
import useAuth from "@/hooks/useAuth";
import { isSameDay } from "date-fns";
// Next
import { useRouter } from "next/router";
// Components
import ModalConfirm from "./ModalConfirm";
// Interfaces
import { IMyCustomCalendarProps } from "@/interfaces/iComponents/ICalendar";

const MyCustomCalendar = ({
  onChange,
  value,
  tileContent,
  minDate,
  maxDate,
  showModal,
  setShowModal,
  createOrUpdateEventDocument,
  eventDetails,
  showModalWithoutConfirmation,
}: IMyCustomCalendarProps) => {
  const router = useRouter();
  const { user } = useAuth();

  const isDatePast = (date: Date) => {
    const currentDate = new Date();
    return date < currentDate && !isSameDay(date, currentDate);
  };

  const getTileClassName = ({ date }: { date: Date }) => {
    return isDatePast(date) ? "past-date" : "";
  };

  const handleCancelModal = () => {
    setShowModal(false);
  };

  const handleConfirmModalLogin = () => {
    router.push("/login");
    setShowModal(false);
  };

  const handleConfirmModalNotification = async () => {
    await createOrUpdateEventDocument(eventDetails);
    setShowModal(false);
  };

  return (
    <>
      <CustomCalendar
        onChange={onChange}
        value={value}
        tileContent={tileContent}
        tileClassName={getTileClassName}
        minDate={minDate}
        maxDate={maxDate}
        calendarType="US"
      />
      {showModal && (
        <>
          {user ? (
            <>
              {showModalWithoutConfirmation ? (
                <>
                  <ModalConfirm
                    msg="Evento já está incluso na sua lista. Caso deseje excluí-lo, acesse o menu de perfil."
                    handleCancelModal={handleCancelModal}
                  />
                </>
              ) : (
                <>
                  <ModalConfirm
                    msg="Deseja receber um lembrete em seu e-mail na data do evento?"
                    handleConfirmModal={handleConfirmModalNotification}
                    handleCancelModal={handleCancelModal}
                  />
                </>
              )}
            </>
          ) : (
            <ModalConfirm
              msg="Deseja receber um lembrete em seu e-mail na data do evento? Para isso é preciso efetuar o login"
              handleConfirmModal={handleConfirmModalLogin}
              handleCancelModal={handleCancelModal}
            />
          )}
        </>
      )}
    </>
  );
};

export default MyCustomCalendar;
