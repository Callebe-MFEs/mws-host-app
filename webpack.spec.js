//webpack.spec.js

const dev = require("./webpack.dev");
const { merge } = require("webpack-merge");

module.exports = merge(
  {
    mode: "development",
    devtool: "inline-source-map",
    module: {
      rules: [
        {
          test: /\.ts$/,
          use: ["ts-loader"],
          exclude: /node_modules/,
        },
        {
          test: /\.ts$/,
          enforce: "post",
          use: [{ loader: "coverage-istanbul-loader", options: { esModules: true } }],
          exclude: /(node_modules|\.spec\.ts$)/,
        },
        {
          test: /\.style\.s[ac]ss$/i,
          use: [
            "lit-scss-loader",
            { loader: "postcss-loader", options: { sourceMap: true } },
            { loader: "sass-loader", options: { sourceMap: true } },
          ],
          exclude: /node_modules/,
        },
      ],
    },
    resolve: {
      extensions: [".ts", ".js"],
    },
    stats: { warnings: false },
    performance: {
      hints: false,
    },
  },
  dev
);
