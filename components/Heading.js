import React from 'react'
import Config from '../server/configs/config'

const Heading = () => (
  <div className='logo'>
    <h1><a href={Config.BaseURL}>mukemmel-blog</a></h1>
  </div>
)

export default Heading
