import Repository from './Repository'
import Category from '../model/Category';
import QueryBuilder from '../utils/QueryBuilder';

class CategoryRepository extends Repository {
  getAll = (req) => {
    return new Promise((resolve, reject) => {
      
      this.connect().catch((error) => {
        reject('Server connection error.');
      })

      const query = new QueryBuilder(req);

      Category
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
