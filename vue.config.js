module.exports = {
  //https://qiita.com/ryusukeeee/items/21f89a9479c468be3534
  publicPath: process.env.NODE_ENV === 'production'
    ? '/resume/'
    : '/',
  outputDir: 'docs',

  devServer: {
    port: 9050,
    host: '0.0.0.0',
    disableHostCheck: true,
  },
};