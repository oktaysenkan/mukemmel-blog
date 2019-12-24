import React, { Component } from 'react'

import fetch from 'isomorphic-unfetch';
import Head from 'next/head';

import { Container } from 'reactstrap';
import { Header, Footer, ContentWrapper } from '../components';
import Config from '../server/configs/config';


class Error extends Component {
  render() {
    const { error, categories, mostReads, pages } = this.props;

    return (
      <div>
        <Head>
          <title>Aradığınız sayfa bulunamadı</title>
          <link rel="icon" href="/favicon.ico" />
          <link rel="stylesheet" href="/css/default.css" />
          <link rel="stylesheet" href="/css/github.css" />
          <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-alpha.6/css/bootstrap.min.css" />
          <link href="https://fonts.googleapis.com/css?family=News+Cycle:400,700&display=swap" rel="stylesheet"></link>
          <link href="https://fonts.googleapis.com/css?family=Playfair+Display&display=swap" rel="stylesheet"></link>
          <link href="https://fonts.googleapis.com/css?family=Source+Code+Pro&display=swap" rel="stylesheet"></link>
        </Head>

        <Container>
          <Header pages={pages}/>
          <ContentWrapper categories={categories} mostReads={mostReads}>
            <h2>{error}</h2>
          </ContentWrapper>
          <Footer/>
        </Container>
      </div>
    )
  }
}

export default Error;