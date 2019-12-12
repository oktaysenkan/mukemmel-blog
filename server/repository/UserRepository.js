import Repository from './Repository'
import User from '../model/User';
const mongoose = require('mongoose');

class UserRepository extends Repository {

 save = async (user) => {
    return new Promise((resolve, reject) => {
      mongoose.connect(this.MONGODB_URL, {useNewUrlParser: true, useUnifiedTopology: true})
      .catch(error => {
        reject(error);
      });
  
      let newUser = new User(user);
      newUser.save().then(res => {
        resolve(res)
      }).catch(error => {
        console.log(error);
        reject(error);
      }).finally(() => {
        mongoose.disconnect();
      });
    })
  }
}

export default new UserRepository();
