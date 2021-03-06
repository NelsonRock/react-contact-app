require("babel-polyfill");

module.exports = {
  devtool: 'eval-source-map',
  entry: __dirname + '/app/ContactAppContainer.js',
  output: {
    path: __dirname + '/public',
    filename: 'bundle.js'
  },
  devServer: {
    contentBase: "./public",
    inline: true,
    port: 3000,
    historyApiFallback: true,
    colors: true
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query:{
          presets: ['es2015', 'react']
        }
      }
    ]
  }
};
