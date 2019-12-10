import React from 'react'

const links = [
  { href: './categories/backend', label: 'Backend' },
  { href: './categories/frontend', label: 'Frontend' },
  { href: './categories/sektör', label: 'Sektör' },
  { href: './categories/yazılım', label: 'Yazılım' },
  { href: './categories/tasarım', label: 'Tasarım' },
];

const Menu = () => (
  <nav>
    <ul>
      {links.map(({ href, label }) => (
        <li>
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
