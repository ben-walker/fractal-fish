import { CleanWebpackPlugin as BuildCleaner } from 'clean-webpack-plugin';
import { Configuration } from 'webpack';
import ForkTsChecker from 'fork-ts-checker-webpack-plugin';
import path from 'path';
import nodeExternals from 'webpack-node-externals';

const config: Configuration = {
  context: path.resolve('./'),
  entry: path.resolve('src/server.ts'),
  externals: [nodeExternals()],
  module: {
    rules: [
      {
        include: path.resolve('src'),
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
    path: path.resolve('build'),
  },
  plugins: [
    new BuildCleaner(),
    new ForkTsChecker({
      eslint: true,
    }),
  ],
  resolve: {
    extensions: ['.ts'],
  },
  target: 'node',
};

export default config;
