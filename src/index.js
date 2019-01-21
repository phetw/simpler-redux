import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'

import { Provider } from 'react-redux'
import { configureStore, getDefaultMiddleware } from 'redux-starter-kit'
import logger from 'redux-logger'
import counterReducer from './reducer/counter'
import * as serviceWorker from './serviceWorker'

const reducer = {
  counter: counterReducer,
}

const middleware = [...getDefaultMiddleware(), logger]
const store = configureStore({
  reducer,
  middleware,
  devTools: process.env.NODE_ENV !== 'production',
})

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)

serviceWorker.unregister()
