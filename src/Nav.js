import React from "react";
import './App.css';
import { Link } from 'react-router-dom';

function Nav() {

    const navStyle = {
        color: 'white'
    };
    return (
        <nav>
            <ul className="nav-links">
                <Link style={navStyle} to='/'>
                    <li>
                        Home
                    </li>

                </Link>
                
            </ul>
            <ul className="nav-links">
                <Link style={navStyle} to='/Perfil'>
                    <li>
                        Perfil
                    </li>

                </Link>
                
            </ul> 
            <ul className="nav-links">
                <Link style={navStyle} to='/Formulario1'>
                    <li>
                        Formulario1
                    </li>

                </Link>
                
            </ul> 
           
         
         
        </nav>

    );
  }
  
  
  export default Nav;
  
