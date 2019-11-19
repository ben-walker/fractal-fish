import { CleanWebpackPlugin as BuildCleaner } from 'clean-webpack-plugin';
import { Configuration } from 'webpack';
import ForkTsChecker from 'fork-ts-checker-webpack-plugin';
import path from 'path';
import nodeExternals from 'webpack-node-externals';

const config: Configuration = {
  entry: path.resolve(__dirname, 'src/server.ts'),
  externals: [nodeExternals()],
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
