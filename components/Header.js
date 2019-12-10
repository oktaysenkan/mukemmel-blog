import React from 'react'

const Header = () => (
  <div>
    <h1>Developer</h1>
    <h6>Learn more</h6>

    <style jsx>{`
      div {
        margin-top: 16px;
        text-align: center;
      }

      h1 {
        font-size: 96px;
        font-family: 'Heading Pro Trial', sans-serif;
      }

      h6 {
        font-size: 14px;
        letter-spacing: 0.8em;
        text-transform: uppercase;
      }
    `}</style>
  </div>
)

export default Header
