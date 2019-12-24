import React, { Component } from 'react'
import { Row, Col } from 'reactstrap';
import Post from './Post';

class PostList extends Component {
  render() {
    const { posts } = this.props;
    
    return (
      <Row className='post-list'>
        { posts.map((post, i) => {
          return <Col key={i} md={6}>
              <Post post={post}/>
            </Col>
        })}
      </Row>
    )
  }
}

export default PostList
