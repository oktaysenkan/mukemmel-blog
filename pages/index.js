import React from 'react';
import Head from 'next/head';
import { request } from 'graphql-request'

import { Container } from 'reactstrap';
import Config from '../server/configs/config';
import { Header, Menu, ContentWrapper, Footer, PostList, SocialMediaIcons} from '../components'
import FetchAll from '../server/utils/FetchAll';

const Home = ({ posts, categories, mostReads, pages }) => (
  <div>
    <Head>
      <title>Home</title>
      <link rel="icon" href="/favicon.ico" />
      <link rel="stylesheet" href="/css/default.css" />
      <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-alpha.6/css/bootstrap.min.css" />
      <link href="https://fonts.googleapis.com/css?family=News+Cycle:400,700&display=swap" rel="stylesheet"></link>
      <link href="https://fonts.googleapis.com/css?family=Playfair+Display&display=swap" rel="stylesheet"></link>
    </Head>

    <Container>
      <Header pages={pages}/>
      <ContentWrapper categories={categories} mostReads={mostReads}>
        <PostList posts={posts}/>
      </ContentWrapper>
      <Footer/>
    </Container>
  </div>
);

Home.getInitialProps = async ({ req }) => {
  const { categories, mostReads, pages } = await FetchAll.getAll();
  const postsQuery = `{
    posts {
      slug
      author {
        fullName
      }
      title
      details
      image
      views
      comments {
        _id
      }
      categories {
        name
      }
      creationAt
    }
  }`;
  const postsResponse = await request(Config.GraphqlURL, postsQuery);
  const posts = postsResponse.posts;
  return { posts: posts, categories: categories, mostReads: mostReads, pages: pages };
};

export default Home;
