const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const path = require("path");

module.exports = {
  mode: "development",
  entry: {
    app: path.resolve("src/index.js"),
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: '[name].[contenthash].js'
  },
  module: {
    rules: [
      {
        test: /\.s[ac]ss|css$/,
        use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: '[name].[contenthash].css'
    }),
    new HtmlWebpackPlugin({
        title: 'webpack app',
        filename: 'index.html',
        template: 'src/template.html'
    })
  ]
};
