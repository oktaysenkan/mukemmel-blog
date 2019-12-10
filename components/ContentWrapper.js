import React from 'react'
import { Row, Col } from 'reactstrap';
import Sidebar from './Sidebar';
import PostList from './PostList';

const ContentWrapper = () => (
  <Row>
    <Col md={10}>
      <PostList/>
    </Col>
    <Col md={2}>
      <Sidebar/>
    </Col>
  </Row>
)

export default ContentWrapper
