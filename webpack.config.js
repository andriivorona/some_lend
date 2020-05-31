const path = require('path');
const HTMLPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  entry: './src/app.js',
  output: {
    filename: 'bundle.[chunkhash].js',
    path: path.resolve(__dirname, 'public')
  },
  devServer: {
    port: 3000
	},
	plugins: [
		new HTMLPlugin({
			template: './src/index.html'
		}),
		new CleanWebpackPlugin()
	],
	module: {
    rules: [
      {
        test: /\.s[ac]ss$/i,
        use: [
          // Creates `style` nodes from JS strings
          'style-loader',
          // Translates CSS into CommonJS
          'css-loader',
          // Compiles Sass to CSS
          'sass-loader',
        ],
			},
			{
        test: /\.(ico|jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2)(\?.*)?$/,
       loaders: [
         {
          loader: 'file-loader',
          options: {
            name: '[path][name].[ext]'
          },
        },
        'img-loader',
      ],
      },
		],
		
  },
};