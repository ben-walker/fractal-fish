import { Configuration } from 'webpack';
import Dotenv from 'dotenv-webpack';
import Nodemon from 'nodemon-webpack-plugin';
import base from './webpack.base';
import merge from 'webpack-merge';
import path from 'path';

const config: Configuration = merge(base, {
  devtool: 'inline-source-map',
  mode: 'development',
  plugins: [
    new Dotenv({ path: path.resolve('.env.local') }),
    new Nodemon({
      env: {
        quiet: true,
        script: path.resolve('build/app.bundle.js'),
        watch: [path.resolve('build/app.bundle.js')],
      },
    }),
  ],
  watch: true,
});

export default config;
