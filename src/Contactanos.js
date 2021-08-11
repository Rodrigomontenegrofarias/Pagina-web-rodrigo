//import 'semantic-ui-css/semantic.min.css'

//import EmbedExampleYouTube from './EmbedExampleYouTube';
//import Menu2 from './Menu2';
import React from 'react'


import emailjs from "emailjs-com";




function Contactanos() {
// eslint-disable-next-line
  //var [openModal] = React.useState(false);


  //console.log("modal state", openModal);
    function sendEmail(e) {
    e.preventDefault();

    emailjs.sendForm('gmail', 'youtube', e.target, 'user_mgkq3FD4w8pHhUJ5TUQ5o')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
        e.target.reset()
    }
  

  
  
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
                <div className="container">
                <form onSubmit={sendEmail}>
                        <div className="row pt-5 mx-auto">
                            <div className="col-8 form-group mx-auto">
                                <input type="text" className="form-control" placeholder="Name" name="name"/>
                            </div>
                            <div className="col-8 form-group pt-2 mx-auto">
                                <input type="email" className="form-control" placeholder="Email Address" name="email"/>
                            </div>
                            <div className="col-8 form-group pt-2 mx-auto">
                                <input type="text" className="form-control" placeholder="Subject" name="subject"/>
                            </div>
                            <div className="col-8 form-group pt-2 mx-auto">
                                <textarea className="form-control" id="" cols="30" rows="8" placeholder="Your message" name="message"></textarea>
                            </div>
                            <div className="col-8 pt-3 mx-auto">
                                <input type="submit" className="btn btn-info" value="Send Message"></input>
                            </div>
                        </div>
                    </form>
                </div>
         
          </div>  
    </div>
  
  
);
}

export default Contactanos;

