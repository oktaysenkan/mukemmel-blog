const mongoose = require('mongoose');
var Schema = mongoose.Schema

const pageSchema = Schema({
  name: Schema.Types.String,
  slug: Schema.Types.String,
  content: Schema.Types.String,
});

export default mongoose.models.pages || mongoose.model('pages', pageSchema);
