class Config {
  static get BaseURL() {
    const environment = process.env['NODE_ENV'];
    if (environment === 'production') {
      return 'https://nextjs-blog-app.herokuapp.com';
    } else {
      return 'http://localhost:3000';
    }
  }

  static get GraphqlURL() {
    const environment = process.env['NODE_ENV'];
    if (environment === 'production') {
      return 'https://nextjs-blog-app-graphql.herokuapp.com';
    } else {
      return 'http://localhost:4000/graphql';
    }
  }
}

export default Config;
