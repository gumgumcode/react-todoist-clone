import React, { useState } from 'react'
import TaskCategory from "./TaskCategory"
import TaskEditor from "./TaskEditor"

export const taskCatStateContext = React.createContext()

const MainApp = () => {

    const [taskCatState, setTaskCatState] = useState('inbox')

    return (
        <div className="container">
            <div className="row my-3 justify-content-center">
                <taskCatStateContext.Provider
                    value={{taskCatState, setTaskCatState}}
                >
                    <TaskCategory />
                    <TaskEditor />
                </taskCatStateContext.Provider>
            </div>
        </div>
    )
}

export default MainApp
