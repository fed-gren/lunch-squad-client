const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const webpack = require("webpack");

const environment =
  process.env.NODE_ENV === "development" ? "development" : "production";

const MODE = {
  development: "development",
  production: "production"
};

module.exports = {
  entry: "./src/index.js",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "build")
  },

  devServer: {
    contentBase: path.resolve("./build"),
    index: "index.html",
    port: 8080
  },

  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: "/node_modules",
        use: ["babel-loader"]
      },

      {
        test: /\.(html)$/,
        use: [
          {
            loader: "html-loader",
            options: { minimize: true }
          }
        ]
      }
    ]
  },

  resolve: {
    alias: {
      "react-dom": "@hot-loader/react-dom"
    },
    extensions: [".js", ".jsx"]
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: "./public/index.html",
      filename: "index.html"
    }),
    new CleanWebpackPlugin(),
    new webpack.EnvironmentPlugin({
      MODE: MODE[environment]
    })
  ]
};
