// import React, { Component } from 'react'
// import Users from './users'
// import ChatArea from './ChatArea'
// export default class Main extends Component {
//     constructor(props){
//         super(props);

//         this.state={
//             users: [{id:0,name:'hamza',isloggedIn:false},
//                     {id:1,name:'Wajahat',isloggedIn:false},
//                     {id:2,name:'Aun',isloggedIn:false},
//                     {id:3,name:'Atif',isloggedIn:false},],
//             sender: null,
//             receiver : null,
//             msg: null,
//             mainObj : []
//         }
//     }

//         getSender = (arg1) =>{
//             this.setState({
//                 sender: arg1
//             })
//         }
//         getReceiver = (arg1) =>{
//             this.setState({
//                 receiver : arg1
//             })
//         }

//         getMsg = (arg1) =>{
//             this.setState({
//                 mainObj : [...this.state.mainObj,{sender:this.state.sender,
//                     receiver:this.state.receiver,
//                     msg: arg1}]
//             })
//         }
//     render() {
//         // console.log("sender from main" , this.state.sender)
//         // console.log("receiver from main" , this.state.receiver)
//         // console.log("the msg is: ",this.state.msg)
//         // console.log("OverAll is: ",this.state.mainObj)
//         return (
//             <div>
//                 <h1>Hello from Main</h1>
//                 <div className='main-div'>
//                 <Users getSender={this.getSender} getReceiver={this.getReceiver} users={this.state.users} sender={this.state.sender} receiver={this.state.receiver}/>
//                 <ChatArea getMsg={this.getMsg} mainObj={this.state.mainObj}/>
//                 </div>
//             </div>
//         )
//     }
// }
