
import axios from 'axios'
//api请求的封装
axios.defaults.headers.post['Content-Type'] = 'application/json';
//axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8';
var API_DB_URL = "/doubanapi"
var API_Music_URL = ""
var API_BaiduMap_URL = "/baiduapi"
function request(url, params, method, type) {
  var dataurl = null
  if (type === "douban") {
    dataurl = API_DB_URL + url
  } else if(type === "BaiduMap"){
    dataurl = API_BaiduMap_URL + url
  }else{
    dataurl = API_Music_URL + url
  }
  //var dataurl = `${API_BASE_URL}${url}`

  if (method === 'get') {
    return axios.get(dataurl, {
      params: params
    }).then(function (res) {
      return Promise.resolve(res.data)
    }).catch(function (res) {

    })
  } else if (method === 'post') {
    // 发送 POST 请求
    return axios({
      method: 'post',
      headers: { "token": tokenzn },
      url: dataurl,
      data: params
    }).then(function (res) {
      return Promise.resolve(res.data)
    })
  }

}
var DBAPI = {
  //获取豆瓣热门电影
  getHotMovie: function (data, method) {
    return request('/movie/in_theaters', data, method, 'douban')
  },
  //获取电影一周口碑榜
  getWeeklyMoive: function (data, method) {
    return request('/movie/weekly', data, method, 'douban')
  },
  //获取电影一周口碑榜
  getTopMoive: function (data, method) {
    return request('/movie/top250', data, method, 'douban')
  },
  //获取新片榜
  getNewmovies: function (data, method) {
    return request('/movie/new_movies', data, method, 'douban')
  },
  //即将上映的电影
  getComingMovie: function (data, method) {
    return request('/movie/coming_soon', data, method, 'douban')
  },
  //获取电影剧照
  getMovieimg: function (data, id, method) {
    return request(`/movie/subject/${id}/photos`, data, method, 'douban')
  },
  //获取电影详情
  getMoviemore: function (data, id, method) {
    return request(`/movie/subject/${id}`, data, method, 'douban')
  }
}
var BaiduMapAPI = {
  //其他坐标系转百度坐标
  geoconv: function (data, method) {
    return request('/geoconv/v1/', data, method, 'BaiduMap')
  },
  //获取poi
   getpoi:function(data, method){
    return request('/place/v2/search', data, method, 'BaiduMap')
   }
}
export {DBAPI,BaiduMapAPI}


