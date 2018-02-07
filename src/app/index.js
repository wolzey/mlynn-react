import React from 'react'
import { Provider } from 'react-redux'
import { store } from './redux'
import Screens from './screens'
import './app.css'

export default function App (props) {
  return (
    <Provider store={store}>
      <Screens/>
    </Provider>
  )
}