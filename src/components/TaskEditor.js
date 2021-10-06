import React from 'react'
import TaskCard from "./TaskCard"
import { tasksData } from "../data/tasksData"
import { taskCatStateContext } from "./MainApp"

const TaskEditor = () => {

    const formData = {
        id: '',
        taskName: '',
        dueDate: '',
        completed: false
    }

    const [taskDataState, setTaskDataState] = React.useState(tasksData)
    const [modalState, setModalState] = React.useState(false)
    const [formDataState, setFormDataState] = React.useState(formData)
    const { taskCatState } = React.useContext(taskCatStateContext)

    let newTasksData = taskDataState.filter((task) => {
        switch (taskCatState) {
            case 'inbox':
                return task.completed === false
            case 'done':
                return task.completed === true
            default:
                return task
        }
    })

    newTasksData = newTasksData.map((task) => {
        return <TaskCard
            key={task.id}
            taskDetails={{
                id: task.id,
                taskName: task.taskName,
                dueDate: task.dueDate,
                completed: task.completed
            }}
            setTaskDataState={setTaskDataState}
        />
    })

    const addBackDrop = () => {
        const backdrop = document.createElement('div')
        backdrop.setAttribute('id', 'backdrop')
        backdrop.classList.add('modal-backdrop', 'fade', 'show')
        document.body.appendChild(backdrop)
    }

    const removeBackDrop = () => {
        const backdrop = document.querySelector('#backdrop')
        backdrop.remove()
    }

    const showTaskModal = () => {
        const modalElement = document.querySelector('#add-task-modal')
        modalElement.style.display = "block"
    }

    const hideTaskModal = () => {
        const modalElement = document.querySelector('#add-task-modal')
        modalElement.style.display = "none"
    }

    const toggleTaskModal = () => {
        if (modalState === false) {
            document.body.classList.add('modal-open')
            addBackDrop()
            showTaskModal()
            setModalState(true)
        } else {
            document.body.classList.remove('modal-open')
            removeBackDrop()
            hideTaskModal()
            setModalState(false)
        }
    }

    const handleNewTask = (e) => {
        // setFormDataState(prevState => {
        //     return {
        //         ...prevState,
        //         id: new Date().valueOf(),
        //     }
        // })
        taskDataState.push(formDataState)
        toggleTaskModal()
        setFormDataState(formData)
    }

    const handleFormChange = (e) => {
        const { name, value } = e.target
        setFormDataState(prevState => {
            return {
                ...prevState,
                id: new Date().valueOf(),
                [name]: String(value),
                completed: taskCatState === 'done' ? true : false
            }
        })
    }

    return (
        <div className="list-group mx-0 col-6">
            <h3>Inbox</h3>

            {newTasksData}

            <button
                id="add-task-button"
                type="button"
                className="btn btn-primary my-3"
                data-toggle="modal"
                data-target="#newTaskModal"
                onClick={toggleTaskModal}
            >
                Add a new task
            </button>

            <div id="add-task-modal" className="modal fade show">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-body">
                            <form className="my-3">
                                <h3>Add Task</h3>
                                <div className="form-group">
                                    <input
                                        type="text"
                                        name="taskName"
                                        className="form-control my-3"
                                        placeholder="Add a new task"
                                        value={formDataState.taskName}
                                        onChange={handleFormChange} />
                                    <input
                                        type="date"
                                        name="dueDate"
                                        className="form-control my-3"
                                        value={formDataState.dueDate}
                                        onChange={handleFormChange} />
                                </div>
                            </form>
                        </div>
                        <div className="modal-footer">
                            <button
                                id="addTaskCloseBtn"
                                type="button"
                                className="btn btn-secondary"
                                data-dismiss="modal"
                                onClick={toggleTaskModal} >
                                Close
                            </button>
                            <button
                                type="button"
                                className="btn btn-primary"
                                onClick={handleNewTask} >
                                Add
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TaskEditor
