require("dotenv").config();

class Config {
  static get BaseURL() {
    if (process.env.NODE_ENV === 'development') {
      return 'http://localhost:3000';
    } else {
      return 'https://nextjs-blog-app.herokuapp.com';
    }
  }

  static get GraphqlURL() {
    if (process.env.NODE_ENV === 'development') {
      return 'http://localhost:4000/graphql';
    } else {
      return 'https://nextjs-blog-app-graphql.herokuapp.com/gg2v7q0qmdmiwja';
    }
  }
}

export default Config;
