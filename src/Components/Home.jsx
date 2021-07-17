import React, { Component } from 'react'
import logo from "../logo.svg";

export default class Home extends Component {
    render() {
        return (
            <div>
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="Logotipo" />
                </header>
            </div>
        )
    }
}
