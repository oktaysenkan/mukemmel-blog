import React from 'react'

const Footer = () => (
  <div className='wrapper'>
    <div className="logo">
      <a href="#"><h3>Developer</h3></a>
    </div>
    <div className="links">
      <ul>
      <li><a href="#">About</a></li>
      <li><a href="#">Help</a></li>
      <li><a href="#">Legal</a></li>
      </ul>
    </div>

    <style jsx>{`
      .wrapper {
        padding-top: 12px; 
        display: flex;
        border-top: 1.5px solid rgba(0, 0, 0, 0.13);
      }

      .logo {
        display: flex;
      }

      .links {
        display: flex;
        flex: 1;
        justify-content: flex-end;
      }

      .links ul {
        display: flex;
        list-style: none;
      }

      .links li {
        padding-left: 20px;
      }

      h3 {
        font-size: 32px;
        font-family: 'Heading Pro Trial', sans-serif;
      }

      h6 {
        font-size: 14px;
        letter-spacing: 0.8em;
        text-transform: uppercase;
      }

      a {
        color: #000;
        text-decoration: none;
      }
    `}</style>
  </div>
)

export default Footer
