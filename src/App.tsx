import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './Components/NavBar';
import { Outlet } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <div className="mt-5 px-3">
      <Outlet/>
      </div>
    </div>
  );
}

export default App;
