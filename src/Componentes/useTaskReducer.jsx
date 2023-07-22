// taskReducer.js
import { useReducer } from "react";

const ADD_TASK = "ADD_TASK";
const DELETE_TASK = "DELETE_TASK";
const UPDATE_TASK = "UPDATE_TASK";

const taskReducer = (state, action) => {
  switch (action.type) {
    case ADD_TASK:
      return [...state, action.payload];
    case DELETE_TASK:
      return state.filter((task) => task.id !== action.payload);
    case UPDATE_TASK:
      return state.map((task) =>
        task.id === action.payload.id ? { ...task, ...action.payload.updatedTask } : task
      );
    default:
      return state;
  }
};

export const useTaskReducer = () => {
  const [tasks, dispatch] = useReducer(taskReducer, []);

  const addTask = (task) => {
    dispatch({ type: ADD_TASK, payload: task });
  };

  const deleteTask = (taskId) => {
    dispatch({ type: DELETE_TASK, payload: taskId });
  };

  const updateTask = (taskId, updatedTask) => {
    dispatch({ type: UPDATE_TASK, payload: { id: taskId, updatedTask } });
  };

  return { tasks, addTask, deleteTask, updateTask };
};
