const path = require('path');
const sassImporter = require('node-sass-magic-importer');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const sass = require('sass');
const autoprefixer = require('autoprefixer');
const cssnano = require('cssnano');

module.exports = {
  entry: './src/index.ts',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'badger-modal.js'
  },
  resolve: {
    extensions: [ '.js', '.jsx', '.ts', '.tsx' ],
  },
  module: {
    rules: [
      {
        test: /\.[jt]sx?$/i,
        use: [
          // 'ts-loader',
          {
            loader: 'babel-loader',
            options: {
              presets: [
                '@babel/preset-env',
                '@babel/preset-typescript',
              ],
            }
          }
        ],
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          {
            loader: 'postcss-loader',
            options: {
              postcssOptions: {
                plugins: [
                  autoprefixer(),
                  cssnano(),
                ]
              }
            }
          },
          {
            loader: 'sass-loader',
            options: {
              implementation: sass,
              sassOptions: {
                importer: sassImporter({
                  cwd: path.resolve(__dirname, 'src')
                })
              }
            }
          }
        ],
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'badger-modal.css'
    }),
    // new CopyPlugin({
    //   patterns: [
    //     { from: 'dist', to: 'docs' }
    //   ]
    // })
  ],
  mode: 'production'
};
