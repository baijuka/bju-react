import React from "react";

class StatefulGreeting extends React.Component {

    constructor(props) {
        super(props);
            this.state = {
                introduction: 'Hello',
                buttonText: 'Exit',
                count: 0,
            }
        }

    handleClick() {
        this.setState((prevState, prevProps) => {
            return {
                introduction: prevState.introduction ==='Hello' ? 'Goodbye' : 'Hello',
                buttonText: prevState.buttonText === 'Exit' ? 'Enter' : 'Exit' ,
            }
        });
    }

    increment() {
        this.setState((prevState, prevProps)=>{   
          return {
            count: prevState.count + 1,
          } 
        });
    }

    render() {
        return (
        <div>
        <h1>{this.state.introduction} {this.props.name}, {this.props.greeting} </h1>
        <h2>Count: {this.state.count}</h2>
        <button onClick={()=>this.handleClick()}>{this.state.buttonText}</button>
        <button onClick={()=>this.increment()}>+</button>
        </div>
        )
    }
}

export default StatefulGreeting;