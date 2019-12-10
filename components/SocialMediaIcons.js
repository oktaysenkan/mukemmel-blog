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
          <a href={href}><img height='20px' src={label}></img></a>
        </li>
      ))}
    </ul>

    <style jsx>{`
      nav {
        margin-top: 42px;
        display: flex;
        justify-content: flex-end;
      }

      ul {
        display: flex;
      }

      nav > ul {
        padding-right: 24px;
      }

      li {
        display: flex;
        padding-left: 20px
      }

      a {
        text-decoration: none;
      }
    `}</style>
  </nav>
)

export default SocialMediaIcons
