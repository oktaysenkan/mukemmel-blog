import React, { Component } from 'react'
const moment = require('moment');

export default class Comment extends Component {
  render() {
    const { name, creationAt, content } = this.props;
    return (
      <div className="comment">
        <div className='name'>
          <h5>{name}</h5>
        </div>
        <div className="date">
          <span>{moment(parseInt(creationAt)).fromNow()}</span>
        </div>
        <div className='content'>
          {content}
        </div>
      </div>
    )
  }
}
