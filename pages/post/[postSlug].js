import React, { Component } from 'react'
import { request } from 'graphql-request'
import Head from 'next/head';
import Config from '../../server/configs/config';
import Error from '../_error';

import ReactMarkdown from 'react-markdown';
import { Container } from 'reactstrap';
import { Header, Footer, ContentWrapper } from '../../components';
import FetchAll from '../../server/utils/FetchAll';

class BlogPost extends Component {
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
    const { error, post, categories, mostReads, pages } = this.props;
    
    if (error) {
      return (
        <Error error={error} pages={pages} mostReads={mostReads} categories={categories} />
      )
    }

    return (
      <div>
        <Head>
          <title>{post.title}</title>
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
            <ReactMarkdown className='markdown-body' source={this.decodeMarkup(post.details)} />
          </ContentWrapper>
          <Footer/>
        </Container>
      </div>
    )
  }
}


BlogPost.getInitialProps = async ({ req, res, query }) => {
  const { categories, mostReads, pages } = await FetchAll.getAll();
  const slug = query.postSlug;
  const postsQuery = `{
    postBySlug(slug: "${slug}") {
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
        name
        email
        content
        website
        website
      }
      categories {
        name
        slug
      }
      creationAt
    }
  }`;

  let error, post;
  try {
    const postResponse = await request(Config.GraphqlURL, postsQuery);
    post = postResponse.postBySlug;
  } catch (err) {
    error = err.response.errors[0].message;
  }

  return { error: error, categories: categories, mostReads: mostReads, pages: pages, post: post };
};

export default BlogPost;
