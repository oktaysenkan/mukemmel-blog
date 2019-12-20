import Repository from './Repository'
import QueryBuilder from '../utils/QueryBuilder';
import Page from '../model/Page';

class UserRepository extends Repository {
  getAll = (req) => {
    return new Promise((resolve, reject) => {
      const query = new QueryBuilder(req);
      let pages = Page.aggregate();

      if (query.q) {
        pages = pages.match(query.q);
      }

      if (query.sort) {
        pages = pages.sort(query.sort);
      }

      if (query.skip) {
        pages = pages.skip(query.skip);
      }

      if (query.fields) {
        pages = pages.project(query.fields);
      }

      pages
        .limit(query.count)
        .exec((error, documents) => {
          if (error) {
            console.log(error);
            reject(error.toString());
          }
          
          if (!documents.length) {
            reject('Page not found');
          }
          
          resolve(documents);
        });
    })
  }
}

export default new UserRepository();
