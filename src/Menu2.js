import React, { Component } from 'react'
import { Menu } from 'semantic-ui-react'
import { Link } from 'react-router-dom';

export default class Menu2 extends Component {
 // state = { activeItem: 'home' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const navStyle = {
        color: 'white'
    };
   // const { activeItem } = this.state

    return (
      <Menu inverted vertical>
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
      </Menu>
    )
  }
}
