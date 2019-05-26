import React,{Component} from 'react'


class Green extends Component{
    click = (()=>{
        alert('Green')
    })
    render(){
        return(
            <div className='clr-name green' onClick={this.click}>
            <p>Green</p></div>
        )
    }
    
}

export default Green
