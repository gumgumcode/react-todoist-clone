import React from "react"
import MenuItemWrapper from './MenuItemWrapper'
import MenuItem from './MenuItem'

import { AppContext } from "../MainApp"

const PrimaryMenu = () => {

  const { appConfig } = React.useContext(AppContext)

  const menuItems = appConfig.menu.primary.map((item, index) => {
    return <MenuItem 
              key={index} 
              menuName={item}
              activeMenu={appConfig.activeMenu} />
  })

  return (
    <MenuItemWrapper>
      {menuItems}
    </MenuItemWrapper>
  )
}

export default PrimaryMenu
