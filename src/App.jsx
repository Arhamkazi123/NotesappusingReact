import React, { useState } from "react";
import "./App.css";
import Form from "./Form";
import Mapcomponent from "./Mapcomponent";

function App() {
  const [field, setField] = useState("");
  const [tasks, setTasks] = useState([]);

  const addTask = (e) => {
    e.preventDefault();
    setTasks((prevTasks) => [...prevTasks, field]);
    setField("");
  };

  const deleteTask = (index) => {
    const newTasks = [...tasks];
    newTasks.splice(index, 1);
    setTasks(newTasks);
  };

  return (
    <>
      <h1>Todo App</h1>

      <Form addTask={addTask} field={field} setField={setField} />

      <div className="maincontent">
        <Mapcomponent tasks={tasks} deleteTask={deleteTask} />
      </div>
    </>
  );
}

export default App;
