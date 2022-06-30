import React, { Component } from "react";

class NavBarSample extends Component {
    constructor(props) {
        super(props);
        this.state = {
            message: 'Hello, guest',
            buttonText: 'log in'
        }
    }

    handleClick() {
        this.setState((prev,props)=> ({
            message: prev.message === 'Hello, guest' ? 'Welcome back, user' : 'Hello, guest',
            buttonText: prev.buttonText === 'log in' ? 'log out' : 'log in',
        }));
    }

    render() {
        return (
            <div>
                <h1>My Gallery</h1>
                <h4><span>{this.state.message}</span></h4> <button onClick={()=>this.handleClick()}>{this.state.buttonText}</button>
            </div>
        );
    }

}

export default NavBarSample;