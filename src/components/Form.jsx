import React from "react";
import { Button } from "react-bootstrap";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

const Form = ({
  reminder,
  setReminder,
  date,
  setDate,
  time,
  setTime,
  reminders,
  setReminders,
}) => {
  // input vars

  const [reminderInput, setReminderInput] = useState("");
  const [dateInput, setDateInput] = useState("");
  const [timeInput, setTimeInput] = useState("");

  // Functions
  const addData = (reminder, date, time) => {
    alert("Your reminder has been created!");
    setReminders([...reminders, { id: uuidv4(), reminder, date, time }]);
    setReminderInput("");
    setDateInput("");
    setTimeInput("");

    console.log(reminders);
  };

  // On input change

  const onReminderInputChange = (e) => {
    setReminderInput(e.target.value);
  };

  const onDateInputChange = (e) => {
    setDateInput(e.target.value);
  };

  const onTimeInputChange = (e) => {
    setTimeInput(e.target.value);
  };

  // return statement

  return (
    <div className="bg-info m-4 rounded d-flex flex-row justify-content-center">
      <form
        className="form d-flex flex-row align-content-center justify-content-center"
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <div className="form-body p-2 align-content-center justify-content-center">
          <h1 className="text-white fw-bold text-center">RemindMe</h1>
          <h3 className="text-white text-center text-bold">
            A browser-integrated reminder app for
            <span className="fw-light text-decoration-underline">
              {" "}
              your peace of mind
            </span>
          </h3>
          <div className="form-input-box mt-5 d-flex flex-row align-content-center justify-content-center">
            <input
              type="text"
              required
              value={reminderInput}
              placeholder="Enter A Reminder..."
              title="Just enter a task..."
              onChange={onReminderInputChange}
            />
            <input
              type="date"
              required
              value={dateInput}
              onChange={onDateInputChange}
              className="mx-3"
              title="When do you want to be reminded?"
            />
            <input
              type="time"
              min="00:01"
              max="23:59"
              required
              value={timeInput}
              title="At what time do you want to be reminded?"
              onChange={onTimeInputChange}
            />
          </div>
          <div
            className="form-button-box d-flex justify-content-center my-4"
            onClick={() => addData(reminderInput, dateInput, timeInput)}
          >
            <Button className="bg-success">Add This!</Button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Form;
