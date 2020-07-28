const mapConfig = {
	ArcGISAPI: {
		APIURL: "https://js.arcgis.com/4.15/",
		dojoConfig: {
			async: true,
			packages: [{

				location: '/widgets',
				name: 'widgets'
			}]
		},
		cssurl:"https://js.arcgis.com/4.16/esri/themes/light/main.css"
	}
}
export default mapConfig
