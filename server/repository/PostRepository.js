import Repository from './Repository'
import Post from '../model/Post';

class PostRepository extends Repository {
  getAll = () => {
    return new Promise((resolve, reject) => {

      this.connect().catch((error) => {
        reject('Server connection error.');
      })

      Post.aggregate()
        .lookup({ from: 'users', localField: 'author', foreignField: '_id', as: 'author' })
        .lookup({ from: 'categories', localField: 'categories', foreignField: '_id', as: 'categories' })
        .unwind('author')
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
        .exec((error, documents) => {
          if (error) {
            console.log(error);
            reject('Posts not found!');
          }

          resolve(documents);
        });

    });
  }
}

export default new PostRepository();
