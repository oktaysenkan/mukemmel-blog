class Config {
  static get BaseURL() {
    const environment = process.env['NODE_ENV'];
    if (environment === 'production') {
      return 'https://nextjs-blog-app.herokuapp.com';
    } else {
      return 'http://localhost:3000';
    }
  }
}

export default Config;
