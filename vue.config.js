/*
 * @Author: 周祥毅
 * @Date: 2020-03-05 11:44:39
 * @LastEditors: 周祥毅
 * @LastEditTime: 2020-03-06 09:13:43
 * @Description: 配置文件
 */
const copyWebpackPlugin = require('copy-webpack-plugin');
const path = require('path');
const webpack = require('webpack')

function resolve(dir) {
	return path.join(__dirname, dir)
}
module.exports = {
	devServer: {
		port: 8080, // 端口号配置
		proxy: {
		  '/doubanapi': {
		    target: 'https://api.douban.com/v2',
		    changeOrigin: true,
		    pathRewrite: {
		      '^/doubanapi': '/'
		    }
		  },
		  '/baiduapi': {
		    target: 'http://api.map.baidu.com',
		    changeOrigin: true,
		    pathRewrite: {
		      '^/baiduapi': '/'
		    }
		  }
		}
	},
	configureWebpack: {
		externals: {
			'AMap': 'AMap' // 高德地图配置
		}
	},
	//配置路径
	chainWebpack: config => {
		config.resolve.alias
		.set('styles', resolve('src/assets/styles')) // key,value自行定义，比如.set('@@', resolve('src/components'))
		.set('api', resolve('src/assets/js/api'))
	},
	// plugins:[
	//   new webpack.ProvidePlugin({
	//     $: "jquery",
	//     jQuery: "jquery",
	//     jquery: "jquery",
	//     "window.jQuery": "jquery"
	//   })
	// ]
}
