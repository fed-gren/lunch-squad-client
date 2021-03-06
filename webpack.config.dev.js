const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const webpack = require('webpack');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
const CopyPlugin = require('copy-webpack-plugin');
const devEnv = require('dotenv').config({
  path: path.resolve(process.cwd(), '.env.development'),
});

module.exports = {
  entry: './src/index.jsx',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'build'),
  },
  devtool: 'inline-source-map',
  mode: 'development',
  devServer: {
    contentBase: path.resolve(__dirname, 'build'),
    index: 'index.html',
    port: 3000,
    historyApiFallback: true,
  },

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
            options: { minimize: true },
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
      KAKAO_MAP_API_URL: devEnv.parsed.KAKAO_MAP_API_URL,
      ENCODED_AUTHORIZATION: devEnv.parsed.ENCODED_AUTHORIZATION,
      COGNITO_CLIENT_ID: devEnv.parsed.COGNITO_CLIENT_ID,
      COGNITO_REDIRECT_URL: devEnv.parsed.COGNITO_REDIRECT_URL,
    }),
    new BundleAnalyzerPlugin(),
    new CopyPlugin([
      { from: 'cognito/', to: './' },
    ]),
  ],
};
