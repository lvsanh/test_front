import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
//import { makeGuess } from '../../actions/makeGuess'
import { connect } from 'react-redux'
import './Square.css'

class Square extends PureComponent {
  static propTypes = {
    value: PropTypes.string.isRequired,
    x: PropTypes.number.isRequired,
    y: PropTypes.number.isRequired
  }

  // handleClick = () => {
  //   const { x, y, makeGuess} = this.props
  //   return makeGuess(x,y)
  // }

  render() {
    console.log(this.props)
    const { x, y, value, board } = this.props
    return (
      // <div className={`BoardSquare value-${this.props.value}`}/>
      <div className={`BoardSquare ships-${board.board[x][y][0]}`}>
        {(value === 's' || value === 'w') &&
          <div className={`guess value-${value}`}>
          </div>
        }
      </div>
    )
  }
}

// export default connect(null)(Square)
export default connect (({board})=>({board}))(Square)