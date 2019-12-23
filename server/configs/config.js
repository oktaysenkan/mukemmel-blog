require("dotenv").config();

class Config {
  static get BaseURL() {
    if (process.env.NODE_ENV === 'production') {
      return 'https://nextjs-blog-app.herokuapp.com';
    } else {
      return 'http://localhost:3000';
    }
  }

  static get GraphqlURL() {
    if (process.env.NODE_ENV === 'production') {
      return process.env.GRAPHQL_URL;
    } else {
      return 'http://localhost:4000/graphql';
    }
  }
}

export default Config;
