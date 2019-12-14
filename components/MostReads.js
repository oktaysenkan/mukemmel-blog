import React, { Component } from 'react'

const mostReads = [
  "Lorem ipsum dolor sit amet",
  "Suspendisse vitae interdum magna",
  "Lorem ipsum dolor sit amet",
  "Suspendisse vitae interdum magna",
];

class MostReads extends Component {
  render() {
    return (
      <div className='most-reads'>
        <h4>En çok okunanlar</h4>
        <ul>
          {mostReads.map((post, i) => (
            <li key={i}>
              <a href='#'>{post}</a>
            </li>
          ))}
        </ul>
      </div>
    )
  }
}

export default MostReads
