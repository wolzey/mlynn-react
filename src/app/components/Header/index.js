import React, { Component } from 'react'

import Nav from '../../components/Nav'
import NavItem from '../../components/Nav/subcomponents/NavItem'

export default class Header extends Component {


  render() {
    return (
      <Nav>
        <div className="brand">
          <NavItem link={'/'}>Home</NavItem>
        </div>
        <div className="menu">
          <NavItem link={'/about'}>About</NavItem>
          <NavItem link={'/gallery'}>Gallery</NavItem>
          <NavItem link={'/blog'}>Blog</NavItem>
          <NavItem link={'/contact'}>Contact</NavItem>
        </div>
      </Nav>
    )
  }
}
