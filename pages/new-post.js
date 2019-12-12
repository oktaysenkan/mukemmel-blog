import React from 'react';
import fetch from 'isomorphic-unfetch';
import Head from 'next/head';
import dynamic from 'next/dynamic'
import { Container } from 'reactstrap';

const CKEditor = dynamic(() => import('../components/Editor'), {
  ssr: false
});

const Home = () => (
  <div>
    <Head>
      <title>New Post</title>
      <link rel="icon" href="/favicon.ico" />
      <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-alpha.6/css/bootstrap.min.css" />
      <link href="https://fonts.googleapis.com/css?family=News+Cycle:400,700&display=swap" rel="stylesheet"></link>
      <link href="https://fonts.googleapis.com/css?family=Playfair+Display&display=swap" rel="stylesheet"></link>

      <link href="https://cdn.quilljs.com/1.0.0/quill.snow.css" rel="stylesheet"></link>
    </Head>

    <Container>
    <CKEditor/>
    </Container>
  </div>
);

export default Home;
