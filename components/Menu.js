import React, { Component } from 'react'

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
      <nav className='menu'>
        <ul>
          {pages.map((page, i) => (
            <li key={i}>
              <a href={`./${page.slug}`}>{page.name}</a>
            </li>
          ))}
        </ul>
      </nav>
    )
  }
}

export default Menu
