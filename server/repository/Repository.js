const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();

const MONGODB_URL = process.env.MONGODB_URL;

class Repository {
  connect = () => {
    return mongoose.connect(MONGODB_URL, { useNewUrlParser: true });;
  }
}


export default Repository;
