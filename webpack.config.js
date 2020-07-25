const CompressionPlugin = require('compression-webpack-plugin');

module.exports = {
  plugins: [new CompressionPlugin()],
  entry: __dirname + '/client/index.jsx',
  module: {
    rules: [
      {
        test: /\.jsx$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-react', '@babel/preset-env']
          }
        }
      }
    ]
  },
  output: {
    filename: 'bundle.js',
    path: __dirname + '/public'   },
    resolve: {
      alias: {
        '../../theme.config$': path.join(
          __dirname,
          '../my-custom-semantic-theme/theme.config',
        ),
      },
    },
    module: {
      rules: [
        {
          test: /\.less$/,
          use: [
            {
              loader: MiniCssExtractPlugin.loader,
            },
            'css-loader',
            'less-loader',
          ],
        },
        {
          test: /\.woff($|\?)|\.woff2($|\?)|\.ttf($|\?)|\.eot($|\?)|\.svg($|\?)/,
          use: 'url-loader',
        }
      ],
    },
    plugins: [
      new MiniCssExtractPlugin({
        filename: 'styles/[name].[contenthash].css',
      }),
    ],
}