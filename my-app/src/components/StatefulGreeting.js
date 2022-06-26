import React from "react";

class StatefulGreeting extends React.Component {

    constructor(props) {
        super(props);
            this.state = {
                introduction: 'Hello',
                buttonText: 'Exit',
            }
        }

    handleClick() {
        this.setState({
            introduction: 'Goodbye!',
        });
    }

    render() {
        return (
        <div>
        <h1>{this.state.introduction} {this.props.name}, {this.props.greeting} </h1>
        <button onClick={()=>this.handleClick()}>{this.state.buttonText}</button>
        </div>
        )
    }
}

export default StatefulGreeting;