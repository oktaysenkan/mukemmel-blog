import React, { Component } from 'react'
import ReactMarkdown from 'react-markdown';

class PostTitle extends Component {
  render() {
    const { title } = this.props;
    return (
      <div>
        <ReactMarkdown className='markdown-body' source={`# ${title}`} />
      </div>
    )
  }
}

export default PostTitle
