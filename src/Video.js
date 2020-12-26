
//import 'semantic-ui-css/semantic.min.css'
import React from "react";
import './App.css';
import EmbedExampleYouTube from './componentes/EmbedExampleYouTube';
//import Menu2 from './Menu2';
import Megusta from './Megusta';



//Import web





function About() {
// eslint-disable-next-line
  //var [openModal] = React.useState(false);


  //console.log("modal state", openModal);
  
  return (
    <div>
      <div className="App-izq">
              
      </div>
      <div>
      
            <div className="App-EM">
            <h1>
                    Video Page
            </h1>
              <EmbedExampleYouTube/>
              <Megusta/>
            </div>  
      </div>
</div>
    
  );
}

export default About;
