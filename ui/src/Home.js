import React, { Component } from 'react'
import {Message} from "semantic-ui-react";

class Home extends Component{
    render(){
        return <Message success header='Login Successful' content="You have successfully signed in with third party!" />
    }
}

export default Home