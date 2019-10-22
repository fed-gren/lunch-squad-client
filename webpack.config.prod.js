const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const webpack = require('webpack');
const CopyPlugin = require('copy-webpack-plugin');
const prodEnv = require('dotenv').config({
  path: path.resolve(process.cwd(), '.env.production'),
});

module.exports = {
  entry: './src/index.jsx',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'build'),
  },
  mode: 'production',
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: '/node_modules',
        use: ['babel-loader'],
      },

      {
        test: /\.(html)$/,
        use: [
          {
            loader: 'html-loader',
          },
        ],
      },
    ],
  },

  resolve: {
    alias: {
      'react-dom': '@hot-loader/react-dom',
    },
    extensions: ['.js', '.jsx'],
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html',
      filename: 'index.html',
    }),
    new CleanWebpackPlugin(),
    new webpack.EnvironmentPlugin({
      KAKAO_MAP_API_URL: prodEnv.parsed.KAKAO_MAP_API_URL,
    }),
    new CopyPlugin([
      { from: 'cognito/', to: './' },
    ]),
  ],
};
