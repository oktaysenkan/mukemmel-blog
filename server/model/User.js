const mongoose = require('mongoose');
var Schema = mongoose.Schema

const userSchema = Schema({
  fullName:  String,
});

export default mongoose.models.users || mongoose.model('users', userSchema);
