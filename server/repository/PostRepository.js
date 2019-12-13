import Repository from './Repository'
import Post from '../model/Post';

class PostRepository extends Repository {
  getAll = () => {
    return new Promise((resolve, reject) => {
      
      this.connect().catch((error) => {
        reject('Server connection error.');
      })

      Post.aggregate().lookup({ from: 'users', localField: 'author_id', foreignField: '_id', as: 'author' }).exec(
        (error, documents) => {
          if (documents.length) {
            resolve(documents);
          }
  
          reject('Posts not found!');
        }
      )
    })
  }
}

export default new PostRepository();
