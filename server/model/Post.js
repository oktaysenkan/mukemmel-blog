const mongoose = require('mongoose');
var Schema = mongoose.Schema

const postSchema = Schema({
  author_id:  Schema.Types.ObjectId,
  title: String,
  details: String,
  image: String,
  creationDate: Schema.Types.Date
});

export default mongoose.models.posts || mongoose.model('posts', postSchema);
