import React from 'react'
import '../Footer.css'
import { Link } from 'react-router-dom';
export const Footer = () => {
    return (
        <footer className="site-footer">
        <div className="center">
             <Link to="/" className="route">Home</Link>
             <Link to="/Tshirt" className="route">Tshirt</Link>
             <Link to="/Shoes" className="route">Shoes</Link>
             <Link to="/Jacket"className="route">Jacket</Link>
        </div>
  </footer>
    )
}
