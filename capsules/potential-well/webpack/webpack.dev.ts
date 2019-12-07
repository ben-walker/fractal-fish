import { Configuration } from 'webpack';
import Dotenv from 'dotenv-webpack';
import base from './webpack.base';
import merge from 'webpack-merge';
import path from 'path';

const config: Configuration = merge(base, {
  devtool: 'inline-source-map',
  mode: 'development',
  plugins: [new Dotenv({ path: path.resolve('.env.local') })],
});

export default config;
