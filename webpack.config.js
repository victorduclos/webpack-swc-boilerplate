const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');

const isDevelopment = process.env.NODE_ENV !== 'production';

const config = {
  mode: isDevelopment ? 'development' : 'production',
  entry: [
    './src/index.tsx'
  ],
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].[contenthash].js'
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader'
        ]
      },
      {
        test: /\.[jt]sx?$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'swc-loader',
            options: {
              jsc: {
                transform: {
                  react: {
                    "runtime": "automatic",
                    "refresh": isDevelopment,
                  },
                },
              },
            },
          },
        ],
      },
      {
        test: /\.png$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              mimetype: 'image/png'
            }
          }
        ]
      },
      {
        test: /\.svg$/,
        use: 'file-loader'
      }
    ]
  },
  devServer: {
    hot: true,
    'static': {
      directory: './dist'
    }
  },
  plugins: [
    isDevelopment ? new ReactRefreshWebpackPlugin(): false,
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: 'public/index.html'
    }),
    new BundleAnalyzerPlugin({
      analyzerMode: 'static',
      openAnalyzer: false,
    }),
    new CleanWebpackPlugin()
  ].filter(Boolean),
  resolve: {
    extensions: [
      '.tsx',
      '.ts',
      '.js'
    ],
  },
  optimization: {
    runtimeChunk: 'single',
    splitChunks: {
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendors',
          chunks: 'all'
        }
      }
    }
  }
};

module.exports = (env, argv) => {
  if (argv.hot) {
    // Cannot use 'contenthash' when hot reloading is enabled.
    config.output.filename = '[name].[hash].js';
  }

  return config;
};
