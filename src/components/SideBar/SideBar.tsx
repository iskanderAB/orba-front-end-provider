import React from 'react'
import SidebarButtonList from '../SidebarButtonList/SidebarButtonList';

import "./SideBar.css";

function SideBar() {
  return (
    <div className='sideBar'>
        <div className='orba'>ORBA.</div>
        <SidebarButtonList/>
    </div>
  )
}

export default SideBar