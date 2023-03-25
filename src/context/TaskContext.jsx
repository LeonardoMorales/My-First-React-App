import { createContext, useState, useEffect } from "react";
import { tasks as data } from "../data/tasks";

export const TaskContext = createContext();

export function TaskContextProvider(props) {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    setTasks(data);
  }, []);

  function createTask(taskTitle, taskDescription) {
    const task = {
      id: crypto.randomUUID(),
      title: taskTitle,
      description: taskDescription,
      completed: false,
    };

    setTasks([...tasks, task]);
  }

  function deleteTask(taskId) {
    const selectedTask = tasks.filter((task) => task.id !== taskId);
    setTasks(selectedTask);
  }

  return (
    <TaskContext.Provider
      value={{
        tasks,
        createTask,
        deleteTask,
      }}
    >
      {props.children}
    </TaskContext.Provider>
  );
}
