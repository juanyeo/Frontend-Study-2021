import React, {Component} from 'react';

class Component1 extends Component {
    constructor(props) {
        super(props);
        this.state = {};
        console.log('Component1 constructor ()');
    }

    render () {
        console.log('Component1 render ()');
        return (
            <h2>Component 1</h2>
        )
    }
}

export default Component1;