import React, { Component } from 'react'

import fetch from 'isomorphic-unfetch';
import Head from 'next/head';
import Config from '../../server/configs/config';
import Error from '../_error';

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
  let error, categoryPosts, categories, mostReads, pages;
  const slug = query.categorySlug;

  const pagesResponse = await fetch(`${Config.BaseURL}/api/pages?fields=name,slug`);
  const pagesJSON = await pagesResponse.json();

  const categoriesResponse = await fetch(`${Config.BaseURL}/api/categories`);
  const categoriesJSON = await categoriesResponse.json();

  const mostReadsResponse = await fetch(`${Config.BaseURL}/api/posts?sort=-views&count=5`);
  const mostReadsJSON = await mostReadsResponse.json();

  const postsResponse = await fetch(`${Config.BaseURL}/api/posts?q={"categories.slug":"${slug}"}`);
  const postsJSON = await postsResponse.json();

  categories = categoriesJSON.data.categories;
  mostReads = mostReadsJSON.data.posts;
  pages = pagesJSON.data.pages;

  if (postsJSON.error) {
    error = postsJSON.error.message;
  } else {
    categoryPosts = postsJSON.data.posts;
  }

  return { error: error, categories: categories, mostReads: mostReads, pages: pages, posts: categoryPosts };
};

export default Category;
