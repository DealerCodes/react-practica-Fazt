import { createContext, useState, useEffect } from "react";
import { tasks } from "../data/Tasks";

export const TaskContext = createContext();



export function TaskContextProvider(props) {

  const [tareas, setTareas] = useState([]);
  function createTask(task) {
    //lo que quiere decir esto es copia todo el arreglo que ya tengo en Task.jsx y añadelo uno nuevo pero sin alterar el anterior
    setTareas([
      ...tareas,
      {
        title: task.title,
        id: tareas.length,
        description: task.description,
      },
    ]);
  }
  function deleteTask(taskId) {
    setTareas(tareas.filter((task) => task.id !== taskId));
  }
  useEffect(() => {
    setTareas(tasks);
  }, []);
  
  return (
    <TaskContext.Provider
      value={{
        tasks: tareas,
        createTask: createTask,
        deleteTask: deleteTask,
      }}
    >
      {props.children}
    </TaskContext.Provider>
  );
}
