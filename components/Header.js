import React, { Component } from 'react'
import Navbar from './Navbar'
import Menu from './Menu';
import Heading from './Heading';

class Header extends Component {
  render() {
    const { pages } = this.props;
    return (
      <div>
        <div className='heading'>
          <Navbar pages={pages}/>
          <Heading/>
        </div>
        <Menu pages={pages}/>
      </div>
    )
  }
}

export default Header
