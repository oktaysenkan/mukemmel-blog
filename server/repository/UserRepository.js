import Repository from './Repository'
import User from '../model/User';
import QueryBuilder from '../utils/QueryBuilder';

class UserRepository extends Repository {
  getAll = (req) => {
    return new Promise((resolve, reject) => {
      const query = new QueryBuilder(req);
      let users = User.aggregate();

      if (query.q) {
        users = users.match(query.q);
      }

      if (query.sort) {
        users = users.sort(query.sort);
      }

      if (query.skip) {
        users = users.skip(query.skip);
      }

      if (query.fields) {
        users = users.project(query.fields);
      }
      
      users
        .limit(query.count)
        .exec((error, documents) => {
          if (error) {
            console.log(error);
            reject(error.toString());
          }
          
          if (!documents.length) {
            reject('User not found');
          }
          
          resolve(documents);
        });
    })
  }

  save = (user) => {
    return new Promise((resolve, reject) => {
      
      this.connect().catch((error) => {
        reject('Server connection error.');
      })

      let newUser = new User(user);
      newUser.save().then(res => {
        resolve(res);
      }).catch(error => {
        reject(error);
      })
    })
  }
}

export default new UserRepository();
