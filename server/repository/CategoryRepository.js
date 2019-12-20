import Repository from './Repository'
import Category from '../model/Category';
import QueryBuilder from '../utils/QueryBuilder';

class CategoryRepository extends Repository {
  getAll = (req) => {
    return new Promise((resolve, reject) => {
      const query = new QueryBuilder(req);
      let categories = Category.aggregate();

      if (query.q) {
        categories = categories.match(query.q);
      }

      if (query.sort) {
        categories = categories.sort(query.sort);
      }

      if (query.skip) {
        categories = categories.skip(query.skip);
      }

      if (query.fields) {
        categories = categories.project(query.fields);
      }

      categories
        .limit(query.count)
        .exec((error, documents) => {
          if (error) {
            console.log(error);
            reject(error.toString());
          }

          if (!documents.length) {
            reject('Categories not found');
          }
          
          resolve(documents);
        });
    })
  }

  save = (category) => {
    return new Promise((resolve, reject) => {
      
      this.connect().catch((error) => {
        reject('Server connection error.');
      })

      let newCategory = new Category(category);
      newCategory.save().then(res => {
        resolve(res);
      }).catch(error => {
        reject(error);
      })
    })
  }
}

export default new CategoryRepository();
