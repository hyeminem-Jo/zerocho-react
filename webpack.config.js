const path = require("path");
const RefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');

module.exports = {
  name: 'word-relay-development',
  mode: "development",
  devtool: "eval", 
  resolve: {
    extensions: [".jsx", ".js"],
  },

  entry: {
    app: ["./client"],
  },
  module: {
    rules: [{
      test: /\.jsx?$/,
      loader: "babel-loader",
      options: {
        presets: [
          ["@babel/preset-env", {
            targets: { 
              browsers: ['>1% in KR'],
            },
            debug: true,
          }],
          "@babel/preset-react"
        ],
        plugins: [
          '@babel/plugin-proposal-class-properties',
          // babel 이 최신 문법을 옛날 js 로 transfile 할 때 핫 리로딩 기능까지 추가
          'react-refresh/babel',
        ],
      },
    },],
  },
  plugins: [
    new RefreshWebpackPlugin()
  ],
  output: {
    path: path.join(__dirname, "dist"),
    filename: "app.js",
    publicPath: '/dist/',
  },
  devServer: {
    // 나중에 결과물을 웹팩이 생성해줄 경로
    devMiddleware: { publicPath: '/dist/' },
    // 실제로 존재하는 파일들에 대한 경로
    static: { directory: path.resolve(__dirname) },
    hot: true
  },
};

// webpack-dev-server 의 역할: 빌드의 결과물을 돌린 다음 (publicPath 에 적은) dist 폴더에 그 결과물을 메모리로 저장해줌. 또한  변경점을 감지하는 기능이 있어 소스코드에 변경이 생길 때 이를 감지 후 결과물도 수정해줌.