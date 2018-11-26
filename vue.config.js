const path = require('path');

module.exports = {
  baseUrl: process.env.NODE_ENV === 'production' ? '/movie-square/' : '/',
  configureWebpack: {
    resolve: {
      alias: {
        '@atoms': path.join(__dirname, 'src/components/atoms/'),
        '@molecules': path.join(__dirname, 'src/components/molecules/'),
        '@organisms': path.join(__dirname, 'src/components/organisms/'),
        '@templates': path.join(__dirname, 'src/components/templates/'),
        '@pages': path.join(__dirname, 'src/components/pages/')
      }
    }
  }
};
