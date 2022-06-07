const rules = require("./webpack.rules");
const plugins = require("./webpack.plugins");
const { loader } = require("mini-css-extract-plugin");
const path = require("path");

rules.push(
  {
    test: /\.vue$/,
    loader: "vue-loader",
  },
  {
    test: /\.css$/,
    exclude: /node_modules/,
    use: [
      process.env.NODE_ENV !== "production" ? "vue-style-loader" : loader,
      //{ loader: "style-loader" },
      { loader: "css-loader", options: { importLoaders: 1 } },
      "postcss-loader",
    ],
  },
  // Images: Copy image files to build folder
  { test: /\.(?:ico|gif|png|jpg|jpeg)$/i, type: "asset/resource" },

  // Fonts and SVGs: Inline files
  { test: /\.(woff(2)?|eot|ttf|otf|svg|)$/, type: "asset/inline" },
  //{test: /\.js$/, exclude: /node_modules/, use: ['babel-loader']},
  { test: /\.html$/, use: "vue-html-loader" }
);

module.exports = {
  module: {
    noParse: /^(vue|vue-router|pinia)$/,
    rules,
  },
  plugins: plugins,
  resolve: {
    extensions: [".js", ".ts", ".jsx", ".tsx", ".css", ".vue", ".json"],
    alias: {
      //vue: "vue/dist/vue.esm-bundler.js",
      vue: "@vue/runtime-dom",
      "@": path.resolve("src"),
    },
  },
};
