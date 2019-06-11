import React from 'react';
import {Switch, Route} from 'react-router-dom'
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css"
import Navbar from "./components/Navbar"
import ProductLists from "./components/ProductLists"
import Product from "./components/Product"
import Details from "./components/Details"
import Default from "./components/Default"
import Cart from "./components/Cart"

class App extends React.Component{
  render(){
    return(
    <React.Fragment>
      <Navbar />
      <Switch>
        <Route exact path="/" component={ProductLists}></Route>
        <Route path="/details" component={Details}></Route>
        <Route path="/cart" component={Cart}></Route>
        <Route component={Default}></Route>
      </Switch>
      </React.Fragment>
    )
  }
}

export default App;
