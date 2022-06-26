import React from 'react';

const FunctionalGreetingWithProps = (props) => {
    console.log(props);
    return <div>
        <p>Hello {props.name}, {props.greeting}.</p>
        <p>As you are {props.age}, you are not eligible to drive.</p>
    </div>;
}

export default FunctionalGreetingWithProps;