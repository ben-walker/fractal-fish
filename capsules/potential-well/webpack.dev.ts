import * as webpack from 'webpack';
import * as webpackMerge from 'webpack-merge'
import webpackBase from './webpack.base';

const config: webpack.Configuration = webpackMerge(webpackBase, {
  devtool: 'inline-source-map',
  mode: 'development',
  watch: true,
});

export default config;
