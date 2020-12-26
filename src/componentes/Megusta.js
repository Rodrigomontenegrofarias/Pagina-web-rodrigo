import React, { Component } from 'react'

import { Button, Icon, Label} from 'semantic-ui-react'

import './App.css';


class Megusta1 extends Component {
    
    render() {
         //var [openModal, setOpenModal] = false;
         //console.log("modal state", openModal);
        
        return ( 
            
            <div className="App-megusta" inverted>
                <Button as='div' labelPosition='right'>
                    <Button icon>
                    <Icon name='heart'/>
                    Like
                    </Button>
                    <Label as='a' basic pointing='left'>
                    10,000
                    </Label>
                </Button>
                
                <Button as='div' labelPosition='left'>
                    <Label as='a' basic>
                    2,048
                    </Label>
                    <Button icon>
                    <Icon name='fork' />
                    </Button>
                </Button>
               
                                
            </div>
                    
        );

    }
}

export default Megusta1;
