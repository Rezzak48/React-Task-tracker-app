import { useState } from "react";
import Header from "./compenents/Header";
import { Task } from "./compenents/Task";
import { Tasks } from "./compenents/Tasks";
import { AddTask } from "./compenents/AddTask";

function App() {
  const [showAddTAsk, setShowAddTask] = useState(false);
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: "Awesome",
      day: "Feb 04 at 1:30pm",
      reminder: true,
    },
    {
      id: 2,
      text: "Bread",
      day: "Feb 05 at 2:30pm",
      reminder: false,
    },
    {
      id: 3,
      text: "Custom",
      day: "Feb 06 at 3:30pm",
      reminder: false,
    },
    {
      id: 4,
      text: "Drama",
      day: "Feb 06 at 4:30pm",
      reminder: false,
    },
  ]);

  const onDelete = (id) => {
    setTasks(tasks.filter((tsk) => tsk.id !== id));
  };

  const toggleReminder = (id) => {
    setTasks(
      tasks.map((e) => (e.id === id ? { ...e, reminder: !e.reminder } : e))
    );
  };

  const addTask = (task) => {
    const id = Math.floor(Math.random() * 1000) + 1;
    const newTask = { id, ...task };
    setTasks([...tasks, newTask]);
  };

  return (
    <div className="container">
      <Header onAdd = {() => {setShowAddTask(!showAddTAsk)}}  showAdd = {showAddTAsk}/>
      {showAddTAsk && <AddTask onAdd={addTask} /> }
      {tasks.length > 0 ? (
        <Tasks tasks={tasks} onDelete={onDelete} onToggle={toggleReminder} />
      ) : (
        "No Task to show"
      )}
    </div>
  );
}

export default App;
