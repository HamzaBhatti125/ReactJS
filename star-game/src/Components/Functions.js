import React, { Component } from 'react'
import utils from './utils'
import colors from './colors'

class PlayStar extends Component {
  render() {
    return (
        <React.Fragment>
            {utils.range(1, this.props.count).map(starId =>
                <div key={starId} className="star" />
        )}
        </React.Fragment>
    )
  }
}


class PlayNumber extends Component {
  render() {
    return (
        <button 
          style={{ backgroundColor: colors[this.props.status] }}
          key={this.props.number} 
          onClick={() => this.props.onClick(this.props.number, this.props.status)}
          className="number">{this.props.number}</button>
    )
  }
}

class PlayAgain extends Component {
  render() {
    return (
      <div className="game-done">
        <div 
          className="message"
          style={{ color: this.props.gameStatus === 'lost' ? 'red' : 'green'}}
        >
  	      {this.props.gameStatus === 'lost' ? 'Game Over' : 'Bingo!!'}
  	    </div>
          <button onClick={this.props.onClick}>Play Again</button>
      </div>
    )
  }
}


export {PlayNumber, PlayStar, PlayAgain};