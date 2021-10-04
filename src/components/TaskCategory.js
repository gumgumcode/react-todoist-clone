import React from "react"
import { taskCatStateContext } from "./MainApp"

const TaskCategory = () => {

  const { setTaskCatState } = React.useContext(taskCatStateContext)

  const handleChange = (e) => {
    const prevActiveItem = document.querySelector('#main-menu input.active')
    if (prevActiveItem !== null) {
      prevActiveItem.classList.remove('active')
    }
    e.target.classList.add('active')
    setTaskCatState(e.target.value)
  }

  return (
    <div className="col-6 mx-4" style={{ width: "280px" }}>
      <div id="main-menu" className="list-group">
        <input
          className="list-group-item list-group-item-action text-capitalize active"
          type="button"
          value="inbox"
          onClick={handleChange}
        />
        <input
          className="list-group-item list-group-item-action text-capitalize"
          type="button"
          value="today"
          onClick={handleChange}
        />
        <input
          className="list-group-item list-group-item-action text-capitalize"
          type="button"
          value="upcoming"
          onClick={handleChange}
        />
        <input
          className="list-group-item list-group-item-action text-capitalize"
          type="button"
          value="done"
          onClick={handleChange}
        />
      </div>
    </div>
  )
}

export default TaskCategory
