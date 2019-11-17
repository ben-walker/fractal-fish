import * as DotenvWebpack from 'dotenv-webpack';
import * as path from 'path';
import * as webpack from 'webpack';
import * as webpackMerge from 'webpack-merge';
import * as NodemonWebpackPlugin from 'nodemon-webpack-plugin';
import webpackBase from './webpack.base';

const config: webpack.Configuration = webpackMerge(webpackBase, {
  devtool: 'inline-source-map',
  mode: 'development',
  plugins: [
    new DotenvWebpack({ path: './.env.local' }),
    new NodemonWebpackPlugin({
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
