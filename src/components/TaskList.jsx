import { useContext } from 'react';
import { TaskContext } from '../context/TaskContext';

import TaskCard from './TaskCard';

function TaskList() {
    const { tasks } = useContext(TaskContext)

    const id = parseInt(window.localStorage.getItem('id'))

    return (
        <div className='mx-auto'>
            {
                tasks.length === 0
                    ? <h1 className='text-white text-4xl font-bold text-center'>No hay tareas aún</h1>
                    : tasks.map((task, indice) => (
                        <TaskCard key={`${id}${indice}`} task={task} />
                    ))
            }
        </div>
    )
}

export default TaskList