import { useState, useEffect } from "react";

import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header";
import Form from "./components/Form";
import ReminderList from "./components/ReminderList";

function App() {
  const initialState = JSON.parse(localStorage.getItem("reminders")) || [];
  const [reminders, setReminders] = useState(initialState);
  const [reminder, setReminder] = useState("");

  const [date, setDate] = useState("");
  const [time, setTime] = useState("");

  useEffect(() => {
    localStorage.setItem("reminders", JSON.stringify(reminders));
  }, [reminders]);

  return (
    <div className="App">
      
      <Form
        // reminder={reminder}
        // setReminder={setReminder}
        // date={date}
        // setDate={setDate}
        // time={time}
        // setTime={setTime}
        reminders={reminders}
        setReminders={setReminders}
      />
      <ReminderList
        // time={time}
        // date={date}
        // reminder={reminder}
        reminders={reminders}
        setReminders={setReminders}
      />
      <p className="text-center text-info">
        Created by Anirudh Bharadwaj Vangara, for Mr Rishawn Dindial
      </p>
      <p className="text-center text-info fw-bold mt-2">
        Remind Me™ - All rights reserved. © 2022
      </p>
    </div>
  );
}

export default App;
