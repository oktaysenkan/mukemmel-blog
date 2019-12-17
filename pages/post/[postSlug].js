import React from 'react';
import fetch from 'isomorphic-unfetch';
import Head from 'next/head';
import Link from 'next/link';
import ReactMarkdown from 'react-markdown';

import { Container, Row, Col } from 'reactstrap';
import { SocialMediaIcons, Header, Menu, Footer, Sidebar } from '../../components';
import Config from '../../server/configs/config';

const Post = ({ post, categories, mostReads, pages }) => (
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
      <Row>
        <Col md={12} lg={10}>
          <h1>{post.title}</h1>
          <ReactMarkdown source={post.details} />
        </Col>
        <Col md={12} lg={2}>
          <Sidebar categories={categories} mostReads={mostReads}/>
        </Col>
      </Row>
      <Footer/>
    </Container>
  </div>
);

Post.getInitialProps = async ({ req, query }) => {
  const slug = query.postSlug;

  const pagesResponse = await fetch(`${Config.BaseURL}/api/pages`);
  const pagesJSON = await pagesResponse.json();

  const categoriesResponse = await fetch(`${Config.BaseURL}/api/categories`);
  const categoriesJSON = await categoriesResponse.json();

  const mostReadsResponse = await fetch(`${Config.BaseURL}/api/posts?sort=-views&count=5`);
  const mostReadsJSON = await mostReadsResponse.json();

  const postResponse = await fetch(`${Config.BaseURL}/api/posts?q={"slug":"${slug}"}`);
  const postJSON = await postResponse.json();

  return { categories: categoriesJSON.data.categories, mostReads: mostReadsJSON.data.posts, pages: pagesJSON.data.pages, post: postJSON.data.posts[0] };
};

export default Post;