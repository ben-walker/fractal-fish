module.exports = async ({ config }) => {
  config.module.rules.push(
    {
      test: /\.(ts|tsx)$/,
      loader: 'babel-loader',
      options: {
        presets: [['react-app', { flow: false, typescript: true }]],
      },
    },
    {
      test: /\.svg$/,
      use: ['@svgr/webpack', 'url-loader'],
    }
  );

  config.resolve.extensions.push('.ts', '.tsx');

  config.node = { fs: 'empty' };

  return config;
};
