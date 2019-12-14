import React from 'react'

const links = [
  { href: './', label: 'Anasayfa' },
  { href: './frontend', label: 'Hakkımda' },
  { href: './page', label: 'Page' },
  { href: './page', label: 'Page' },
  { href: './page', label: 'Page' },
];

const Menu = () => (
  <nav className='menu'>
    <ul>
      {links.map(({ href, label }, i) => (
        <li key={i}>
          <a href={href}>{label}</a>
        </li>
      ))}
    </ul>
  </nav>
)

export default Menu
