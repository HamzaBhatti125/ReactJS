import React, {Component} from 'react';
import './App.css';
import Green from './Green'
import Orange from './Orange'
import Brown from './Brown'
import DeepPink from './DeepPink';

class App extends Component{

render(){
  return (
    <div className="App">
    <Green />
    <Orange />
    <Brown />
    <DeepPink />
    <DeepPink />
    </div>
  );
}
}

export default App;
