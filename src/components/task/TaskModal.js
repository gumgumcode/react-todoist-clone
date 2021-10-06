import React from 'react'
import { AppContext } from "../MainApp"
import { toggleTaskModal } from '../../functions/core-functions'

const TaskModal = ({taskDataState}) => {

    const formData = {
        id: '',
        taskName: '',
        dueDate: '',
        completed: false
    }

    const [formDataState, setFormDataState] = React.useState(formData)
    const { appConfig, setAppConfig } = React.useContext(AppContext)

    const closeTaskModal = () => {
        setAppConfig(prevState => {
            toggleTaskModal(prevState.displayTaskModal)
            return {
                ...prevState,
                displayTaskModal: !prevState.displayTaskModal
            }
        })
    }

    const handleNewTask = (e) => {
        taskDataState.push({
            ...formDataState,
            id: new Date().valueOf()
        })
        closeTaskModal()
        setFormDataState(formData)
    }

    const handleFormChange = (e) => {
        const { name, value } = e.target
        setFormDataState(prevState => {
            return {
                ...prevState,
                [name]: String(value),
                completed: appConfig.activeMenu === 'done' ? true : false
            }
        })
    }

    return (
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
                            onClick={closeTaskModal} >
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
    )
}

export default TaskModal
