const path = require('path');
const PrerenderSPAPlugin = require('prerender-spa-plugin');

module.exports = {
  publicPath: process.env.NODE_ENV === 'production' ? '/movie-square/' : '/',
  configureWebpack: {
    devtool: 'source-map',
    resolve: {
      alias: {
        '@atoms': path.join(__dirname, 'src/components/atoms/'),
        '@molecules': path.join(__dirname, 'src/components/molecules/'),
        '@organisms': path.join(__dirname, 'src/components/organisms/'),
        '@templates': path.join(__dirname, 'src/components/templates/'),
        '@pages': path.join(__dirname, 'src/components/pages/')
      }
    },
    plugins: [
      new PrerenderSPAPlugin({
        staticDir: path.join(__dirname, 'dist'),
        routes: ['/']
      })
    ]
  }
};
