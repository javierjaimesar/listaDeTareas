import { useState, useContext, useRef, useEffect } from "react";
import { TaskContext } from '../context/TaskContext';

function TaskForm() {
    const { createTask, editData, editTask, tasks } = useContext(TaskContext)

    const [task, setTask] = useState({
        id: null,
        title: '',
        descripcion: ''
    })

    const input = useRef()

    useEffect(() => {
        setTask({
            ...task,
            title: '',
            descripcion: ''
        })
    }, [tasks])

    useEffect(() => {
        if (editData !== null) {
            setTask(editData)
        }
    }, [editData])

    useEffect(() => {
        input.current.focus()
    }, [task.title])

    const handleChangeTitle = (e) => {
        setTask({
            ...task,
            title: e.target.value
        })
    }

    const handleChangeDescripcion = (e) => {
        setTask({
            ...task,
            descripcion: e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(editData);
        // console.log(task);

        if (task.descripcion && task.title) {
            if (editData === null) {
                createTask(task)
            } else {
                editTask(task)
            }
        }

    }

    return (
        <div className="max-w-xl mx-auto">
            <form onSubmit={handleSubmit} className="p-8 mb-4">
                <h1 className="text-2xl font-bold text-white mb-3">Crea Tu Tarea</h1>
                <input placeholder="Escribe tu tarea"
                    onChange={handleChangeTitle}
                    value={task.title}
                    required
                    ref={input}
                    className="p-3 w-full mb-2 bg-slate-300 rounded-md"
                />
                <textarea
                    placeholder="Descripcion de la tarea"
                    onChange={handleChangeDescripcion}
                    value={task.descripcion}
                    required
                    className="p-3 w-full mb-2 bg-slate-300 rounded-md h-36"
                >
                </textarea>
                <button
                    className="bg-indigo-500 px-3 py-2 text-white rounded-md"
                >Guardar</button>
            </form>
        </div>
    )
}

export default TaskForm