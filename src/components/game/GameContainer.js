import React, { Component } from 'react';
// import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import {Redirect} from 'react-router-dom'
// import {getBoards, joinGame, updateGame, getGames} from '../../actions/games'
import {getBoard, updateGame, getGames} from '../../actions/games'
import {getUsers} from '../../actions/users'
import {userId} from '../../jwt'
import Board from './Board'
import GuessBoard from './GuessBoard'
import {withRouter} from 'react-router'
import './GameContainer.css'
import BackButton from '../assets/GoBackButton'

class GameBattle extends Component {

  // //here or in ShipsContainer or both?
  // joinGame = () => this.props.joinGame(this.props.game.id)
  makeMove = (toRow, toCell) => {
    const {game, updateGame} = this.props

    const board = game.board.map(
      (row, rowIndex) => row.map((cell, cellIndex) => {
        if (rowIndex === toRow && cellIndex === toCell) return game.turn
        else return cell
      })
    )
    updateGame(game.id, board)
  }

  componentWillMount() {
    if (this.props.authenticated) {
      if (this.props.game===null) this.props.getGames()
      // this.props.getBoards(this.props.match.params.id)
      this.props.getBoard(this.props.match.params.id)
      if (this.props.users === null) this.props.getUsers()
    }
  }

  render() {
    // const {game, users, authenticated, userId} = this.props
    const {game, users, authenticated, userId, board} = this.props
    console.log('^^^^^^^^^^^^^^^^^^^^^^^^');
    // console.log(game);
    // if (game === null || users === null) return 'Loading...'
    console.log(board.game, this.props.match.params.id);
    if (game === null || users === null || board.game !== this.props.match.params.id) return 'Loading...'
    if (game && game.players.length<2) return 'Loading...'

    if (!authenticated) return (
			<Redirect to="/login" />
		)
    // if (!game) return 'Not found'

    const player = game.players.find(p => p.userId === userId)
    console.log(player);
    if (player && ((player.symbol==='1' && !game.p1ready) || (player.symbol==='2' && !game.p2ready)))
      return (
  			<Redirect to={`/games/${game.id}/ships`} />
      )
      let board1, board2
      if (player && (player.symbol==='2')) {
       board1=game.board2
       board2=game.board1
     }
     else {
       board1 = game.board1
       board2 = game.board2
     }
      if (game.status === 'finished') {
       if (!player)
         return(
           <div>
             <div>
               {`Game finished! Player ${game.winner} won`}
             </div>
             <div className="GoBack">
               <BackButton />
             </div>
           </div>
         )
       else {
         return (
           <div>
             {
               player.symbol === game.winner &&
               <div>
                 Game finished! You won
               </div>
             }
             {
               player.symbol !== game.winner &&
               <div>
                 Game finished! You Lose
               </div>
             }
             <div className="GoBack">
               <BackButton />
             </div>
           </div>
         )
       }
     }

    return (
      // <div>
      // <div class="outer-paper">
      //   <h1>Game #{game.id}</h1>
      //
      //   <p>Status: {game.status}</p>
      //
      //   {
      //     game.status === 'started' &&
      //     player && player.symbol === game.turn &&
      //     <div>Its your turn!</div>
      //   }
      //
      //   {
      //     game.status === 'pending' &&
      //     game.players.map(p => p.userId).indexOf(userId) === -1 &&
      //     <button onClick={this.joinGame}>Join Game</button>
      //   }
      //
      //   <hr />
      //
      //   {game.board.map(this.renderRow)}
      // </div>)
      <div>
        <div className="Boards">
          <Board board={board1}/>
          <GuessBoard player={player} board={board2}/>
        </div>
        <div className="GoBack">
          <BackButton />
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state, props) => ({
  authenticated: state.currentUser !== null,
  userId: state.currentUser && userId(state.currentUser.jwt),
  game: state.games && state.games[props.match.params.id],
  // boards: state.boards,
  board: state.board,
  users: state.users
})

const mapDispatchToProps = {
  // getBoards, getGames, getUsers, joinGame, updateGame
  getBoard, getGames, getUsers, updateGame
}

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(GameBattle)
)
