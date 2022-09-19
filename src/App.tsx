import React from 'react';
import './App.css';

import NavBar from './components/NavBar/NavBar';
import SideBar from './components/SideBar/SideBar';
import Container from './components/Container/Container';
import Login from './pages/login/Login';


function App() {
  return (
    <div className="App">
      {/* <Login/> */}
        <SideBar/>
        <div style={{
          width: '85vw',
        }}>
          <NavBar/>
          <Container/>
        </div>
    </div>
  );
}

export default App;
