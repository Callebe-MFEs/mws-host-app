const path = require("path");
const dev = require("./webpack.dev");
const common = require("./webpack.common");
const { merge } = require("webpack-merge");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin");
const { ModuleFederationPlugin } = require("webpack").container;

const deps = require("./package.json").dependencies;

module.exports = merge(
  common,
  merge(dev, {
    entry: {
      main: path.resolve(__dirname, "src/index.ts"),
    },
    mode: "development",
    output: {
      filename: "index.js",
      path: path.resolve(__dirname, "dist"),
      publicPath: "auto",
    },
    plugins: [
      new ModuleFederationPlugin({
        name: "myWorkspaceHomeApp",
        filename: "remoteEntry.js",
        exposes: {
          "./myWorkspaceHomeApp": "./src/mws-home/mws-home.mfe.ts",
        },
        shared: {
          lit: {
            requiredVersion: deps["lit"],
            strictVersion: true,
          },
          "lit-html": {
            requiredVersion: deps["lit-html"],
            strictVersion: true,
          },
          "lit-element": {
            requiredVersion: deps["lit-element"],
            strictVersion: true,
          },
        },
      }),
      new HtmlWebpackPlugin({
        title: "My Workspace",
        template: path.resolve(__dirname, "src/index.html"),
      }),
      new CopyPlugin({
        patterns: [
          {
            from: "public",
            to: "public",
          },
        ],
      }),
    ],
  })
);
