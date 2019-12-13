import React, { Component } from 'react'
import { Row, Col } from 'reactstrap';
import Sidebar from './Sidebar';
import PostList from './PostList';

export class ContentWrapper extends Component {
  render() {
    return (
      <Row>
      <Col md={12} lg={10}>
        <PostList posts={this.props.posts}/>
      </Col>
      <Col md={12} lg={2}>
        <Sidebar/>
      </Col>
    </Row>
    )
  }
}

export default ContentWrapper
