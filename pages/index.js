import React from 'react';
import fetch from 'isomorphic-unfetch';
import Head from 'next/head';
import Link from 'next/link';
import ReactMarkdown from 'react-markdown';

import { Container } from 'reactstrap';

import SocialMediaIcons from '../components/SocialMediaIcons'
import Header from '../components/Header';
import Menu from '../components/Menu';
import ContentWrapper from '../components/ContentWrapper';
import Footer from '../components/Footer';

const Home = ({ posts }) => (
  <div>
    <Head>
      <title>Home</title>
      <link rel="icon" href="/favicon.ico" />
      <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-alpha.6/css/bootstrap.min.css" />
      <link href="https://fonts.googleapis.com/css?family=News+Cycle:400,700&display=swap" rel="stylesheet"></link>
      <link href="https://fonts.googleapis.com/css?family=Playfair+Display&display=swap" rel="stylesheet"></link>
    </Head>

    <Container>
      <SocialMediaIcons/>
      <Header/>
      <Menu/>
      <ContentWrapper/>
      <Footer/>
    </Container>
  </div>
);

Home.getInitialProps = async ({ req }) => {
  const environment = process.env['NODE_ENV'];
  let BASE_URL;
  if (environment === 'production') {
    BASE_URL = "https://nextjs-blog-app.herokuapp.com"
  } else {
    BASE_URL = "http://localhost:3000";
  }

  const res = await fetch(`${BASE_URL}/api/posts`);
  const json = await res.json();
  return { posts: json.posts };
};

export default Home;
