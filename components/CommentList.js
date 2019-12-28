import React, { Component } from 'react'
import Comment from './Comment';

export class CommentList extends Component {
  render() {
    const { comments } = this.props;
    const isHaveComment = Boolean(comments.length);
    return (
      <div>
        {
          isHaveComment && comments.map((comment, i) => {
            return <Comment 
              key={i}
              name={comment.name}
              creationAt={comment.creationAt}
              content={comment.content}
            />
          })
        }
      </div>
    )
  }
}

export default CommentList
