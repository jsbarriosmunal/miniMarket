//import './App.css';
import React from 'react'
import { Link, BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Logo from './img/miniMarketLogo.png';
import Login from './pages/Login';
import Sales from './pages/Sales';
import Products from './pages/Products';
import Users from './pages/Users';
import Team from './pages/Team';


function App() {
  return (
    <Router>
      <div>
        <div>
          <h1>!Bienvenidos!</h1>
          <img className="logo" src={Logo} alt = 'Logo' />
        </div>
        <ul className = 'header'>
          <li>
            <Link to = '/'>Inicio</Link>
          </li>
          <li>
            <Link to = '/sales'>Ventas</Link>
          </li>
          <li>
            <Link to = '/products'>Productos</Link>
          </li>
          <li>
            <Link to = '/users'>Usuarios</Link>
          </li>
          <li>
            <Link to = '/team'>Equipo</Link>
          </li>
        </ul>
        <div className = 'content'>
          <Routes>
            <Route path = '/' element = {<Login />} />
            <Route path = '/sales' element = {<Sales />} />
            <Route path = '/products' element = {<Products />} />
            <Route path = '/users' element = {<Users />} />
            <Route path = '/team' element = {<Team />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
