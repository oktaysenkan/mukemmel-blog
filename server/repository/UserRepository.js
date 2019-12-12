import Repository from './Repository'
import User from '../model/User';

class UserRepository extends Repository {
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

  getAll = () => {
    return new Promise((resolve, reject) => {
      
      this.connect().catch((error) => {
        reject('Server connection error.');
      })

      User.find({}, (error, documents) => {
        if (documents.length) {
          resolve(documents);
        }

        reject('Users not found!');
      });
    })
  }
}

export default new UserRepository();
