import Repository from './Repository'
import User from '../model/User';
import QueryBuilder from '../utils/QueryBuilder';

class UserRepository extends Repository {
  getAll = (req) => {
    return new Promise((resolve, reject) => {

      const query = new QueryBuilder(req);

      User
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
