import React, { Component } from 'react'
import Config from '../server/configs/config';

class MobileMenu extends Component {
  constructor() {
    super();
    this.state = {
      showMobileMenu: false,
    }
  }

  menuClicked = () => {
    this.setState(
      {showMobileMenu: !this.state.showMobileMenu}
    )
  }

  render() {
    const { pages } = this.props;
    const mobileMenuVisibility = this.state.showMobileMenu ? 'visible' : 'hidden';
    const mobileMenuImage = this.state.showMobileMenu ? 'close.png' : 'menu.png';
    return (
      <div>
        <div className='mobile-menu-icon d-block d-sm-none'>
          <img onClick={this.menuClicked} src={`/assets/${mobileMenuImage}`} height='20px'></img>
        </div>
        <div className='mobile-menu' style={{visibility: mobileMenuVisibility}}>
          <nav>
            <ul>
              { pages.map((page, i) => {
                  return <li key={i}>
                      <a href={`${Config.BaseURL}/page/${page.slug}`}>{page.name}</a>
                    </li>
              }) }
            </ul>
          </nav>
        </div>
      </div>
    )
  }
}

export default MobileMenu