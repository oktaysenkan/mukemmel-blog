import Config from '../configs/config';
import { request } from 'graphql-request'

class FetchAll {
  static getAll = async () => {
    const query = `{
      categories {
        name
        slug
      }
      posts(count: 5, orderBy: { field: "views", direction: "DESC" }) {
        slug
        title
      }
      pages {
        slug
        name
      }
    }`

    const queryResponse = await request(Config.GraphqlURL, query);
    const categories = queryResponse.categories;
    const mostReads = queryResponse.posts;
    const pages = queryResponse.pages;

    return { categories: categories, mostReads: mostReads, pages: pages };
  }
}

export default FetchAll;