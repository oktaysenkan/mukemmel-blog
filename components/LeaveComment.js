import React, { Component } from 'react'
import { request } from 'graphql-request'
import Config from '../server/configs/config';

export default class Comment extends Component {
  constructor(props) {
    super(props)

    this.state = {
      postId: props.postId,
      name: null,
      comment: null,
    };

    this.commentChanged = this.commentChanged.bind(this);
    this.nameChanged = this.nameChanged.bind(this);
  }

  commentChanged = (event) => {
    this.setState({
      comment: event.target.value
    })
  }

  nameChanged = (event) => {
    this.setState({
      name: event.target.value
    })
  }

  createComment = async () => {
    const { postId, name, comment } = this.state;
    

    if (name && comment) {
      const query = `mutation ($comment: CreateCommentInput!) {
        createComment(comment: $comment) {
          name
          content
          verified
        }
      }`;

      const variables = {
        comment: {
          post: postId,
          name: name,
          content: comment,
        }
      }

      try {
        const data = await request(Config.GraphqlURL, query, variables)
        window.location.reload();
      } catch (error) {
        console.log(error);
      }
    }
  }

  render() {
    return (
      <div className='leave-comment'>
          <h3>Leave a comment</h3>
          <div className='name'>
            <h6>NAME</h6>
            <input onChange={this.nameChanged} type="text"></input>
          </div>
          <div className='comment-content'>
            <h6>COMMENT</h6>
            <textarea onChange={this.commentChanged} rows={6}></textarea>
          </div>
        <button onClick={this.createComment} className="send-comment">SEND</button>
      </div>
    )
  }
}
