import React, { Component } from 'react'
import {Button, Message} from "semantic-ui-react";

class LoginError extends Component{

    handleClick = () => {
        this.props.history.push('/')
    }

    render(){

        return (
            <div>
                <Message error header='Login Unsuccessful' content="There was an error during attempted third party login. Please try again" />
                <Button
                    content="Back to Login"
                    onClick={this.handleClick}
                />
            </div>

        )
    }
}

export default LoginError