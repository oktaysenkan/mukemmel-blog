import React from 'react'

const links = [
  { href: './', label: 'Anasayfa' },
  { href: './frontend', label: 'Hakkımda' },
  { href: './page', label: 'Page' },
  { href: './page', label: 'Page' },
  { href: './page', label: 'Page' },
];

const Menu = () => (
  <nav>
    <ul>
      {links.map(({ href, label }, i) => (
        <li key={i}>
          <a href={href}>{label}</a>
        </li>
      ))}
    </ul>

    <style jsx>{`
      nav {
        display: flex;
        justify-content: center;
      }

      ul {
        display: flex;
      }

      li {
        display: flex;
        padding: 35px 35px
      }

      a {
        text-decoration: none;
        font-family: 'News Cycle', sans-serif;
        font-weight: bold;
        text-transform: uppercase;
        font-size: 14px;
        color: #000;
      }
    `}</style>
  </nav>
)

export default Menu
