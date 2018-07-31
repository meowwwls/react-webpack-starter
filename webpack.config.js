const path = require('path');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');

const inDevMode = process.env.NODE_ENV === 'development';
const port = process.env.PORT || 4400;

module.exports = {
  devtool: 'source-map',
  entry: './src/js/index.js',
  output: {
    filename: inDevMode ? 'bundle.js' : 'bundle.[hash].js',
    path: path.resolve(__dirname, 'dist')
  },
  devServer: {
    port
  },
  optimization: {
    minimizer: [
      new UglifyJsPlugin({
        test: /\.js$/,
        exclude: /node_modules/,
        cache: true,
        sourceMap: true,
        uglifyOptions: {
          warnings: false,
          output: { comments: false }
        }
      }),
      new OptimizeCSSAssetsPlugin({})
    ]
  },
  plugins: [
    new CleanWebpackPlugin('./dist', {
      verbose: true,
      beforeEmit: true
    }),
    new HtmlWebpackPlugin({
      template: './src/index.html'
    }),
    new MiniCssExtractPlugin({
      filename: '[name].[hash].css',
      chunkFilename: '[id].[hash].css'
    })
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      },
      {
        test: /\.scss$/,
        use: [
          inDevMode ? 'style-loader' : MiniCssExtractPlugin.loader,
          { loader: 'css-loader', options: { sourceMap: true } },
          { loader: 'postcss-loader', options: { sourceMap: true } },
          { loader: 'sass-loader', options: { sourceMap: true } }
        ]
      }
    ]
  }
};
