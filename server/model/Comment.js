const mongoose = require('mongoose');
var Schema = mongoose.Schema

const commentSchema = Schema({
  post : { type: Schema.Types.ObjectId, ref: 'posts' },
  name:  Schema.Types.String,
  email:  Schema.Types.String,
  content:  Schema.Types.String,
  website:  Schema.Types.String,
});

export default mongoose.models.comments || mongoose.model('comments', commentSchema);
