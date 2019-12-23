import Config from '../configs/config';
import { request } from 'graphql-request'

class FetchAll {
  static getAll = async () => {
    const categoriesQuery = `{
      categories {
        name
        slug
      }
    }`;
    const mostReadsQuery = `{
      posts(count: 5, orderBy: { field: "views", direction: "DESC" }) {
        slug
        title
      }
    }`;
    const pagesQuery = `{
      pages {
        slug
        name
      }
    }`;

    const categoriesResponse = await request(Config.GraphqlURL, categoriesQuery);
    const mostReadsResponse = await request(Config.GraphqlURL, mostReadsQuery);
    const pagesResponse = await request(Config.GraphqlURL, pagesQuery);

    const categories = categoriesResponse.categories;
    const mostReads = mostReadsResponse.posts;
    const pages = pagesResponse.pages;

    return { categories: categories, mostReads: mostReads, pages: pages };
  }
}

export default FetchAll;