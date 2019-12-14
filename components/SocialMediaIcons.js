import React, { Component } from 'react'


const links = [
  { href: 'https://www.facebook.com', label: './assets/facebook.png' },
  { href: 'https://www.twitter.com', label: './assets/twitter.png' },
  { href: 'https://www.instagram.com', label: './assets/instagram.png' },
];


class SocialMediaIcons extends Component {
  render() {
    return (
      <div className='social-media'>
        <ul>
          {links.map(({ href, label }, i) => (
            <li key={i}>
              <a href={href}><img height='20px' src={label}></img></a>
            </li>
          ))}
        </ul>
      </div>
    )
  }
}

export default SocialMediaIcons
