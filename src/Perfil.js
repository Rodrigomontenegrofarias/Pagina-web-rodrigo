//import 'semantic-ui-css/semantic.min.css'
import React from "react";
import './App.css';
//import EmbedExampleYouTube from './EmbedExampleYouTube';
//import Menu2 from './Menu2';

//import { validate } from "./rut";



//Import web



import { Button, Divider, Input, Segment } from 'semantic-ui-react'

function Perfil() {
// eslint-disable-next-line
  //var [openModal] = React.useState(false);


  //console.log("modal state", openModal);

  

  
  
  return (
    <div>
    
            
            <div >
              <h1>
                    Perfil Page
              </h1>
              <Segment basic textAlign='center'>
                <Input
                  action={{ color: 'blue', content: 'Search' }}
                  icon='search'
                  iconPosition='left'
                  placeholder='Order #'
                />

                <Divider horizontal></Divider>

                <Button
                  color='teal'
                  content='Create New Order'
                  icon='add'
                  labelPosition='left'
                />
              </Segment>
            </div>  
    </div>


    
  );
}

export default Perfil;

