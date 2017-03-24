import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import { combineReducers } from 'redux'

import App from './containers/App'
import categoriesReducer from './reducers/categoriesReducer'

let reducers = { 
  categories: categoriesReducer 
}
const appReducer = combineReducers(reducers)
let store = createStore(appReducer)

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)

let unsubscribe = store.subscribe(() => console.log(store.getState()) )
