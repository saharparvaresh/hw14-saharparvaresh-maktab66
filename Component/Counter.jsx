import React, { Component } from "react";
import Button from "./Button";


class Counter extends Component {
    constructor(){
        super()
        this.clickHandlerIncrease = this.clickHandlerIncrease.bind(this);
        this.clickHandlerDecrease = this.clickHandlerDecrease.bind(this);
    }

    state = {
        counter : 0,
        title : [
            "increase",
            "decrease"
        ]
    }

    clickHandlerIncrease () {
        this.setState({
            counter : this.state.counter + 1
        })
    }

    clickHandlerDecrease () {
        if (this.state.counter > 0) {
            this.setState({
                counter: this.state.counter - 1
            })
        }
    }

    render () {
        return (
            <>
                <h1>{this.state.counter}</h1>
                <Button title={this.state.title} clickHandlerIncrease={this.clickHandlerIncrease} clickHandlerDecrease={this.clickHandlerDecrease} />
            </>
        )
    }
}

export default Counter;
