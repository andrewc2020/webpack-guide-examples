const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');










module.exports = {
  mode: 'development',
  entry: './src/index.js',
  
  entry: {
    app: './src/index.js',
   
  },
  devtool: 'inline-source-map',
  devServer: {
    contentBase: './dist'
  },


  
  plugins: [
    
    new CleanWebpackPlugin({ cleanStaleWebpackAssets: false }),
    new HtmlWebpackPlugin({
      title: 'Output Management',
    }),
  ],
  output: {
    filename: 'bundle.js',
    
    chunkFilename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/',
  },
  resolve: {
    alias: {
      '~': path.resolve(__dirname)
    }
  }
  
  
};