import React, { Component } from 'react'

class MostReads extends Component {
  render() {
    const { mostReads } = this.props;
    return (
      <div className='most-reads'>
        <h4>En çok okunanlar</h4>
        <ul>
          {mostReads.map((post, i) => (
            <li key={i}>
              <a href={`./post/${post.slug}`}>{post.title}</a>
            </li>
          ))}
        </ul>
      </div>
    )
  }
}

export default MostReads
