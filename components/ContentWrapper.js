import React, { Component } from 'react'
import { Row, Col } from 'reactstrap';
import Sidebar from './Sidebar';
import PostList from './PostList';

export class ContentWrapper extends Component {
  render() {
    const { posts, categories, mostReads } = this.props;
    return (
      <Row>
      <Col md={12} lg={10}>
        <PostList posts={posts}/>
      </Col>
      <Col md={12} lg={2}>
        <Sidebar categories={categories} mostReads={mostReads}/>
      </Col>
    </Row>
    )
  }
}

export default ContentWrapper
