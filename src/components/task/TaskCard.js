import React from "react";

const TaskCard = ({ taskDetails, setTaskDataState }) => {
    const { id, taskName, dueDate, completed } = taskDetails;

    const completedStyle = {
        fontStyle: "italic",
        color: "#cdcdcd",
        textDecoration: "line-through"
    }

    const handleChange = (e) => {
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

    const handleDelete = (e) => {
        setTaskDataState((prevState) => {
            return prevState.filter(task => {
                return task.id !== Number(e.target.name)
            })
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
                <button 
                    type="button"
                    name={`${id}`} 
                    className="btn btn-secondary mx-2">
                    Edit
                </button>
                <button 
                    type="button"
                    name={`${id}`} 
                    className="btn btn-secondary"
                    onClick={handleDelete}>
                    Delete
                </button>
            </span>
        </label>
    );
};

export default TaskCard;
