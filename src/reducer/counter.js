import { createReducer } from 'redux-starter-kit'
import { increment, decrement } from '../action/counter'

const initialCounterState = 0
const counterReducer = createReducer(initialCounterState, {
  [increment]: (state, action) => state + action.payload,
  [decrement]: (state, action) => state - action.payload,
})

export default counterReducer
