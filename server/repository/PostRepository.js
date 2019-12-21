import Repository from './Repository'
import Post from '../model/Post';
import QueryBuilder from '../utils/QueryBuilder';

class PostRepository extends Repository {
  getAll = (req) => {
    return new Promise((resolve, reject) => {
      const query = new QueryBuilder(req);
      let posts = Post
        .aggregate()
        .lookup({ from: 'users', localField: 'author', foreignField: '_id', as: 'author' })
        .lookup({ from: 'categories', localField: 'categories', foreignField: '_id', as: 'categories' })
        .lookup({ from: 'comments', localField: 'comments', foreignField: '_id', as: 'comments' })
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
        });

      if (query.q) {
        posts = posts.match(query.q);
      }

      if (query.sort) {
        posts = posts.sort(query.sort);
      }

      if (query.skip) {
        posts = posts.skip(query.skip);
      }

      if (query.fields) {
        posts = posts.project(query.fields);
      }

      posts
        .limit(query.count)
        .exec((error, documents) => {
          if (error) {
            console.log(error);
            reject(error.toString());
          }

          if (!documents.length) {
            reject('Post not found');
          }
          
          resolve(documents);
      });

    });
  }
}

export default new PostRepository();
