import PropTypes from 'prop-types'
import React, { useState, useContext, createContext, useRef } from 'react'

let SideNavContext = createContext({})

function BaseSideNav ({ children }) {
  const [activeItem, setActiveItem] = useState()

  return (
    <SideNavContext.Provider value={{ activeItem, setActiveItem }}>
      {children}
    </SideNavContext.Provider>
  )
}

BaseSideNav.propTypes = {
  children: PropTypes.node
}

function Item ({ render }) {
  let { activeItem, setActiveItem } = useContext(SideNavContext)
  const itemEl = useRef()

  const props = {
    ref: itemEl,
    active: activeItem === itemEl,
    setActive: () => setActiveItem(itemEl)
  }

  return render(props)
}

Item.propTypes = {
  render: PropTypes.func
}

BaseSideNav.Item = Item

export default BaseSideNav
