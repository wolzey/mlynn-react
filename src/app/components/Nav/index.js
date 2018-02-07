import React, { Component } from 'react'

import './nav.css'

class Nav extends Component {


  render() {
    return (
      <div className="nav">
        {this.props.children}
      </div>
    )
  }
}

export default Nav