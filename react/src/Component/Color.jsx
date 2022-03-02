import React, { Component } from "react";


class Color extends Component {
    render() {
        return (
            <ul>
                {this.props.colorlist.map(v=>{
                    return <li>#{v}</li>
                })}
            </ul>
        )
    }
}


export default Color;

