import React, { useState, useContext } from "react";
import { TaskContext } from "../App";

const TaskForm = () => {
  const [taskText, setTaskText] = useState("");
  const { addTask } = useContext(TaskContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (taskText.trim() !== "") {
      const newTask = {
        id: Date.now(),
        text: taskText.trim(),
        completed: false,
      };
      addTask(newTask);
      setTaskText("");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={taskText}
        onChange={(e) => setTaskText(e.target.value)}
        placeholder="Agregar tarea..."
      />
      <button type="submit">Agregar</button>
    </form>
  );
};

export default TaskForm;
