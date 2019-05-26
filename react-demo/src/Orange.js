import React,{Component} from 'react'


class Orange extends Component{
    click = (()=>{
        alert('Orange')
    })
    render(){
        return(
            <div className='clr-name orange' onClick={this.click}>
            <p>Orange</p></div>
        )
    }
    
}

export default Orange