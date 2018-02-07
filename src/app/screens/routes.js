import React from 'react'
import { Route, Switch } from 'react-router-dom'

import Home from './Home'
import VisibleBlogList from './Blog'

export default class Routes extends React.Component {
  render() {
    return (
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/blog" exact component={VisibleBlogList} />
      </Switch>
    )
  }
}