const mongoose = require('mongoose');
var Schema = mongoose.Schema

const categorySchema = Schema({
  name:  Schema.Types.String,
  slug: Schema.Types.String,
});

export default mongoose.models.categories || mongoose.model('categories', categorySchema);
