import * as dotenvWebpack from 'dotenv-webpack';
import * as forkTsCheckerWebpackPlugin from 'fork-ts-checker-webpack-plugin';
import * as nodemonWebpackPlugin from 'nodemon-webpack-plugin';
import * as path from 'path';
import * as webpack from 'webpack';
import * as webpackBuildNotifier from 'webpack-build-notifier';
import * as webpackNodeExternals from 'webpack-node-externals';

const env = process.env.NODE_ENV === 'production'
  ? 'production'
  : 'development';

const config: webpack.Configuration = {
  devtool: 'inline-source-map',
  entry: path.resolve(__dirname, 'src/server.ts'),
  externals: [webpackNodeExternals()],
  mode: env,
  module: {
    rules: [
      {
        include: path.resolve(__dirname, 'src'),
        loader: 'ts-loader',
        options: {
          experimentalWatchApi: true,
          transpileOnly: true,
        },
        test: /\.ts$/,
      },
    ],
  },
  output: {
    filename: 'app.js',
    path: path.resolve(__dirname, 'build'),
  },
  plugins: [
    new nodemonWebpackPlugin({
      env: {
        DEBUG: 'debug',
      },
      quiet: true,
      script: path.resolve(__dirname, 'build/app.js'),
      watch: [path.resolve(__dirname, 'build/app.js')],
    }),
    new dotenvWebpack(),
    new webpackBuildNotifier(),
    new forkTsCheckerWebpackPlugin({
      tslint: true,
    }),
  ],
  resolve: {
    extensions: ['.ts', '.js'],
  },
  target: 'node',
  watch: env === 'development',
};

export default config;
