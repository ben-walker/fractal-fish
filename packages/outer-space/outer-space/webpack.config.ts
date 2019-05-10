import * as dotenvWebpack from 'dotenv-webpack';
import * as nodemonWebpackPlugin from 'nodemon-webpack-plugin';
import * as path from 'path';
import * as tslintWebpackPlugin from 'tslint-webpack-plugin';
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
        test: /\.ts$/,
        use: ['ts-loader'],
      },
    ],
  },
  output: {
    filename: 'app.js',
    path: path.resolve(__dirname, 'build'),
  },
  plugins: [
    new tslintWebpackPlugin({
      config: './tslint.json',
      files: './src/**/*.ts',
    }),
    new nodemonWebpackPlugin({
      env: {
        DEBUG: 'debug',
      },
      script: path.resolve(__dirname, 'build/app.js'),
      watch: [path.resolve(__dirname, 'build')],
    }),
    new dotenvWebpack(),
    new webpackBuildNotifier(),
  ],
  resolve: {
    extensions: ['.ts', '.js'],
  },
  target: 'node',
  watch: env === 'development',
};

export default config;
