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
                <Link style={navStyle} to='/Acercade'>
                    <li>
                        Acerca de 
                    </li>

                </Link>
                
            </ul> 
           
            <ul className="nav-links">
                <Link style={navStyle} to='/Contactanos'>
                    <li>
                        Contactanos
                    </li>

                </Link>
                
            </ul> 
           
         
         
        </nav>

    );
  }
  
  
  export default Nav;
  
