const webpack = require('webpack');
const path = require('path');
const fs = require('fs');
const lodash = {
    reduce: require('lodash/reduce')
};

const OUT_DIR = path.resolve(__dirname, 'dist');
const SRC_DIR = path.resolve(__dirname, 'src');

module.exports = {
  entry: lodash.reduce(fs.readdirSync(SRC_DIR), (entries, file) => {
    const name = file.split('.').slice(0, -1).join('.');

    return Object.assign(entries, {[name]: path.resolve(SRC_DIR, file)});
  }, {}),
  output: { path: OUT_DIR, filename: '[name].js' },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        include: SRC_DIR,
        use: {
            loader: "babel-loader",
            options: {
                presets: [
                    ["env", { targets: { browsers: ["> 2%"] } }],
                    "react"
                ],
                plugins: ['transform-object-rest-spread']
            }
        }
      }
    ]
  },
  plugins: [
    new webpack.ProvidePlugin({
      'React': 'react'
    })
  ]
};