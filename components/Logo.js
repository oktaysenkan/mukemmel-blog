import React from 'react'
import Config from '../server/configs/config'

const Heading = () => (
  <div className='logo'>
    <h1><a href={Config.BaseURL}>Developer</a></h1>
    <h6><a href={Config.BaseURL}>Learn more</a></h6>
  </div>
)

export default Heading
