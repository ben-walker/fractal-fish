import * as path from 'path';
import * as webpack from 'webpack';
import * as webpackNodeExternals from 'webpack-node-externals';

const env = process.env.NODE_ENV === 'production'
  ? 'production'
  : 'development';

const config: webpack.Configuration = {
  entry: './src/server.ts',
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
  resolve: {
    extensions: ['.ts', '.js'],
  },
  target: 'node',
  watch: env === 'development',
};

export default config;
