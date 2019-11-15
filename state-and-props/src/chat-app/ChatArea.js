import React, { Component } from 'react'

export default class ChatArea extends Component {
    constructor(props){
        super(props)
        this.state = {
            users: this.props.users,
            mainObj:[],
            msg : ''
        }
    }

    valueChange = (elem)=>{
        this.setState({
            msg : elem.target.value
        })
    } 
    addOverAll = (e) =>{
        this.setState({
            mainObj : [...this.state.mainObj,{sender:this.props.sender,
                receiver:this.props.receiver,
                msg: this.state.msg}]
        })
    }
    render() {
        console.log("the main array is: ",this.state.mainObj)
        return (
            
            <div className='chatarea-bar'>
                {this.state.mainObj.map((elem,index)=>{
                    if(elem.sender === this.props.sender || elem.receiver === this.props.receiver){
                        return(
                            <div key={index}>
                            <div className={(this.props.sender === elem.sender ? 'test1': '')+ ' test'}>{elem.msg}</div>
                            <div className='clearfix'></div>
                            </div>
                        )
                    }else{
                        return null
                    }
                })}

                <div className='text-field'>
                <input type="text" onChange={(e) => this.valueChange(e)} />
                <button onClick={(e)=>this.addOverAll(e)}>Send</button>
                </div>
            </div>
        )
    }
}
