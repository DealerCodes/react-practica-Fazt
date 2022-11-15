import TaskCard from './TaskCard'
import {useContext} from 'react'
import {TaskContext} from '../context/TaskContext'

function TaskList() {
  const {tasks} = useContext (TaskContext);
 
  if (tasks.length === 0) {
    return <h1 className="text-2x1 font-bold text-white mb-3 text-center">no hay tareas aun</h1>;
  }

  return (
    <div className='grid grid-cols-4 gap-2 '>
      {tasks.map((task) => (
        <TaskCard task={task} key={task.id} />
      ))}
    </div>
  );
}
export default TaskList;
