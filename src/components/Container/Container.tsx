import React from 'react'
import { Routes, Route, Link } from "react-router-dom";
import "./Container.css";

function Container() {
  return (
    <div style={{
        width: "83vw",
        height: "100vh",
    }}>
      <div className='dashboard-container'>
        <Routes>
          <Route path="/english" element={<div> hello</div>} />
          <Route path="/frensh" element={<div> bonjour</div>} />
        </Routes>
      </div>
    </div>
  )
}

export default Container