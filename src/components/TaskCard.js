import React from "react";
// import { taskCatStateContext } from "./MainApp";

const TaskCard = ({ taskDetails, setTaskDataState }) => {
    const { id, taskName, dueDate, completed } = taskDetails;

    const completedStyle = {
        fontStyle: "italic",
        color: "#cdcdcd",
        textDecoration: "line-through"
    }

    // const [taskCatState, ] = React.useContext(taskCatStateContext)
    const handleChange = (e) => {
        // console.log(taskCatState)
        setTaskDataState((prevState) => {
            const newTasks = prevState.map(task => {
                if (task.id === Number(e.target.name)) {
                    task.completed = !task.completed
                }
                return task
            })
            return newTasks
        })
    }
    return (
        <label className="list-group-item d-flex gap-2">
            <input
                className="form-check-input flex-shrink-0"
                type="checkbox"
                name={`${id}`}
                value={completed}
                checked={completed}
                onChange={handleChange}
            />
            <span style={completed ? completedStyle : null}>
                {taskName}
                <small className="d-block text-secondary">
                    {completed ? null : dueDate}
                </small>
            </span>
            <span style={{ marginLeft: "auto" }}>
                <button type="button" className="btn btn-secondary mx-2">
                    Edit
                </button>
                <button type="button" className="btn btn-secondary">
                    Delete
                </button>
            </span>
        </label>
    );
};

export default TaskCard;
