import React, { Component } from 'react'
import Config from '../server/configs/config';

class MostReads extends Component {
  render() {
    const { mostReads } = this.props;
    return (
      <div className='most-reads'>
        <h4>En çok okunanlar</h4>
        <ul>
          { mostReads && mostReads.map((post, i) => (
            <li key={i}>
              <a href={`${Config.BaseURL}/post/${post.slug}`}>{post.title}</a>
            </li>
          ))}
        </ul>
      </div>
    )
  }
}

export default MostReads
