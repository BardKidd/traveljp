const { defineConfig } = require("@vue/cli-service");
const CompressionWebpackPlugin = require("compression-webpack-plugin");
const productionGzipExtensions = /\.(js|css|json|txt|html|ico|svg)(\?.*)?$/i;
const Timestamp = new Date().getTime();

const AutoImport = require("unplugin-auto-import/webpack");
const Components = require("unplugin-vue-components/webpack");
const { ElementPlusResolver } = require("unplugin-vue-components/resolvers");
// const webpack = require("webpack");

let jsFileName =
  process.env.NODE_ENV === "production"
    ? `js/[name].js`
    : `js/[name].${Timestamp}.js`;
let cssFileName =
  process.env.NODE_ENV === "production"
    ? `css/[name].css`
    : `css/[name].${Timestamp}.css`;
module.exports = defineConfig({
  transpileDependencies: true,
  productionSourceMap: false,
  runtimeCompiler: false,
  filenameHashing: false,
  devServer: {
    port: 8080,
  },
  // outputDir: Dir,

  configureWebpack: {
    performance: {
      hints: false,
    },
    resolve: {
      alias: {
        assets: "@/assets",
        components: "@/components",
        views: "@/views",
        store: "@/store",
      },
    },
    plugins: [
      new CompressionWebpackPlugin({
        filename: "[path].gz[query]",
        algorithm: "gzip",
        test: productionGzipExtensions,
        threshold: 10240,
        minRatio: 0.8,
      }),
      // new webpack.DefinePlugin({
      //   "process.env": {
      //     API: process.env.VUE_APP_API,
      //     PATH: process.env.VUE_APP_PATH,
      //   },
      // }),
      AutoImport({
        resolvers: [ElementPlusResolver()],
      }),
      Components({
        resolvers: [ElementPlusResolver()],
      }),
    ],
    output: {
      // 補上 Timestamp 更新版本
      filename: jsFileName,
      chunkFilename: jsFileName,
    },
  },
  css: {
    // 補上 Timestamp 更新版本
    extract: {
      filename: cssFileName,
      chunkFilename: cssFileName,
    },
  },
  publicPath: "./",
});
