import { createAction } from 'redux-starter-kit'

const increment = createAction('counter/increment')
const decrement = createAction('counter/decrement')

export { increment, decrement }
