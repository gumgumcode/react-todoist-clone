import React, { useState } from "react"
import TopNavBar from "./components/TopNavBar"
import TaskCategory from "./components/TaskCategory"
import TaskEditor from "./components/TaskEditor"

function App() {

  return (
    <>
      <div id="main">
        <TopNavBar />
        <div className="container">
          <div className="row my-3 justify-content-center">
            <TaskCategory />
            <TaskEditor/>
          </div>
        </div>
      </div>
    </>
  )

}

export default App
