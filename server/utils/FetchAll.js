import fetch from 'isomorphic-unfetch';
import Config from '../configs/config';

class FetchAll {
  static getAll = async () => {
    const categoriesResponse = await fetch(`${Config.BaseURL}/api/categories`);
    const mostReadsResponse = await fetch(`${Config.BaseURL}/api/posts?sort=-views&count=5&fields=title,slug`);
    const pagesResponse = await fetch(`${Config.BaseURL}/api/pages?fields=name,slug`);

    const categoriesJSON = await categoriesResponse.json();
    const mostReadsJSON = await mostReadsResponse.json();
    const pagesJSON = await pagesResponse.json();

    const categories = categoriesJSON.data.categories;
    const mostReads = mostReadsJSON.data.posts;
    const pages = pagesJSON.data.pages;

    return { categories: categories, mostReads: mostReads, pages: pages };
  }
}

export default FetchAll;