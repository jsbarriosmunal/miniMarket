//import './App.css';
import { useAuth0 } from "@auth0/auth0-react";
// import { LoginButton } from "./LoginButton";
import { LogoutButton } from "./LogoutButton";
import { Profile } from "./Profile";
import React from 'react'
import { Link, BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Logo from './img/miniMarketLogo.png';
import Login from './pages/Login';
import Sales from './pages/Sales';
import Products from './pages/Products';
import Users from './pages/Users';
import Team from './pages/Team';


function App() {

  const {isAuthenticated} = useAuth0();

  return (


    <div classname="App">
      {isAuthenticated ? (

    <Router>
      <div>
        <div>
          <h1>!Bienvenidos!</h1>
          <img className="logo" src={Logo} alt = 'Logo' />
        </div>
        <ul className = 'header'>
          <li>
            {/* <Link to = '/'>Inicio</Link> */}
            <Profile />
            <LogoutButton />
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
            {/* <Route path = '/' element = {<Login />} /> */}
            <Route path = '/sales' element = {<Sales />} />
            <Route path = '/products' element = {<Products />} />
            <Route path = '/users' element = {<Users />} />
            <Route path = '/team' element = {<Team />} />
          </Routes>
        </div>
      </div>
    </Router>
      ):(
        <div>
        <h1>¡Bienvenidos!</h1>
        <img className="logo" src={Logo} alt = 'Logo' />
          <div className ="login">
          <Login />
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
