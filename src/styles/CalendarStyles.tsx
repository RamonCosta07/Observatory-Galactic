// Styled
import styled from "styled-components";
// Bibliotecas
import Calendar from "react-calendar";
// Interfaces
import { IIsActive } from "@/interfaces/iStyles/INavbarStyles";

export const Wrapper = styled.div`
  width: 100%;
  max-width: 1000px;
  margin: 0 auto;
  text-align: center;
  cursor: default;
`;

export const GlossaryInformation = styled.div`
  margin-top: 1rem;
`;

export const Navigation = styled.div`
  margin-bottom: 1rem;
`;

export const Button = styled.button<IIsActive>`
  margin-right: 0.5rem;
  padding: 0.5rem 1rem;
  background-color: ${(props) => (props.active === "true" ? "cyan" : "#fff")};
  color: black;
  border: 1px solid #ccc;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s;

  @media screen and (max-width: 1200px) {
    padding: 0.8rem 1.6rem;
    font-size: 22px;
  }

  @media screen and (max-width: 768px) {
    padding: 0.6rem 1.2rem;
    font-size: 20px;
  }

  @media screen and (max-width: 600px) {
    padding: 0.5rem 1rem;
    font-size: 18px;
  }

  @media screen and (max-width: 500px) {
    padding: 0.4rem 0.8rem;
    font-size: 16px;
  }

  &:hover {
    background-color: ${(props) =>
      props.active === "true" ? "#61ebeb" : "#f2f2f2"};
  }

  &:focus {
    outline: none;
  }
`;

export const CalendarGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1rem;
`;

export const MonthCell = styled.div`
  background-color: #7514bb;
  padding: 1rem;
  border-radius: 5px;
  box-shadow: 0 2px 4px rgba(253, 249, 249, 0.781);

  h3 {
    margin-bottom: 0.5rem;
    background-color: #f2f2f2;
    border-bottom: 1px solid #ccc;
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
    color: black;
    font-size: 18px;
    cursor: default;
    padding: 0.1rem;
    @media screen and (max-width: 1200px) {
      font-size: 20px;
    }
  }
`;

export const CustomCalendar = styled(Calendar)`
  .react-calendar {
    width: 50%;
    background-color: #fff;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    font-family: Arial, sans-serif;
  }

  .react-calendar__navigation {
    display: none;
  }

  .react-calendar__month-view__weekdays {
    text-align: center;
    font-weight: bold;
    font-size: 15px;
    text-transform: uppercase;
    color: black;
    margin-bottom: 10px;
  }

  .react-calendar__month-view__weekdays__weekday {
    padding: 5px;
  }

  .react-calendar__tile {
    padding: 8px;
    text-align: center;
    font-size: 16px;
    color: #333;
    background-color: #fff;
  }

  .react-calendar__tile--now {
    background-color: #ffff00e6;
  }

  .react-calendar__tile--past,
  .past-date {
    background-color: #a59f9f;
    color: #ffffff;
    opacity: 0.6;
  }

  .react-calendar__tile--event {
    cursor: pointer;
  }
`;
