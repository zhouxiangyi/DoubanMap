// const mapConfig = {
// 	ArcGISAPI: {
// 		APIURL: "/arcgis_js_api/library/4.16/init.js",
// 		dojoConfig: {
// 			async: true,
// 			packages: [{

// 				location: '/widgets',
// 				name: 'widgets'
// 			}]
// 		},
// 		cssurl:"/arcgis_js_api/library/4.16/esri/themes/light/main.css"
// 	}
// }
const mapConfig = {
	ArcGISAPI: {
		APIURL: "http://39.100.62.29:9921/library/4.14/init.js",
		dojoConfig: {
			async: true,
			packages: [{

				location: '/widgets',
				name: 'widgets'
			}]
		},
		cssurl:"http://39.100.62.29:9921/library/4.14/esri/themes/light/main.css"
	}
}
export default mapConfig
