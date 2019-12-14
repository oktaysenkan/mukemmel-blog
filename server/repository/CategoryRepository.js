import Repository from './Repository'
import Category from '../model/Category';

class CategoryRepository extends Repository {
  getAll = () => {
    return new Promise((resolve, reject) => {
      
      this.connect().catch((error) => {
        reject('Server connection error.');
      })

      Category.find({}, (error, documents) => {
        if (documents.length) {
          resolve(documents);
        }

        reject('Category not found!');
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
