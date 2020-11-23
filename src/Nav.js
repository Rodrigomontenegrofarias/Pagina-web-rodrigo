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
                <Link style={navStyle} to='/Formulario'>
                    <li>
                        Formulario
                    </li>

                </Link>
                
            </ul> 
            <ul className="nav-links">
                <Link style={navStyle} to='/Video'>
                    <li>
                        Video
                    </li>

                </Link>
                
            </ul> 
            <ul className="nav-linkss">
                <Link style={navStyle} to='/Shop'>
                    <li>
                        Shop
                    </li>

                </Link>
                
            </ul>   
        </nav>

    );
  }
  
  
  export default Nav;
  
