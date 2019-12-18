import React, { Component } from 'react'
import MobileMenu from './MobileMenu'
import SocialMediaIcons from './SocialMediaIcons'

class Navbar extends Component {
  render() {
    const { pages } = this.props;
    return (
      <div className='navbar-wrapper'>
        <MobileMenu pages={pages}/>
        <SocialMediaIcons/>
      </div>
    )
  }
}

export default Navbar
