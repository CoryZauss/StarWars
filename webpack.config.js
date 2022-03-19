const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: ["regenerator-runtime/runtime.js", "./client/src/index.js"],
  mode: "development",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "./client/dist"),
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./client/src/index.html",
      inject: "body",
    }),
  ],
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /(node_modules)/,
        use: {
          loader: "babel-loader",
        },
      },
      {
        test: /\.html$/,
        use: {
          loader: "html-loader",
        },
      },
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
};
