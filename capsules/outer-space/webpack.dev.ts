import * as dotenvWebpack from 'dotenv-webpack';
import * as nodemonWebpackPlugin from 'nodemon-webpack-plugin';
import * as path from 'path';
import * as webpack from 'webpack';
import * as webpackMerge from 'webpack-merge';
import webpackCommon from './webpack.common';

const config: webpack.Configuration = webpackMerge(webpackCommon, {
  devtool: 'inline-source-map',
  mode: 'development',
  plugins: [
    new dotenvWebpack(),
    new nodemonWebpackPlugin({
      env: {
        quiet: true,
        script: path.resolve(__dirname, 'build/app.bundle.js'),
        watch: [path.resolve(__dirname, 'build/app.bundle.js')],
      },
    }),
  ],
  watch: true,
});

export default config;
