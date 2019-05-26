import React,{Component} from 'react'

class Brown extends Component{
    click = (()=>{
        alert('Brown')
    })
    render(){
        return(
            <div className='clr-name brown' onClick={this.click}>
            <p>Brown</p></div>
        )
    }
    
}

export default Brown