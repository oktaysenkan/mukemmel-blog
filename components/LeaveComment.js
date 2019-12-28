import React, { Component } from 'react'

export default class Comment extends Component {
  render() {
    return (
      <div className='leave-comment'>
          <h3>Leave a comment</h3>
          <div className='name'>
            <h6>NAME</h6>
            <input type="text"></input>
          </div>
          <div className='comment-content'>
            <h6>COMMENT</h6>
            <textarea rows={6}></textarea>
          </div>
        <button className="send-comment">SEND</button>
      </div>
    )
  }
}
