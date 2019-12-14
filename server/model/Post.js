const mongoose = require('mongoose');
var Schema = mongoose.Schema

const postSchema = Schema({
  author : { type: Schema.Types.ObjectId, ref: 'users' },
  title: Schema.Types.String,
  details: Schema.Types.String,
  image: Schema.Types.String,
  views: Schema.Types.Number,
  comments: Schema.Types.Number,
  creationDate: Schema.Types.Date
});

export default mongoose.models.posts || mongoose.model('posts', postSchema);
