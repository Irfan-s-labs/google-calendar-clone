import React, { useContext, useEffect, useState } from "react";
import "./App.css";
import CalendarHeader from "./components/CalendarHeader";
import Container from "./components/Container";
import EventModal from "./components/EventModal";
import Month from "./components/Month";
import Sidebar from "./components/Sidebar";
import GlobalContext from "./context/GlobalContext";
import { getMonth } from "./util";


function App() {
  const [currenMonth, setCurrentMonth] = useState(getMonth());
  const { monthIndex, showEventModal } = useContext(GlobalContext);

  useEffect(() => {
    setCurrentMonth(getMonth(monthIndex));
  }, [monthIndex]);

  return (
    <React.Fragment>
      {showEventModal && <EventModal />}

      <div>
        <CalendarHeader />
        <Container className="flex flex-1 h-screen">
          <Sidebar className=""/>
          <Month month={currenMonth} className="flex-noe"/>
        </Container>
        {/* <Container className="h-screen">
          <Main>
          <Sidebar />
          <Month month={currenMonth} />
          </Main>
        </Container> */}
      </div>
    </React.Fragment>
  );
}

export default App;