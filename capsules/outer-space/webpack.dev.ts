import * as dotenvWebpack from 'dotenv-webpack';
import * as forkTsCheckerWebpackPlugin from 'fork-ts-checker-webpack-plugin';
import * as nodemonWebpackPlugin from 'nodemon-webpack-plugin';
import * as path from 'path';
import * as webpack from 'webpack';
import * as webpackMerge from 'webpack-merge';
import webpackCommon from './webpack.common';

const config: webpack.Configuration = {
  devtool: 'inline-source-map',
  mode: 'development',
  plugins: [
    new dotenvWebpack(),
    new forkTsCheckerWebpackPlugin({
      tslint: true,
    }),
    new nodemonWebpackPlugin({
      env: {
        quiet: true,
        script: path.resolve(__dirname, 'build/app.bundle.js'),
        watch: [path.resolve(__dirname, 'build/app.bundle.js')],
      },
    }),
  ],
  watch: true,
};

export default webpackMerge(webpackCommon, config);
