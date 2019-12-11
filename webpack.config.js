const path = require('path');

module.exports = {
  mode: "production",
  entry: {
    app1: './service-allen/client/index.jsx',
    app2: './service-camryn/client/app.jsx',
    app3: './service-tom/client/index.jsx'
  },
  output: {
    filename: "[name].js",
    path: path.resolve(__dirname, "public")
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ['babel-preset-env', 'babel-preset-react']
          }
        }
      }
    ]
  },
  resolve: {
    extensions: [".js", ".jsx"],


    ////////////////////////////////////
    // BELOW THIS LINE IS IN PROGRESS //
    ////////////////////////////////////


    alias: {
      // something with styled components?
      // "module": path.resolve(__dirname, "app/third/module.js")
    }
  },
  context: __dirname, // string (absolute path!)
  // the home directory for webpack
  // the entry and module.rules.loader option
  //   is resolved relative to this directory
  target: "web",
  devServer: {
    proxy: {
      // '/api': 'http://localhost:3000'
    },
    // contentBase: path.join(__dirname, 'public'),
    // compress: true, // enable gzip compression
    // historyApiFallback: true, // true for index.html upon 404, object for multiple paths
    // hot: true, // hot module replacement. Depends on HotModuleReplacementPlugin
    // https: false, // true for self-signed, object for cert authority
    // noInfo: true // only errors & warns on hot reload
  }
}