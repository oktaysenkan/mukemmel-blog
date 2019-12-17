import Repository from './Repository'
import QueryBuilder from '../utils/QueryBuilder';
import Page from '../model/Page';

class UserRepository extends Repository {
  getAll = (req) => {
    return new Promise((resolve, reject) => {
      
      this.connect().catch((error) => {
        reject('Server connection error.');
      })

      const query = new QueryBuilder(req);

      Page
        .find(query.q)
        .sort(query.sort)
        .limit(query.count)
        .skip(query.skip)
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
