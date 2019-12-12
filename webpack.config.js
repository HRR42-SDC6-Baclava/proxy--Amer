const path = require('path');

module.exports = {
  entry: {
    style: ['styled-components'],
    app: './service-allen/client/index.jsx',
    app2: './service-camryn/client/app.jsx',
    app3: './service-tom/client/index.jsx',
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'public')
  },
  module: {
    rules: [
      {
        test: [/\.jsx$/],
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react']
          }
        }
      }
    ]
  },
  resolve: {
    alias: {
      'styled-components': path.resolve('./node_modules', 'styled-components')
    }
  },
  optimization: {
    splitChunks: {
      cacheGroups: {
        vendor: {
          chunks: 'all',
          test: /[\\/]node_modules[\\/]/,
          name: 'style',
          priority: 10,
          enforce: true
        },
        default: {
          chunks: 'all',
          minChunks: 2,
          reuseExistingChunk: true
        }
      }
    },
    runtimeChunk: {
      name: 'style'
    }
  }
}