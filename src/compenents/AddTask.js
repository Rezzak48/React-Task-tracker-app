import { useState } from "react";

export const AddTask = ({ onAdd }) => {
  const [text, setText] = useState("");
  const [date, setDate] = useState("");
  const [reminder, setReminder] = useState(false);

  const onSubmit = (e) => {
    e.preventDefault();

    if (!text) {
      alert("Please add a text");
      return;
    }

    onAdd({ text, date, reminder });

    setText("");
    setDate("");
    setReminder(false);
  };

  return (
    <form className="add-form" onSubmit={onSubmit}>
      <div className="form-control">
        <label htmlFor="task-text">Text</label>
        <input
          type="text"
          name="task-text"
          id=""
          placeholder="Add task"
          value={text}
          // receive that object e then access to it's target then it's value
          onChange={(e) => setText(e.target.value)}
        />
        <label htmlFor="task-date">Day & time</label>
        <input
          type="text"
          name="task-date"
          id=""
          placeholder="Add Day & time"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />
        <label htmlFor="task-reminde"> Set Reminder </label>
        <input
          type="checkbox"
          checked = {reminder}
          name="task-reminder"
          id=""
          className="form-control-check"
          value={reminder}
          // you get the object, and for the object you check currentTarget of it . then if checked or not/ return true or false
          onChange={(e) => setReminder(e.currentTarget.checked)}
        />
        <input type="submit" value="Save Task" className="btn btn-block" />
      </div>
    </form>
  );
};
