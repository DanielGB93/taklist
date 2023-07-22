import React from "react";
import { useTaskReducer } from "./Componentes/useTaskReducer";
import TaskForm from "./Componentes/TaskForm";
import TaskList from "./Componentes/TaskList";
export const TaskContext = React.createContext();

function App() {
const {tasks, addTask, deleteTask, updateTask} = useTaskReducer();

  
return (
  <TaskContext.Provider value={{ tasks, addTask, deleteTask, updateTask }}>
    <div className="app">
      <h1>Lista de Tareas</h1>
      <TaskForm />
      <TaskList />
    </div>
  </TaskContext.Provider>
);
};


export default App
