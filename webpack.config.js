const IgnoreEmitPlugin = require('ignore-emit-webpack-plugin');
const path = require('path');
const sassImporter = require('node-sass-magic-importer');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const sass = require('sass');
const autoprefixer = require('autoprefixer');
const cssnano = require('cssnano');
const config = {
  entry: './src/index.ts',
  resolve: {
    extensions: [ '.js', '.ts' ],
  },
  module: {
    rules: [
      {
        test: /\.[jt]sx?$/i,
        use: [
          {
            loader: 'babel-loader',
            options: {
                presets: [
                  ['@babel/preset-env', {
                    targets: 'last 2 versions, not dead'
                  }],
                ],
            }
          },
          'ts-loader',
        ],
        exclude: /node_modules/,
      },
    ],
  },
};

module.exports = [
  {
    ...config,
    output: {
      library: {
        name: 'BModal',
        type: 'window',
        export: 'default'
      },
      path: path.resolve(__dirname, 'dist'),
      filename: 'badger-modal.js'
    },
  },
  {
    ...config,
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: 'badger-modal.cjs.js'
    },
  },
  {
    entry: './src/index.scss',
    output: {
      path: path.resolve(__dirname, 'dist')
    },
    module: {
      rules: [
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
      new IgnoreEmitPlugin('main.js')
    ],
  }
]
