import React, { Component } from 'react'

export default class propsColor extends Component {
    render() {
        return (
            <div>
                <div style={{backgroundColor: this.props.color}}>
                <h1 className="head">Props Color</h1>
                </div>
            </div>
        )
    }
}
