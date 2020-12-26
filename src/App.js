/* eslint-disable no-undef */

import 'semantic-ui-css/semantic.min.css'

import React from "react";
import './App.css';
import Nav from './Nav';
//import Menu2 from './Menu2';

import Formulario1 from './Formulario1';
import { Segment } from 'semantic-ui-react';
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom';
//import Fig from './Fig';
//import Fig1 from './Fig1';
import Shop from './Shop';
import Video from './Video';

import MiValidador from './componentes/MiValidador';
import Miimagen from './Miimagen';
import Perfil from './Perfil';
//import Buton from './Buton';


function App() {

  return (
    <Router>
      <div className="App">
        
        <header >
            <div className="App-header1">
                <div>
                      <Nav/>
                </div>
                
            </div>        
        </header>
  
        <body>
            <Segment>
              <div>  
                  <div>
                    <div>
                      <Switch>
                          <Route path="/" exact component={Home}/> 
                          <Route path="/Perfil"  component={Perfil}/>
                          <Route path="/Formulario"  component={Formulario1}/> 
                          <Route path="/Video" component={Video}/>
                          <Route path="/Shop" component={Shop}/>
                      </Switch>
                    </div>
                  </div> 
              </div>
              
            </Segment> 
        </body>
          
        
        <footer>
          <div className="App-Footer">
              <div class="ui black vertical footer segment">
                    <div class="ui center aligned container">
                        <h4 class="ui inverted header">&copy; Copyright 2020 | All rights reserved | Rodrigo-Montenegro</h4>
                        <a href="https://www.facebook.com/"><i class="facebook square icon big"></i></a>
                        <a href="https://twitter.com/"><i class="twitter square icon big"></i></a>
                        <a href="https://www.linkedin.com/company/c"><i class="linkedin square icon big"></i></a>
                    </div>
                </div>  
          </div>
        </footer>        
      </div>
    </Router>
    
  );
}
const Home = () => (
  
  <div>
      <h1>
        Home Page Validacion
      </h1>
      <p> clave de usuario : uvalpo     
      </p>
      <p1> 
        <p>
          ingresa tu rut
        </p>
        <MiValidador valor = ""/>
      </p1>
     
      <Miimagen/>
        
      

      
      
  </div>
)

export default App;
