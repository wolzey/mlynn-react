import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import './nav_item.css'

export default class NavItem extends Component {


  render() {
    return (
      <div className="nav_item">
        <Link to={this.props.link}>
          {this.props.children}
        </Link>
      </div>
    )
  }
}