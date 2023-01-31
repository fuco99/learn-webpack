const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");

module.exports = {
  mode: "development",
  entry: {
    app: path.resolve("src/index.js"),
  },
  output: {
    path: path.resolve(__dirname, "dist"),
  },
  module: {
    rules: [
      {
        test: /\.s[ac]ss|css$/,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
        title: 'webpack app',
        filename: 'index.html',
        template: 'src/template.html'
    })
  ]
};
