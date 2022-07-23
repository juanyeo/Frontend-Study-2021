import React, { Component, useState } from 'react';

class InputComponent extends Component {
    state = {
        name : "",
        num : ""
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name] : e.target.value,
        });
    }

    postName = () => {
        const bodyData = {
            cName: this.state.name,
        }

        fetch("http://localhost:5000/postName", {
            method: "post",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(bodyData),
        })
    }

    componentDidMount() {
        fetch("http://localhost:5000/getNum")
            .then(res => res.json())
            .then(data => this.setState({num: data.num}));
    }

    render() {
        return (
            <>
            <h1>React + Express {this.state.num}</h1><br/>
            <div>
                <input onChange={this.handleChange} name="name"/>
                <button onClick={this.postName}>Send to Express Server</button>
                <h1>Name: {this.state.name}</h1>
            </div>
            </>
        )
    }
}

export default InputComponent;
