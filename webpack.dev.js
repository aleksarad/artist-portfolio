const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const webpack = require('webpack');
const path=require('path');

module.exports = {

  entry: {
    index: './src/client/index.js'
  },


  devServer: {
    port: 8080
  },

  module: {
  
    rules: [
      {
        test: /\.js$/i,
        exclude: /node_modules/,
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-env']
        }
      },

      {
        test: /\.css$/i,
        use: [ MiniCssExtractPlugin.loader, 'css-loader' ],
      },
      
    {
        test: /\.(png|jpg|svg|gif)$/,  
        use: [{
            loader: 'url-loader',
            options: { 
                limit: 8000, // Convert images < 8kb to base64 strings
                name: '[name].[ext]'
            } 
        }]
    }
    ]
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: './src/client/views/index.html',
      inject: true,
      chunks: ['index'],
      filename: 'index.html'
    }),
    new HtmlWebpackPlugin({
        template: './src/client/views/html/about.html',
        inject: true,
        chunks: ['index'],
        filename: 'about.html'
    }),
    new MiniCssExtractPlugin()
  ]
}