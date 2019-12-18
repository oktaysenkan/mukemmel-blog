import React, { Component } from 'react'
import Logo from './Logo'
import Navbar from './Navbar'
import Menu from './Menu';

class Header extends Component {
  render() {
    const { pages } = this.props;
    return (
      <div>
        <div className='header'>
          <Navbar pages={pages}/>
          <Logo/>
        </div>
        <Menu pages={pages}/>
      </div>
    )
  }
}

export default Header
