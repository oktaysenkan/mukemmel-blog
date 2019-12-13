import Repository from './Repository'
import Post from '../model/Post';
import User from '../model/User';

class PostRepository extends Repository {
  getAll = () => {
    return new Promise((resolve, reject) => {

      this.connect().catch((error) => {
        reject('Server connection error.');
      })

      Post.aggregate()
      .lookup({ from: 'users', localField: 'author', foreignField: '_id', as: 'author' })
      .addFields({
        creationAt: {
          ISODateFormat: {
            $dateToString: {
              date: '$creationAt',
              format: "%Y-%m-%d %H:%M",
              timezone: "+03:00"
            }
          },
          turkeyDateFormat: {
            $dateToString: {
              date: '$creationAt',
              format: "%d/%m/%Y %H:%M",
              timezone: "+03:00"
            }
          }
        }
      })
      .unwind('author')
      .exec((error, documents) => {
        if(error) {
          console.log(error);
          reject('Posts not found!');
        }

        resolve(documents);
      });

    });
  }
}

export default new PostRepository();
