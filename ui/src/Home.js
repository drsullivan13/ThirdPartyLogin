import React, { Component } from 'react'
import {Button, Message} from "semantic-ui-react";

class Home extends Component{

    handleClick = () => {
        this.props.history.push('/')
    }

    render(){

        return (
            <div>
                <Message success header='Login Successful' content="You have successfully signed in with third party!" />
                <Button
                    content="Logout"
                    onClick={this.handleClick}
                />
            </div>

        )
    }
}

export default Home