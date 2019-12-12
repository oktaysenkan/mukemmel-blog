import Repository from './Repository'
import User from '../model/User';
const mongoose = require('mongoose');

class UserRepository extends Repository {

 save = async (user) => {
    return new Promise((resolve, reject) => {
      let newUser = new User(user);
      newUser.save().then(res => {
        resolve(res)
      }).catch(error => {
        console.log(error);
        reject(error);
      })
    })
  }
}

export default new UserRepository();
