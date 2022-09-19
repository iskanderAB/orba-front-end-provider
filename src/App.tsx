import React from 'react';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import SideBar from './components/SideBar/SideBar';
import Container from './components/Container/Container';

function App() {
  return (
    <div className="App">
        <NavBar/>
        <SideBar/>
        <Container/>
    </div>
  );
}

export default App;
