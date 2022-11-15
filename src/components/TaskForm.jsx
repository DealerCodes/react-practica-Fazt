import { useState, useContext } from "react";
import {TaskContext} from '../context/TaskContext'

export default function TaskForm() {

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const {createTask} = useContext(TaskContext)
  
  
  const handleSubmit =(e) => {
    e.preventDefault();
    console.log(title, description)
    createTask({
      title,
      description:description
      
    })
    setTitle('')
    setDescription('')
  }
  return (
   <div className="max-w-md mx-auto">
     <form onSubmit={handleSubmit} className="bg-slate-800 p-10 mb-6">
      <h1 className="text-2x1 font-bold text-white mb-3">Añadir nueva tarea</h1>
      <input
        placeholder="escribe una tarea"
        onChange={(e) => setTitle(e.target.value)}
        value={title}
        autoFocus
        className="bg-slate-300 p-3 x-full mb-2"
      />
      <textarea  className="bg-slate-300 p-3 x-full mb-2" placeholder="Escribe la descripcion de la tarea" cols="40" rows="4" onChange={(e)=> setDescription(e.target.value)} value={description}></textarea>
      <button className="bg-indigo-500 text-white px-3 py-1">Guardar</button>
    </form>
   </div>
  );
}
