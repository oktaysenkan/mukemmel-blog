import React from 'react'

const posts = [
  { href: './categories/backend', label: 'Backend' },
  { href: './categories/frontend', label: 'Frontend' },
  { href: './categories/sektör', label: 'Sektör' },
  { href: './categories/yazılım', label: 'Yazılım' },
  { href: './categories/tasarım', label: 'Tasarım' },
];

const Content = () => (
  <nav>
    <ul>
      {links.map(({ href, label }, i) => (
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

export default Content
