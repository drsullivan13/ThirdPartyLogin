import React, { Component } from 'react'
import FacebookLogin from 'react-facebook-login'
import { GoogleLogin } from 'react-google-login'
import config from './config.json'
import axios from 'axios'
import 'semantic-ui-css/semantic.min.css'
import {Form, Segment, Grid} from "semantic-ui-react";

class App extends Component {

    constructor() {
        super()
        this.state = { isAuthenticated: false, user: null, token:'', userInformation: {name: "", email: ""}}
    }

    logout = () => {
        this.setState({isAuthenticated: false, token: '', user:    null})
    }
    onFailure = (error) => {
        alert(error)
    }


    handleFacebookResponse = (response) => {
        this.setState({userInformation: {name: response['name'], email: response['email']}})
        this.responseSender()
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
    }

    render() {
        let content = !!this.state.isAuthenticated ?
            (
                <div>
                    <p>Authenticated</p>
                    <div>
                        {this.state.user.email}
                    </div>
                    <div>
                        <button onClick={this.logout} className="button">
                            Log out
                        </button>
                    </div>
                </div>
            ) :
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
        const square = {width: 550, height: 250}

        return (
            <div className="App">
                <Grid>
                    <Grid.Row centered>
                        <Segment style={square}>
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

export default App