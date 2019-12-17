const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();

const MONGODB_URL = process.env.MONGODB_URL;

class Repository {
  constructor(){
    const connection = mongoose.connection.readyState;
    if (connection !== 1) {
      mongoose.connect(MONGODB_URL, { useNewUrlParser: true, useUnifiedTopology: true })
    }
  }
}

export default Repository;
