const dotenv = require('dotenv');
dotenv.config();

class Repository {
  constructor() {
    this.MONGODB_URL = process.env.MONGODB_URL;
  }
}

export default Repository;
