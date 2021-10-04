import { useState, useContext } from 'react'
import TaskCard from "./TaskCard"
import { tasksData } from "../data/tasksData"

const TaskEditor = () => {

    const [taskDataState, setTaskDataState] = useState(tasksData)
    // const [menuItem, setMenuItem] = useState('inbox')

    const menuItem = 'inbox'
    // inbox, today, upcoming, done, search

    let newTasksData = taskDataState.filter((task) => {
        switch(menuItem) {
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

    return (
        <div className="list-group mx-0 col-6">
            <h3>Inbox</h3>
            {newTasksData}

            { /* MODAL BUTTON */}
            <button id="mybutton" type="button" className="btn btn-primary my-3" data-toggle="modal"
                data-target="#newTaskModal">
                Add a new task
            </button>

            { /* MODAL */}
            <div className="modal fade" id="newTaskModal">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-body">
                            <form className="my-3">
                                <h3>Add Task</h3>
                                <div className="form-group">
                                    <input type="text" className="form-control my-3" id="newTask"
                                        placeholder="Add a new task" />
                                    <input type="date" className="form-control my-3" id="newTaskDate" />
                                </div>
                            </form>
                        </div>
                        <div className="modal-footer">
                            <button id="addTaskCloseBtn" type="button" className="btn btn-secondary"
                                data-dismiss="modal">
                                Close
                            </button>
                            <button type="button" className="btn btn-primary">Add</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TaskEditor
