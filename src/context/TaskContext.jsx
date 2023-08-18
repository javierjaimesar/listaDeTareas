import { useState, useEffect, createContext } from 'react';
//import { tasks as data } from '../data/tasks.js';

export const TaskContext = createContext()

export function TaskContextProvider(props) {
    const [tasks, setTasks] = useState(() => {
        const taskStorage = window.localStorage.getItem('tarea')
        return taskStorage ? JSON.parse(taskStorage) : []
    })
    const [id, setId] = useState(() => {
        const idStorage = window.localStorage.getItem('id')
        return idStorage ?? '0'
    })

    const [editData, setEditData] = useState(null)

    useEffect(() => {
        const newId = parseInt(id) + 1
        setId(newId)
    }, [tasks])

    useEffect(() => {
        window.localStorage.setItem('tarea', JSON.stringify(tasks))
        window.localStorage.setItem('id', id)
    }, [tasks])

    const createTask = (task) => {
        setTasks([...tasks,
        {
            id: id,
            title: task.title,
            descripcion: task.descripcion
        }])
    }

    const deleteTask = (taskId) => {
        const newTasks = tasks.filter((task) => task.id !== taskId)
        setTasks(newTasks)
        setEditData(null)
    }

    const editTask = (task) => {
        console.log(task);
        const newTasks = tasks.map((t) => (
            t.id === task.id ? task : t
        ))
        setTasks(newTasks)
        setEditData(null)
    }

    return (
        <TaskContext.Provider value={{
            tasks,
            createTask,
            deleteTask,
            editTask,
            editData,
            setEditData,
            id
        }} >
            {props.children}
        </TaskContext.Provider>
    )
}
