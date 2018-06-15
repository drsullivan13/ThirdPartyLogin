import React, { Component } from 'react'
import TwitterLogin from 'react-twitter-auth'
import FacebookLogin from 'react-facebook-login'
import { GoogleLogin } from 'react-google-login'
import config from './config.json'
import axios from 'axios'

class App extends Component {

    constructor() {
        super()
        this.state = { isAuthenticated: false, user: null, token:                ''}
    }

    logout = () => {
        this.setState({isAuthenticated: false, token: '', user:    null})
    }
    onFailure = (error) => {
        alert(error)
    }
    userInformation = {
        name: "",
        email: ""
    }

    handleFacebookResponse = (response) => {

        this.userInformation.name = response['name']
        this.userInformation.email = response['email']


        this.responseSender(this.userInformation)
    }

    responseSender = (response) => {
        axios.post('http://localhost:8080/', response)
            .then(function (response) {
                console.log(response)
            })
            .catch(function (error) {
                console.log(error)
            })

        console.log(response)
    }

    googleResponse = (response) => {

        this.userInformation.name = response['profileObj']['name']
        this.userInformation.email = response['profileObj']['email']


        this.responseSender(this.userInformation)
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

        return (
            <div className="App">
                {content}
            </div>
        )
    }
}

export default App