/* eslint-disable no-undef */

import 'semantic-ui-css/semantic.min.css'

import React from "react";
import './App.css';
import Nav from './Nav';
import M from './M';
import Prueba from './Prueba';
//import Formulario1 from './Formulario1';
import { Segment } from 'semantic-ui-react';
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Contactanos from './Contactanos';






import Perfil from './Perfil';
//import Buton from './Buton';


function App() {

  return (
    <Router>
      <div className="App">
        
        <header >
            <div className="App-header1">

                <div>
                      <M/>
                </div>
                
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
                          <Route path="/Acercade"  component={Perfil}/>
                          
                          <Route path="/Contactanos"  component={Contactanos}/> 
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
                        <h4 class="ui inverted header">&copy; Copyright 2021 | All rights reserved | Rodrigo-Montenegro</h4>
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
        Consejal Jaime Paredes
      </h1>
      <p> Biografia   
      </p>
      <p> Imagenes   
      </p> 
      <Prueba/>
  </div>
)


export default App;
