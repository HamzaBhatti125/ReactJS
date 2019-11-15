import React, { Component } from 'react'
import Assignment1 from './Assignment1'
import Assignment2 from './Assignment2'
import './App.css';
import ReduxApp from './chat-app/redux-app'
import Main from './chat-app/Main'
import Users from './chat-app/users'
export default class App extends Component {
    render() {
        return (
            <div>
                {/* <Main /> */}
                <Users/>
            </div>
        )
    }
}
