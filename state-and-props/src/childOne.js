import React, { Component } from 'react'

export default class ChildOne extends Component {
    render() {
        return (
            <div>
                <div className='child-1'>
                    <h1>Child One Component</h1>
                    <div style={{backgroundColor: this.props.color}}>
                    <div className='child-1-color'>Color</div>
                    </div>
                </div>
            </div>
        )
    }
}
