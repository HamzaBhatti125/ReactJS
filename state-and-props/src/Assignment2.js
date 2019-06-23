import React, { Component } from 'react';
import ChildOne from './childOne'
import ChildTwo from './childTwo'
import './App.css';
export default class Assignment2 extends Component {
    constructor(props){
        super(props)
    }
    state ={
        color: 'white'
    }
    colorChange =(clr) =>{
        this.setState({
            color: clr
        })
    }
    render() {
        return (
            <div>
              <div className='main'>
                  <h1 className='head-1'>Parent Component</h1>
              </div>
              <ChildOne color = {this.state.color} />
              <ChildTwo colorChange = { this.colorChange} />

            </div>
        )
    }
}
