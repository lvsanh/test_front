import { MAKE_GUESS } from './types'
import * as request from 'superagent'
import {baseUrl} from '../constants'

// export const makeGuess = (row, col) => {
//   return {
//     type: 'MAKE_GUESS',
//     payload: {
//       row,
//       col
//     }
//   }

export const makeGuess = (id, row, col) => (dispatch, getState) => {
  const state = getState()
  const jwt = state.currentUser.jwt
   request
    .patch(`${baseUrl}/games/${id}`)
    .set('Authorization', `Bearer ${jwt}`)
    .send({x:row, y:col})
    .then(result => {
      dispatch({
        type: MAKE_GUESS,
        payload: result.body
      })
    })
    .catch(err => console.error(err))
}
