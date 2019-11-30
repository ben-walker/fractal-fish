import { Configuration } from 'webpack';
import base from './webpack.base';
import merge from 'webpack-merge';

const config: Configuration = merge(base, {
  devtool: 'source-map',
  mode: 'production',
});

export default config;
