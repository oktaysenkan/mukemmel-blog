const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();

class Repository {
  constructor() {
    this.MONGODB_URL = process.env.MONGODB_URL;
    mongoose.connect(this.MONGODB_URL, {useNewUrlParser: true, useUnifiedTopology: true})
  }
}

export default Repository;
