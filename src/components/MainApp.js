import React from 'react'
import PrimaryMenu from './menu/PrimaryMenu'
import TaskEditor from "./task/TaskEditor"
import TopNavBar from "./nav/TopNavBar"

export const AppContext = React.createContext()

const MainApp = () => {

    const [appConfig, setAppConfig] = React.useState({
        menu: {
            primary: ['inbox', 'today', 'upcoming', 'done']
        },
        activeMenu: 'inbox',
        displayTaskModal: false
    })

    return (
        <>
        <TopNavBar/>

        <div className="container">
            <div className="row my-3 justify-content-center">

                <AppContext.Provider 
                    value={{
                        appConfig,
                        setAppConfig
                    }} >

                    <PrimaryMenu/>

                    <TaskEditor />

                </AppContext.Provider>

            </div>
        </div>
        </>
    )
}

export default MainApp
