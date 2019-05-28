import * as webpack from 'webpack';
import * as webpackMerge from 'webpack-merge';
import webpackCommon from './webpack.common';

const config: webpack.Configuration = {
  devtool: 'source-map',
  mode: 'production',
};

export default webpackMerge(webpackCommon, config);
