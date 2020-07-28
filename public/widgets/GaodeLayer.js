define(["dojo/_base/declare","esri/layers/BaseTileLayer","esri/request"],
    function (declare,BaseTileLayer,esriRequest) {
        return BaseTileLayer.createSubclass({
            properties: {
                urlTemplate: null,
            },
            getTileUrl: function(level, row, col) {
                return url = 'http://webrd0' + (col % 4 + 1) + '.is.autonavi.com/appmaptile?lang=zh_cn&size=1&scale=1&style=8&x=' + col + '&y=' + row + '&z=' + level;
            },
            fetchTile: function(level, row, col) {
                var url = this.getTileUrl(level, row, col);
                return esriRequest(url, {
                    responseType: "image"
                })
				.then(function(response) {

					var image = response.data;
					var width = this.tileInfo.size[0];
					var height = this.tileInfo.size[0];

					var canvas = document.createElement("canvas");
					var context = canvas.getContext("2d");
					canvas.width = width;
					canvas.height = height;

					context.drawImage(image, 0, 0, width, height);

					return canvas;
				}.bind(this));
            }
        });
    }
)
