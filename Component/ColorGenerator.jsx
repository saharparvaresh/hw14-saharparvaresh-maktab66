import React, { Component } from "react";
import Color from "./Color";


class ColorGenerator extends Component {
    constructor() {
        super();
        this.colorGenerator = this.colorGenerator.bind(this);
    }

    state = {
        color : []
    }

    colorGenerator () {
        this.setState({
            color: [ ...this.state.color, Math.random().toString(16).substring(2, 8) ]
        })
    }

    render () {
        return (
            <>
                <button onClick={this.colorGenerator}>Add Color</button>
                <Color colorlist={this.state.color} />
            </>
        )
    }


}

export default ColorGenerator;

