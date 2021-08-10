
//import 'semantic-ui-css/semantic.min.css'
import React from "react";
import './App.css';
//import EmbedExampleYouTube from './EmbedExampleYouTube';
//import Menu2 from './Menu2';

import { Form, Input, TextArea, Button } from 'semantic-ui-react'





//Import web





function Formulario1() {
// eslint-disable-next-line
  //var [openModal] = React.useState(false);


  //console.log("modal state", openModal);
  
  return (
    
      
      <div className="container border"
      style={{
        marginTop: "50px",
        width: "100%",
        backgroundImage: `url('https://upload.wikimedia.org/wikipedia/commons/thumb/b/b5/Petorca_Chile.jpg/800px-Petorca_Chile.jpg')`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        
        
      }}
      >
    
            
            <div>
              <h1>
                    Contactanos
              </h1>
              <Form>
                <Form.Group widths='equal'>
                  <Form.Field
                    id='form-input-control-first-name'
                    control={Input}
                    label='First name'
                    placeholder='First name'
                  />
                  <Form.Field
                    id='form-input-control-last-name'
                    control={Input}
                    label='Last name'
                    placeholder='Last name'
                  />
                  
                </Form.Group>
                <Form.Field
                  id='form-textarea-control-opinion'
                  control={TextArea}
                  label='Opinion'
                  placeholder='Opinion'
                />
                <Form.Field
                  id='form-input-control-error-email'
                  control={Input}
                  label='Email'
                  placeholder='joe@schmoe.com'
                  error={{
                    content: 'Please enter a valid email address',
                    pointing: 'below',
                  }}
                />
                <Form.Field
                  id='form-button-control-public'
                  control={Button}
                  content='Confirm'
                  label='Label with htmlFor'
                />
              </Form>
           
            </div>  
      </div>
    
    
  );
}

export default Formulario1;
