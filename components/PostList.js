import React, { Component } from 'react'
import { Row, Col } from 'reactstrap';
import Post from './Post';
import Config from '../server/configs/config';

class PostList extends Component {
  render() {
    const { posts } = this.props;
    
    return (
      <Row>
      { posts.map((post, i) => {
        return <Col key={i} md={6}>
            <Post data={post}/>
          </Col>
      })}
    </Row>
    )
  }
}

export default PostList
