import dayjs from "dayjs";
import React, { useContext } from "react";
import logo from "../assets/logo.png";
import GlobalContext from "../context/GlobalContext";
import Container from "./Container";
export default function CalendarHeader() {
  const { monthIndex, setMonthIndex } = useContext(GlobalContext);


    const handlePrevMonth = () => setMonthIndex(monthIndex - 1);
    const handleNextMonth = () => setMonthIndex(monthIndex + 1);
    const handleReset = () =>{
        setMonthIndex(
            monthIndex === dayjs().month()
            ? monthIndex + Math.random()
            : dayjs().month()
        );
    }

  return (
    <header>
      <Container className="py-2 flex items-center flex-wrap">
      <img src={logo} alt="calendar" className="mr-2 ml-5" />
      <h1 className="md:mr-10 xl:text-xl xs:text-base text-gray-500 fond-bold">
        Calendar
      </h1>
      <button
        onClick={handleReset}
        className="border rounded py-2 px-4 mr-5 ml-2"
      >
        Today
      </button>
      <button onClick={handlePrevMonth}>
        <span className="material-icons-outlined cursor-pointer text-gray-600 mx-2 bg-indigo-200">
          chevron_left
        </span>
      </button>
      <button onClick={handleNextMonth}>
        <span className="material-icons-outlined cursor-pointer text-gray-600 mx-2 bg-indigo-200">
          chevron_right
        </span>
      </button>
      <h2 className="ml-4 mr-4 text-xl text-gray-500 font-bold">
        {dayjs(new Date(dayjs().year(), monthIndex)).format(
          "MMMM YYYY"
        )}
      </h2>
    </Container>
    </header>
      
  );
}
