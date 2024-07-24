import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/imagenes/logo.svg'; 
import '../../App.css';

const Header = () => {
  return (
    <header className="header">
        <img src={logo} alt="App Logo" className="logo"/>
        <nav className="nav">
        <Link to= "/" className="home-btn">Home</Link>
        <Link to= "/new-video" className="new-video-btn">Nuevo Video</Link>
      </nav>
    </header>
  );
};

export default Header;

