import React from 'react'

const links = [
  { href: 'https://www.facebook.com', label: './assets/facebook.png' },
  { href: 'https://www.twitter.com', label: './assets/twitter.png' },
  { href: 'https://www.instagram.com', label: './assets/instagram.png' },
];
const SocialMediaIcons = () => (
  <nav>
    <ul>
      {links.map(({ href, label }) => (
        <li>
          <a href={href}><img src={label}></img></a>
        </li>
      ))}
    </ul>

    <style jsx>{`
      nav {
        display: flex;
        justify-content: flex-end;
      }
      ul {
        display: flex;
        align-items: flex-end;
      }
      nav > ul {
        padding-right: 24px;
      }
      li {
        display: flex;
        padding: 6px 8px;
      }
      a {
        color: #067df7;
        text-decoration: none;
        font-size: 13px;
      }
    `}</style>
  </nav>
)

export default SocialMediaIcons
