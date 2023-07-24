// Styles
import { Container } from "@/styles/ContainerStyles";
// Next
import Head from "next/head";
import dynamic from "next/dynamic";
// Hooks
import { useState, useEffect } from "react";
// JSON
import astronomyData from "@/json/astronomy-events.json";
// Interfaces
import { Eclipse, MoonEvent } from "@/interfaces/iPages/IEventos";

const Calendar = dynamic(() => import("@/components/Calendar"), {
  ssr: false, // Desabilita a renderização no lado do servidor
});

const Eventos = () => {
  const [eclipses, setEclipses] = useState<Eclipse[]>([]);
  const [lunarEvents, setLunarEvents] = useState<MoonEvent[]>([]);
  const [currentYearSelected, setCurrentYearSelected] =
    useState<string>("2023");

  useEffect(() => {
    const yearData =
      astronomyData[currentYearSelected as keyof typeof astronomyData];

    if (yearData) {
      setEclipses(yearData.eclipses || []);
      setLunarEvents(yearData.moonEvents || []);
    } else {
      setEclipses([]);
      setLunarEvents([]);
    }
  }, [currentYearSelected]);

  const handleYearChange = (year: string) => {
    setCurrentYearSelected(year);
  };

  return (
    <>
      <Head>
        <title>Eventos Astronômicos | Galactic Observatory</title>
      </Head>
      <Container>
        <Calendar
          eclipses={eclipses}
          lunarEvents={lunarEvents}
          currentYear={currentYearSelected}
          onYearChange={handleYearChange}
        />
      </Container>
      <span style={{ opacity: "0" }}>-</span>
    </>
  );
};

export default Eventos;
