import { Button } from "react-bootstrap";
import React from "react";

const ReminderList = ({ reminders, setReminders }) => {
  const deleteReminder = (id) => {
    setReminders(reminders.filter((reminder) => reminder.id !== id));
  };

  return (
    <div className="p-3 d-grid gap-4">
      {reminders.map((reminder) => {
        return (
          <div
            key={reminder.id}
            className="rounded bg-info p-5 m-3 d-flex flex-column text-center"
          >
            <h3 className="text-white">{reminder.reminder}</h3>
            <div>
              <span className="text-white">
                Due on {reminder.date} at {reminder.time}
              </span>
            </div>
            <Button
              className="bg-danger p-2 m-2 rounded"
              onClick={() => deleteReminder(reminder.id)}
            >
              Delete
              <span>
                <i className="text-red fa fa-trash"></i>
              </span>
            </Button>
          </div>
        );
      })}
    </div>
  );
};

export default ReminderList;
