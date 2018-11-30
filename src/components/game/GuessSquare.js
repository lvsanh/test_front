import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { makeGuess } from '../../actions/makeGuess'
import { connect } from 'react-redux'
import './GuessSquare.css'

class GuessSquare extends PureComponent {
  static propTypes = {
    value: PropTypes.string.isRequired,
    makeGuess: PropTypes.func.isRequired,
    x: PropTypes.number.isRequired,
    y: PropTypes.number.isRequired
  }

  handleClick = () => {
    // const { x, y, makeGuess} = this.props
    // return makeGuess(x,y)
    const { x, y, board, makeGuess } = this.props
    makeGuess(board.game, x, y)
  }

  render() {
    console.log(this.props)
    const { value } = this.props
    return (
      // <div className="GuessSquare" onClick={this.handleClick}/>
      <div className="GuessSquare" onClick={this.handleClick}>
        {(value === 's' || value === 'w') &&
          <div className={`guess value-${value}`}>
          </div>
        }
      </div>
    )
  }
}

// export default connect(null, { makeGuess })(GuessSquare)
export default connect (({board})=>({board}), { makeGuess })(GuessSquare)