import React from 'react'
import { AppContext } from "../MainApp"

const MenuItem = ({ menuName, activeMenu }) => {

  const { setAppConfig } = React.useContext(AppContext)

  let menuClass = "list-group-item list-group-item-action text-capitalize"
  menuClass = activeMenu === menuName ? menuClass += ' active' : menuClass

  const handleMenuClick = (e) => {
    const prevActiveItem = document.querySelector('#main-menu input.active')
    if (prevActiveItem !== null) {
      prevActiveItem.classList.remove('active')
    }
    e.target.classList.add('active')
    setAppConfig(prevState => {
      return {
        ...prevState,
        activeMenu: e.target.value
      }
    })
  }

  return (
    <input
      className={menuClass}
      type="button"
      value={menuName}
      onClick={handleMenuClick} />
  )
}

export default MenuItem
