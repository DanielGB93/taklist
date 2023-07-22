import React, { useContext } from "react";
import { TaskContext } from "../App";

const TaskList = () => {
  const { tasks, deleteTask, updateTask } = useContext(TaskContext);

  return (
    <ul>
      {tasks.map((task) => (
        <li key={task.id}>
          <input
            type="checkbox"
            checked={task.completed}
            onChange={() => updateTask(task.id, { completed: !task.completed })}
          />
          <span style={{ textDecoration: task.completed ? "line-through" : "none" }}>
            {task.text}
          </span>
          <button onClick={() => deleteTask(task.id)}>Borrar</button>
        </li>
      ))}
    </ul>
  );
};

export default TaskList;
