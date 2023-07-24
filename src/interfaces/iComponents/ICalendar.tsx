// React
import { SetStateAction } from "react";
// Interfaces
import { Eclipse, MoonEvent } from "../iPages/IEventos";

export interface ICalendarProps {
  eclipses: Eclipse[];
  lunarEvents: MoonEvent[];
  currentYear: string;
  onYearChange: (year: string) => void;
}

export interface IEventDetails {
  selectedDate: Date | null;
  selectedLunarEvents: MoonEvent[];
  selectedEclipses: Eclipse[];
}

export interface IMyCustomCalendarProps {
  onChange: any;
  value: Date;
  tileContent: ({ date }: { date: Date }) => JSX.Element;
  minDate: Date;
  maxDate: Date;
  showModal: boolean;
  setShowModal: React.Dispatch<SetStateAction<boolean>>;
  eventDetails: IEventDetails;
  createOrUpdateEventDocument: (eventDetails: IEventDetails) => Promise<void>;
  showModalWithoutConfirmation: boolean;
}
