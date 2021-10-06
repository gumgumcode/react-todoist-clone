import React from 'react'
import TaskCard from "./TaskCard"
import { tasksData } from "../../data/tasksData"
import { AppContext } from "../MainApp"
import TaskModal from './TaskModal'
import { toggleTaskModal } from '../../functions/core-functions'

const TaskEditor = () => {

    const [taskDataState, setTaskDataState] = React.useState(tasksData)
    const { appConfig, setAppConfig } = React.useContext(AppContext)

    let newTasksData = taskDataState.filter((task) => {
        switch (appConfig.activeMenu) {
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

    const openTaskModal = () => {
        setAppConfig(prevState => {
            toggleTaskModal(prevState.displayTaskModal)
            return {
                ...prevState,
                displayTaskModal: !prevState.displayTaskModal
            }
        })
    }

    return (
        <div className="list-group mx-0 col-6">
            <h3 className="text-capitalize">{appConfig.activeMenu}</h3>

            {newTasksData}

            <input
                id="add-task-button"
                type="button"
                className="btn btn-primary my-3"
                data-toggle="modal"
                data-target="#newTaskModal"
                onClick={openTaskModal}
                value="Add a new task" />

            <TaskModal taskDataState={taskDataState} />

        </div>
    )
}

export default TaskEditor
