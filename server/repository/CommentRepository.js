import Repository from './Repository'
import QueryBuilder from '../utils/QueryBuilder';
import Comment from '../model/Comment';

class CommentRepository extends Repository {
  getAll = (req) => {
    return new Promise((resolve, reject) => {
      const query = new QueryBuilder(req);
      let comments = Comment.aggregate();

      if (query.q) {
        comments = comments.match(query.q);
      }

      if (query.sort) {
        comments = comments.sort(query.sort);
      }

      if (query.skip) {
        comments = comments.skip(query.skip);
      }

      if (query.fields) {
        comments = comments.project(query.fields);
      }

      comments
        .limit(query.count)
        .exec((error, documents) => {
          if (error) {
            console.log(error);
            reject(error.toString());
          }
          
          if (!documents.length) {
            reject('Comment not found');
          }
          
          resolve(documents);
        });
    })
  }
}

export default new CommentRepository();
