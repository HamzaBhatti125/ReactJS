import React, { Component } from 'react'
import ChatArea from './ChatArea'
export default class Users extends Component {
    constructor(props){
        super(props);
        this.state ={
            
            users: [{id:0,name:'hamza',isloggedIn:false},
                    {id:1,name:'Wajahat',isloggedIn:false},
                    {id:2,name:'Aun',isloggedIn:false},
                    {id:3,name:'Atif',isloggedIn:false},],
            sender: null,
            receiver : null,
        }
            }

    
        
        render() {
        this.active = (elem)=>{
            this.setState({
                sender: elem.name
            })
        }
        this.receiver = (elem) =>{
            this.setState({
                receiver: elem.name
            })
        }
        return (
            <React.Fragment>
            <div className='side-bar'>
                {this.state.users.map((elem,id) =>{
                    return(
                        <div className={(this.state.receiver === elem.name ? "green " : "" ) + ' user-div'} onClick={()=> this.receiver(elem)} onDoubleClick={()=> this.active(elem)}  key={id}>
                        <span className={this.state.sender === elem.name ? "visible": ''}></span> {elem.name}</div>
                    )
                })}
            </div>
            <ChatArea sender={this.state.sender} receiver={this.state.receiver} users={this.state.users}/>
            </React.Fragment>
        )
    }
}

