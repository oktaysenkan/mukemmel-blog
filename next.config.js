module.exports = {
  webpack: config => {
    hmr: false,
    config.module.rules.push({
      test: /\.md$/,
      use: "raw-loader"
    });
    

    return config;
  }
};
