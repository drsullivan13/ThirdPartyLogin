import React, { Component } from 'react'
import FacebookLogin from 'react-facebook-login'
import { GoogleLogin } from 'react-google-login'
import config from './config.json'
import axios from 'axios'
import 'semantic-ui-css/semantic.min.css'
import {Form, Segment, Grid} from "semantic-ui-react";

class Login extends Component {

    constructor() {
        super()
        this.state = {userInformation: {name: "", email: ""}}
    }

    onFailure = (error) => {
        this.props.history.push('/LoginError')
    }


    handleFacebookResponse = (response) => {
        this.setState({userInformation: {name: response['name'], email: response['email']}})
        this.responseSender()
        this.props.history.push('/home')
    }

    responseSender = () => {
        axios.post('http://localhost:8080/', this.state.userInformation)
            .then(function (response) {
                console.log(response)
            })
            .catch(function (error) {
                console.log(error)
            })

        console.log(this.state.userInformation)
    }

    googleResponse = (response) => {

        this.setState({userInformation: {name: response['profileObj']['name'], email: response['profileObj']['email']}})

        this.responseSender()

        this.props.history.push('/home')
    }

    render() {
        let content =
            (
                <div>
                    <FacebookLogin
                        appId={config.FACEBOOK_APP_ID}
                        autoLoad={false}
                        fields="name,email,picture"
                        callback={this.handleFacebookResponse} />
                    <GoogleLogin
                        clientId={config.GOOGLE_CLIENT_ID}
                        buttonText="Login"
                        onSuccess={this.googleResponse}
                        onFailure={this.onFailure}
                    />
                </div>
            )

        return (
            <div className="App">
                <Grid>
                    <Grid.Row centered>
                        <Segment style={{width: 550, height: 250}}>
                            <Form>
                                <Form.Input fluid label='Name' placeholder='John Smith' />
                                <Form.Input fluid label='Email' placeholder='johnsmith@email.com' style={{paddingBottom:15}}/>
                            </Form>
                            {content}
                        </Segment>
                    </Grid.Row>
                </Grid>

            </div>
        )
    }
}

export default Login