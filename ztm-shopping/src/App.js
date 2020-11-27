import React, { Component } from 'react';
import { CardList } from './components/cardList/CardList'

export default class App extends Component {
  state = {
    name: 'Hamza Hameed',
    monsters: []
  }
  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => this.setState({ monsters: users }))
  }
  render() {
    return (
      <div>
        <CardList monsters = {this.state.monsters} />
      </div>
    )
  }
}
