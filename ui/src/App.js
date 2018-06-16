import React, { Component } from 'react'
import FacebookLogin from 'react-facebook-login'
import { GoogleLogin } from 'react-google-login'
import config from './config.json'
import axios from 'axios'
import 'semantic-ui-css/semantic.min.css'
import {Container} from "semantic-ui-react"
import {BrowserRouter, Route, Switch} from "react-router-dom"
import Login from "./Login"
import Home from "./Home"

class App extends Component {



    render() {


        return (
            <div>
                <BrowserRouter>
                    <Container>
                        <Switch>
                            <Route exact path="/" component={Login} />
                            <Route path="/home" component={Home} />
                        </Switch>
                    </Container>
                </BrowserRouter>
            </div>
        )
    }
}

export default App