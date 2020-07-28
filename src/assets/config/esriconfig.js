var locationUrl = "buildUrl";
if (process.env.NODE_ENV === "development") {
    locationUrl = "devUrl";
}
const options = {
    url: 'https://js.arcgis.com/4.15/',// 这里的API地址可以是官网提供的CDN，也可在此配置离线部署的地址
    dojoConfig: {
        async: true,
        packages: [
            {

                location: '/widgets',
                name: 'widgets'
            }
        ]
    }


}
export default {
    options
}