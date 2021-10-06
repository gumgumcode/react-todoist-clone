import React from 'react'

const MenuItemWrapper = ({children}) => {
    return (
        <div className="col-6 mx-4" style={{ width: "280px" }}>
            <div id="main-menu" className="list-group">
                {children}
            </div>
        </div>
    )
}

export default MenuItemWrapper
