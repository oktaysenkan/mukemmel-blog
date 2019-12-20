import React, { Component } from 'react'

import fetch from 'isomorphic-unfetch';
import Head from 'next/head';
import Config from '../../server/configs/config';
import Error from '../_error';
import FetchAll from '../../server/utils/FetchAll'

import { Container } from 'reactstrap';
import { Header, Footer, ContentWrapper, PostList } from '../../components';

class Category extends Component {
  render() {
    const { error, posts, categories, mostReads, pages } = this.props;
    
    if (error) {
      return (
        <Error error={error} pages={pages} mostReads={mostReads} categories={categories}/>
      )
    }

    return (
      <div>
        <Head>
          <title></title>
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
            <PostList posts={posts}/>
          </ContentWrapper>
          <Footer/>
        </Container>
      </div>
    )
  }
}

Category.getInitialProps = async ({ req, res, query }) => {
  const { categories, mostReads, pages } = await FetchAll.getAll();
  const slug = query.categorySlug;
  let error, categoryPosts;

  const postsResponse = await fetch(`${Config.BaseURL}/api/posts?q={"categories.slug":"${slug}"}`);
  const postsJSON = await postsResponse.json();

  if (postsJSON.error) {
    error = postsJSON.error.message;
  } else {
    categoryPosts = postsJSON.data.posts;
  }

  return { error: error, categories: categories, mostReads: mostReads, pages: pages, posts: categoryPosts };
};

export default Category;
