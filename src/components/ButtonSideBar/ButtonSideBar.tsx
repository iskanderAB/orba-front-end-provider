import React from 'react'
import "./ButtonSideBar.css";

function ButtonSideBar({ selected }:{ selected: boolean }) {
  return (
    <button className={
      selected ? "sidebarbuttonSelected" : "sidebarbutton" 
    }>Dashboard</button>
  )
}

export default ButtonSideBar