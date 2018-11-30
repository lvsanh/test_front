import React, { PureComponent } from 'react'
import './GoBackButton.css'
import { withRouter } from 'react-router'

class BackButton extends PureComponent {
  render() {
    const { history } = this.props
    return(
      <button className="back" onClick={ () => history.push('/games') }>
          BACK TO ALL GAMES
      </button>
    )
  }
}

export default withRouter(BackButton)
