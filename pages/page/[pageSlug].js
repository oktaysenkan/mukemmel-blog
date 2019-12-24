import React, { Component } from 'react'
import { request } from 'graphql-request'
import Head from 'next/head';
import Config from '../../server/configs/config';
import Error from '../_error';

import ReactMarkdown from 'react-markdown';
import { Container } from 'reactstrap';
import { Header, Footer, ContentWrapper } from '../../components';
import FetchAll from '../../server/utils/FetchAll';
import PostTitle from '../../components/PostTitle';

class Page extends Component {
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
        <Error error={error} pages={pages} mostReads={mostReads} categories={categories} />
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
          <link href="https://fonts.googleapis.com/css?family=Source+Code+Pro&display=swap" rel="stylesheet"></link>
        </Head>

        <Container>
          <Header pages={pages}/>
          <ContentWrapper categories={categories} mostReads={mostReads}>
            <PostTitle title={page.name}/>
            <ReactMarkdown className='markdown-body' escapeHtml={false} source={this.decodeMarkup(page.content)} />
          </ContentWrapper>
          <Footer/>
        </Container>
      </div>
    )
  }
}


Page.getInitialProps = async ({ req, res, query }) => {
  const { categories, mostReads, pages } = await FetchAll.getAll();
  const slug = query.pageSlug;
  const pageQuery = `{
    pageBySlug(slug: "${slug}") {
      slug
      name
      content
    }
  }`;

  let error, page;
  try {
    const pageResponse = await request(Config.GraphqlURL, pageQuery);
    page = pageResponse.pageBySlug;
  } catch (err) {
    error = err.response.errors[0].message;
  }

  return { error: error, categories: categories, mostReads: mostReads, pages: pages, page: page };
};

export default Page;
