import React, { Component } from 'react'
import Config from '../server/configs/config';

const links = [
  { href: './', label: 'Anasayfa' },
  { href: './frontend', label: 'Hakkımda' },
  { href: './page', label: 'Page' },
  { href: './page', label: 'Page' },
  { href: './page', label: 'Page' },
];

class Menu extends Component {
  render() {
    const { pages } = this.props;
    return (
      <div className='menu d-none d-md-block'>
        <ul>
          {pages.map((page, i) => (
            <li key={i}>
              <a href={`${Config.BaseURL}/page/${page.slug}`}>{page.name}</a>
            </li>
          ))}
        </ul>
      </div>
    )
  }
}

export default Menu
