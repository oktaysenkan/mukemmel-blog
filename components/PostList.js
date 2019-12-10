import React from 'react'
import { Row, Col } from 'reactstrap';
import Post from './Post';

const posts = [
  { 
    title: 'Lorem ipsum dolor sit amet',
    details: 'Bacon ipsum dolor amet culpa fatback picanha drumstick andouille pork loin esse pig boudin incididunt cupidatat deserunt. Ball tip swine ut enim brisket andouille. Mollit enim chuck picanha short ribs prosciutto deserunt. Rump officia ipsum chislic doner sint meatball meatloaf deserunt tenderloin veniam ut anim enim. Irure ad ullamco nostrud exercitation. Pork belly cupidatat cow picanha aute dolore short ribs deserunt brisket cillum. Bresaola pariatur ad, pig minim chislic ball tip bacon occaecat.',
    image: 'https://instagram.fist7-1.fna.fbcdn.net/v/t51.2885-15/e35/31489147_2065724600370043_5256292117713518592_n.jpg?_nc_ht=instagram.fist7-1.fna.fbcdn.net&_nc_cat=107&oh=f13c1918f06fe6ccf43efb82df1085eb&oe=5E689F89',
    authorName: 'Oktay Şenkan',
    categories: ['Frontend', 'Yazılım', 'Code'],
    creationDate: '2019/01/01',
    comments: 22,
    views: 245,
  },
  { 
    title: 'Lorem ipsum dolor sit amet',
    details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec suscipit urna sed leo malesuada egestas. Nulla eu dolor vitae sapien pulvinar pulvinar. Donec viverra non enim id blandit. Praesent vulputate ligula quis lorem interdum, in interdum mi semper. Fusce auctor lacinia magna, nec sodales leo dictum vitae. Nulla facilisi. Vivamus nulla mi, facilisis in posuere ac, lobortis sit amet nulla.',
    image: 'https://instagram.fist7-2.fna.fbcdn.net/v/t51.2885-15/e35/54511890_2168531889861336_8841621105765294712_n.jpg?_nc_ht=instagram.fist7-2.fna.fbcdn.net&_nc_cat=100&oh=6f0d58cbdbb1989407ba7f7dc34496ca&oe=5E734FB0',
    authorName: 'Oktay Şenkan',
    categories: ['Frontend', 'Yazılım', 'Code'],
    creationDate: '2019/01/01',
    comments: 22,
    views: 245,
  },
  { 
    title: 'Suspendisse vitae interdum magna',
    details: 'Etiam interdum mauris vel nulla laoreet laoreet. In venenatis euismod lorem, ac lobortis velit elementum sed. In facilisis pellentesque tincidunt. Nam a nulla sed ante vestibulum placerat at ac enim. Vestibulum nunc magna, lobortis in enim id, porta semper dui. Duis id sem ac arcu fringilla vestibulum sed blandit odio.',
    image: 'https://instagram.fist7-1.fna.fbcdn.net/v/t51.2885-15/sh0.08/e35/p750x750/52810528_133614437688970_3548754012378603324_n.jpg?_nc_ht=instagram.fist7-1.fna.fbcdn.net&_nc_cat=110&oh=9a2fb3123ace7780393ec0e321ce04a0&oe=5E73F495',
    authorName: 'Oktay Şenkan',
    categories: ['Frontend', 'Yazılım', 'Code'],
    creationDate: '2019/01/01',
    comments: 22,
    views: 245,
  },
  { 
    title: 'Lorem ipsum dolor sit amet',
    details: 'Buffalo ut chicken, bacon dolore porchetta consequat cow in flank ut excepteur. Ribeye labore chislic biltong ground round pork chop. Aute deserunt ut ullamco pastrami turkey sint capicola. Culpa dolor prosciutto ball tip sed dolore. Tail fatback commodo kevin landjaeger pork buffalo bacon pig beef alcatra dolore.',
    image: 'https://instagram.fist7-2.fna.fbcdn.net/v/t51.2885-15/e35/p1080x1080/75616331_544242026426413_2936778882623511707_n.jpg?_nc_ht=instagram.fist7-2.fna.fbcdn.net&_nc_cat=101&oh=ca7872b03a16d02051397718b5739839&oe=5E832876',
    authorName: 'Oktay Şenkan',
    categories: ['Frontend', 'Yazılım', 'Code'],
    creationDate: '2019/01/01',
    comments: 22,
    views: 245,
  },
  { 
    title: 'Suspendisse vitae interdum magna',
    details: 'Etiam interdum mauris vel nulla laoreet laoreet. In venenatis euismod lorem, ac lobortis velit elementum sed. In facilisis pellentesque tincidunt. Nam a nulla sed ante vestibulum placerat at ac enim. Vestibulum nunc magna, lobortis in enim id, porta semper dui. Duis id sem ac arcu fringilla vestibulum sed blandit odio.',
    image: 'https://instagram.fist7-2.fna.fbcdn.net/v/t51.2885-15/e35/s1080x1080/75602210_2619090308157073_8377093522155066195_n.jpg?_nc_ht=instagram.fist7-2.fna.fbcdn.net&_nc_cat=101&oh=b50a03c2a63974e1b7a529e6716f2cca&oe=5E895730',
    authorName: 'Oktay Şenkan',
    categories: ['Frontend', 'Yazılım', 'Code'],
    creationDate: '2019/01/01',
    comments: 22,
    views: 245,
  },
  { 
    title: 'Lorem ipsum dolor sit amet',
    details: 'Buffalo ut chicken, bacon dolore porchetta consequat cow in flank ut excepteur. Ribeye labore chislic biltong ground round pork chop. Aute deserunt ut ullamco pastrami turkey sint capicola. Culpa dolor prosciutto ball tip sed dolore. Tail fatback commodo kevin landjaeger pork buffalo bacon pig beef alcatra dolore.',
    image: 'https://instagram.fist7-2.fna.fbcdn.net/v/t51.2885-15/e35/s1080x1080/76964487_479425122704873_6326675877431541459_n.jpg?_nc_ht=instagram.fist7-2.fna.fbcdn.net&_nc_cat=105&oh=00b68d3c1822de0ad948ae215e45185d&oe=5E740033',
    authorName: 'Oktay Şenkan',
    categories: ['Frontend', 'Yazılım', 'Code'],
    creationDate: '2019/01/01',
    comments: 22,
    views: 245,
  },
];

const PostList = () => (
  <Row>
      {posts.map((post, i) => {
        return <Col md={6}>
            <Post data={post}/>
          </Col>
      })}

    <style jsx>{`
    `}</style>
  </Row>
)

export default PostList
