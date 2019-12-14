import * as webpack from 'webpack';
import * as webpackMerge from 'webpack-merge';
import webpackCommon from './webpack.common';

const config: webpack.Configuration = webpackMerge(webpackCommon, {
  devtool: 'source-map',
  mode: 'production',
});

export default config;
