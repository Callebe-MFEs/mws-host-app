const path = require("path");
const TsconfigPathsPlugin = require("tsconfig-paths-webpack-plugin");

module.exports = {
  resolve: {
    plugins: [
      new TsconfigPathsPlugin({
        configFile: path.resolve(__dirname, "./tsconfig.json"),
      }),
    ],
  },
  devServer: {
    static: [path.resolve(__dirname, "dist")],
    historyApiFallback: true,
    open: true,
    proxy: [
      {
        context: ["/applications"],
        target: "http://localhost:8080",
        pathRewrite: { "^/applications": "/public/applications.json" },
      },
    ],
  },
};
