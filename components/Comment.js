import React, { Component } from 'react'

export default class Comment extends Component {
  render() {
    return (
      <div className='comment'>
        <div className='comment-header'>
          <div className='name'>
            Oktay
          </div>
          <div className='time'>
            10 gün önce
          </div>
        </div>
        <div className='post-content'>
          Merhaba
        </div>
      </div>
    )
  }
}
