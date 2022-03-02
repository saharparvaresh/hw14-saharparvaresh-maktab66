import React, { Component } from "react";


class Button extends Component {
    render() {
        return (
            <>
                <button title={this.props.title[0]} onClick={this.props.clickHandlerIncrease}>increase</button>
                <button title={this.props.title[1]} onClick={this.props.clickHandlerDecrease}>decrease</button>
            </>
        )
    }
}

export default Button
