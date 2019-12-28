import React, { Component } from 'react'

export default class Comment extends Component {
  render() {
    const { name, creationDate, content } = this.props;
    return (
      <div className="comment">
        <div className='name'>
          <h5>{name}</h5>
        </div>
        <div className="date">
          <span>{creationDate}</span>
        </div>
        <div className='content'>
          {content}
        </div>
      </div>
    )
  }
}
