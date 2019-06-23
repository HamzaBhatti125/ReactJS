import React, { Component } from 'react'
import './App.css';
import PropsColor from './propsColor'
import { red } from 'ansi-colors';
export default class Assignment1 extends Component {
 constructor(props){
   super(props)
 }
 state={
   color: "white"
 }
  changeColor =(clr)=>{
    this.setState({
      color: clr
    })
  }
 render() {
  

    return (
      <div>
      <div style={{backgroundColor : this.state.color }}>
       <h1 className="head">State Colour</h1>
       </div>
       <div className="box">
            <div className="box-clr green" onClick={()=>this.changeColor('green')}>Green</div>
            <div className="box-clr white" onClick={()=>this.changeColor('white')}>White</div>
            <div className="box-clr red" onClick={()=>this.changeColor('red')} >Red</div>
            <div className="box-clr black" onClick={()=>this.changeColor('black')}>Black</div>
            <div className="box-clr brown" onClick={()=>this.changeColor('brown')}>Brown</div>
      
      </div>
      <PropsColor color={this.state.color}/>
      </div>
    )
  }
}
