import React from 'react';
import fetch from 'isomorphic-unfetch';
import Head from 'next/head';
import Link from 'next/link';
import ReactMarkdown from 'react-markdown';

import { Container } from 'reactstrap';

import Config from '../server/configs/config';
import { Header, Menu, ContentWrapper, Footer, PostList, SocialMediaIcons} from '../components'

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
      <SocialMediaIcons/>
      <Header/>
      <Menu pages={pages}/>
      <ContentWrapper categories={categories} mostReads={mostReads}>
        <PostList posts={posts}/>
      </ContentWrapper>
      <Footer/>
    </Container>
  </div>
);

Home.getInitialProps = async ({ req }) => {
  const pagesResponse = await fetch(`${Config.BaseURL}/api/pages`);
  const pagesJSON = await pagesResponse.json();

  const postsResponse = await fetch(`${Config.BaseURL}/api/posts`);
  const postsJSON = await postsResponse.json();

  const categoriesResponse = await fetch(`${Config.BaseURL}/api/categories`);
  const categoriesJSON = await categoriesResponse.json();

  const mostReadsResponse = await fetch(`${Config.BaseURL}/api/posts?sort=-views&count=5`);
  const mostReadsJSON = await mostReadsResponse.json();

  return { posts: postsJSON.data.posts, categories: categoriesJSON.data.categories, mostReads: mostReadsJSON.data.posts, pages: pagesJSON.data.pages };
};

export default Home;
