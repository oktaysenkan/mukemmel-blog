import React, { Component } from 'react'

import fetch from 'isomorphic-unfetch';
import Head from 'next/head';
import Link from 'next/link';
import Error from 'next/error'
import ReactMarkdown from 'react-markdown';

import { Container } from 'reactstrap';
import { SocialMediaIcons, Header, Menu, Footer, ContentWrapper } from '../../components';
import Config from '../../server/configs/config';


export class Page extends Component {
  decodeMarkup(input) {
    return input
      .replace(/\\r/g, "\r")
      .replace(/\\n/g, "\n")
      .replace(/\\'/g, "'")
      .replace(/\\\"/g, '"')
      .replace(/\\&/g, "&")
      .replace(/\\\\/g, "\\")
      .replace(/\\t/g, "\t")
      .replace(/\\b/g, "\b")
      .replace(/\\f/g, "\f")
      .replace(/\\x2F/g, "/")
      .replace(/\\x3C/g, "<")
      .replace(/\\x3E/g, ">")
  }

  render() {
    const { error, page, categories, mostReads, pages } = this.props;
    
    if (error) {
      return (
        <Error statusCode={404} />
      )
    }

    return (
      <div>
        <Head>
          <title>{page.name}</title>
          <link rel="icon" href="/favicon.ico" />
          <link rel="stylesheet" href="/css/default.css" />
          <link rel="stylesheet" href="/css/github.css" />
          <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-alpha.6/css/bootstrap.min.css" />
          <link href="https://fonts.googleapis.com/css?family=News+Cycle:400,700&display=swap" rel="stylesheet"></link>
          <link href="https://fonts.googleapis.com/css?family=Playfair+Display&display=swap" rel="stylesheet"></link>
        </Head>

        <Container>
          <Header pages={pages}/>
          <ContentWrapper categories={categories} mostReads={mostReads}>
            <ReactMarkdown className='markdown-body' source={this.decodeMarkup(page.content)} />
          </ContentWrapper>
          <Footer/>
        </Container>
      </div>
    )
  }
}


Page.getInitialProps = async ({ req, res, query }) => {
  const slug = query.pageSlug;

  const pagesResponse = await fetch(`${Config.BaseURL}/api/pages`);
  const pagesJSON = await pagesResponse.json();

  const categoriesResponse = await fetch(`${Config.BaseURL}/api/categories`);
  const categoriesJSON = await categoriesResponse.json();

  const mostReadsResponse = await fetch(`${Config.BaseURL}/api/posts?sort=-views&count=5`);
  const mostReadsJSON = await mostReadsResponse.json();

  try {
    const pageResponse = await fetch(`${Config.BaseURL}/api/pages?q={"slug":"${slug}"}`);
    const pageJSON = await pageResponse.json();
    console.log(pageJSON);
    
    return { categories: categoriesJSON.data.categories, mostReads: mostReadsJSON.data.posts, pages: pagesJSON.data.pages, page: pageJSON.data.pages[0] };
  } catch (error) {
    console.log(error.toString());
    return { error: error };
  }
};

export default Page;
