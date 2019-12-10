import React from 'react'
import { Row, Col } from 'reactstrap';
import Post from './Post';

const posts = [
  { 
    title: 'Lorem ipsum dolor sit amet',
    details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec suscipit urna sed leo malesuada egestas. Nulla eu dolor vitae sapien pulvinar pulvinar. Donec viverra non enim id blandit.',
    image: 'http://via.placeholder.com/800',
    categories: ['Frontend', 'Yazılım', 'Code'],
    creationDate: '2019/01/01',
    comments: 22,
    views: 245,
  },
  { 
    title: 'Lorem ipsum dolor sit amet',
    details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec suscipit urna sed leo malesuada egestas. Nulla eu dolor vitae sapien pulvinar pulvinar. Donec viverra non enim id blandit. Praesent vulputate ligula quis lorem interdum, in interdum mi semper. Fusce auctor lacinia magna, nec sodales leo dictum vitae. Nulla facilisi. Vivamus nulla mi, facilisis in posuere ac, lobortis sit amet nulla.',
    image: 'http://via.placeholder.com/200',
    categories: ['Frontend', 'Yazılım', 'Code'],
    creationDate: '2019/01/01',
    comments: 22,
    views: 245,
  },
  { 
    title: 'Suspendisse vitae interdum magna',
    details: 'Etiam interdum mauris vel nulla laoreet laoreet. In venenatis euismod lorem, ac lobortis velit elementum sed. In facilisis pellentesque tincidunt. Nam a nulla sed ante vestibulum placerat at ac enim. Vestibulum nunc magna, lobortis in enim id, porta semper dui. Duis id sem ac arcu fringilla vestibulum sed blandit odio.',
    image: 'http://via.placeholder.com/500',
    categories: ['Frontend', 'Yazılım', 'Code'],
    creationDate: '2019/01/01',
    comments: 22,
    views: 245,
  },
  { 
    title: 'Lorem ipsum dolor sit amet',
    details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec suscipit urna sed leo malesuada egestas. Nulla eu dolor vitae sapien pulvinar pulvinar. Donec viverra non enim id blandit.',
    image: 'http://via.placeholder.com/1400',
    categories: ['Frontend', 'Yazılım', 'Code'],
    creationDate: '2019/01/01',
    comments: 22,
    views: 245,
  },
];

const Content = () => (
  <Row>
      {posts.map((post) => (
        <Col md={6}>
          <Post data={post}/>
        </Col>
      ))}

    <style jsx>{`
      nav {
        display: flex;
        justify-content: center;
      }

      ul {
        display: flex;
      }

      li {
        display: flex;
        padding: 35px 35px
      }

      a {
        text-decoration: none;
        font-family: 'News Cycle', sans-serif;
        font-weight: bold;
        text-transform: uppercase;
        font-size: 14px;
        color: #000;
      }
    `}</style>
  </Row>
)

export default Content
