import cleanWebpackPlugin from 'clean-webpack-plugin';
import * as path from 'path';
import * as webpack from 'webpack';
import * as webpackBuildNotifier from 'webpack-build-notifier';
import * as webpackNodeExternals from 'webpack-node-externals';

const config: webpack.Configuration = {
  entry: path.resolve(__dirname, 'src/server.ts'),
  externals: [webpackNodeExternals()],
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
    filename: 'app.bundle.js',
    path: path.resolve(__dirname, 'build'),
  },
  plugins: [new cleanWebpackPlugin(), new webpackBuildNotifier()],
  resolve: {
    extensions: ['.ts', '.js'],
  },
  target: 'node',
};

export default config;
