import React,{Component} from 'react'


class DeepPink extends Component{
    click = (()=>{
        alert('DeepPink')
    })
    render(){
        return(
            <div className='clr-name deepPink' onClick={this.click}>
            <p>DeepPink</p></div>
        )
    }
    
}

export default DeepPink