import * as path from 'path'
import HtmlWebpackPlugin from 'html-webpack-plugin'

const config = {
  mode: 'production',
  entry: './dist/index.js',
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.scss?$/,
        use: [{ loader: 'style-loader' }, { loader: 'css-loader' }],
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  externals: {
    react: 'React',
    'react-dom': 'ReactDOM',
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'src/index.html',
      hash: true, // This is useful for cache busting
      filename: 'index.html',
    }),
  ],
  devServer: {
    port: 4000,
    open: true,
    hot: true,
  },
}

export default config
