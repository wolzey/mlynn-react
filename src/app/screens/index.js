import React from 'react'
import { Router } from 'react-router-dom'
import createHistory from 'history/createBrowserHistory'

import Routes from './routes'

export default function Screens(props) {
  return (
    <Router history={createHistory()}>
      <div className="App">
        <div className="body">
          <Routes/>
        </div>
      </div>
    </Router>
  )
}