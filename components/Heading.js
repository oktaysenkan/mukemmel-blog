import React from 'react'
import Config from '../server/configs/config'

const Heading = () => (
  <div className='logo d-none d-md-block'>
    <h1><a href={Config.BaseURL}>Developer</a></h1>
  </div>
)

export default Heading
