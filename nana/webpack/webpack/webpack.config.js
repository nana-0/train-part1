const path = require('path')
// 插件html-webpack-plugin 用于用于编译 Webpack 项目中的 html 类型的文件
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports={
	mode: 'development',
	// 入口
  entry: {
		// 多个入口
		main: './src/index.js',
		sub: './src/index.js'
	},
	// 出口
	output: {
		publicPath: 'http://cdn.xx.com/',
		path: path.resolve(__dirname,'dist'),
		filename: '[name].js'
	},
	plugins: [
		new HtmlWebpackPlugin()
	]
}