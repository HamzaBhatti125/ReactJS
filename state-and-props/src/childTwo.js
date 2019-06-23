import React, { Component } from 'react'

export default class ChildTwo extends Component {
    render() {
        return (
            <div>
            <h1 className='child-2'>Child Two Component</h1>
            <div className="box">
            <div className="box-clr green" onClick={()=>this.props.colorChange('green')}>Green</div>
            <div className="box-clr white" onClick={()=>this.props.colorChange('white')}>White</div>
            <div className="box-clr red" onClick={()=>this.props.colorChange('red')} >Red</div>
            <div className="box-clr black" onClick={()=>this.props.colorChange('black')}>Black</div>
            <div className="box-clr brown" onClick={()=>this.props.colorChange('brown')}>Brown</div>
            </div>
            </div>
        )
    }
}
