import User from './User'
import Category from './Category'
import Comment from './Comment'

const mongoose = require('mongoose');
var Schema = mongoose.Schema

const postSchema = Schema({
  author : { type: Schema.Types.ObjectId, ref: 'users' },
  title: Schema.Types.String,
  details: Schema.Types.String,
  image: Schema.Types.String,
  categories: { type: Schema.Types.ObjectId, ref: 'categories' },
  views: Schema.Types.Number,
  comments: { type: Schema.Types.ObjectId, ref: 'comments' },
  creationDate: Schema.Types.Date
});


export default mongoose.models.posts || mongoose.model('posts', postSchema);
