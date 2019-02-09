const path = require('path');

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
    }
  },
  chainWebpack: config => {
    const types = ['vue-modules', 'vue', 'normal-modules', 'normal']
    types.forEach(type => addStyleResource(config.module.rule('scss').oneOf(type)))
  }
};

function addStyleResource (rule) {
  rule.use('style-resource')
    .loader('style-resources-loader')
    .options({
      patterns: [
        path.resolve(__dirname, './src/styles/imports.scss'),
      ],
    })
}
