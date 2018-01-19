import React, {Component} from 'react';

import {
    Button,
    Jumbotron
} from 'reactstrap';





export default class Profile extends Component{


    render(){
        return(
            <Jumbotron>
                <h1>This is your profile page</h1>
                <p>This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
                <p><Button bsStyle="primary">Learn more</Button></p>
            </Jumbotron>
        )
    }
}
