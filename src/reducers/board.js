// import { MAKE_GUESS } from '../actions/types'
import { ADD_BOARD, BOARD_SENT } from '../actions/types'

const initialState = {
  board: [
    ['0', '0', '0', '0', '0', '0', '0', '0', '0', '0'],
    ['0', '0', '0', '0', '0', '0', '0', '0', '0', '0'],
    ['0', '0', '0', '0', '0', '0', '0', '0', '0', '0'],
    ['0', '0', '0', '0', '0', '0', '0', '0', '0', '0'],
    ['0', '0', '0', '0', '0', '0', '0', '0', '0', '0'],
    ['0', '0', '0', '0', '0', '0', '0', '0', '0', '0'],
    ['0', '0', '0', '0', '0', '0', '0', '0', '0', '0'],
    ['0', '0', '0', '0', '0', '0', '0', '0', '0', '0'],
    ['0', '0', '0', '0', '0', '0', '0', '0', '0', '0'],
    ['0', '0', '0', '0', '0', '0', '0', '0', '0', '0']
  ],
  game: null
  // board2: [
  //   ['0', '0', '0', '0', '0', '0', '0', '0', '0', '0'],
  //   ['0', '0', '0', '0', '0', '0', '0', '0', '0', '0'],
  //   ['0', '0', '0', '0', '0', '0', '0', '0', '0', '0'],
  //   ['0', '0', '0', '0', '0', '0', '0', '0', '0', '0'],
  //   ['0', '0', '0', '0', '0', '0', '0', '0', '0', '0'],
  //   ['0', '0', '0', '0', '0', '0', '0', '0', '0', '0'],
  //   ['0', '0', '0', '0', '0', '0', '0', '0', '0', '0'],
  //   ['0', '0', '0', '0', '0', '0', '0', '0', '0', '0'],
  //   ['0', '0', '0', '0', '0', '0', '0', '0', '0', '0'],
  //   ['0', '0', '0', '0', '0', '0', '0', '0', '0', '0']
  // ]
}

export default (state = initialState, { type, payload } = {}) => {
  switch (type) {
    // case MAKE_GUESS:
    //   return {...state,board2:state.board2.map((row, rowIndex) =>{
    //     if (rowIndex !== payload.row) return row

    //     return row.map((value, colIndex) => {
    //       if (colIndex !== payload.col) return value

    //       switch(value) {
    //         case '0': return '0x'
    //         case '1': return '1x'
    //         case '2': return '2x'
    //         case '3': return '3x'
    //         case '4': return '4x'
    //         case '5': return '5x'
    //         default: return '0'
    //       }
    //     })
    //   })}
    // default: return state
    case ADD_BOARD:
      return payload
    case BOARD_SENT:
      return payload
    default:
      return state
  }
}
