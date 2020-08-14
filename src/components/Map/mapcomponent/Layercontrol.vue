<template>
  <div class="Layercontrol">
    <div class="main">
      <ul class="mainul">
        <li>
          <div class="titletop">地图类型</div>
          <ul class="maptypeul">
            <li class="maptypeli Vector" @click="SwitchBaseMap('Vector')">
              <img class src="../../../../public/img/vector.png" alt />
              <div class="title">2D平面图</div>
            </li>
            <li class="maptypeli Image" @click="SwitchBaseMap('Image')">
              <img src="../../../../public/img/img.png" alt />
              <div class="title">卫星图</div>
            </li>
          </ul>
        </li>
        <li>
          <div class="titletop">地图主题</div>
          <ul class="mapitemul">
            <li
              class="maptypeli active"
              v-for="item in mapitemuldata"
              :key="item.type"
              @click="showPoi(item.name,$event)"
            >
              <van-image round width="2rem" height="2rem" :src="item.url" />
              <div class="title">{{item.name}}</div>
            </li>
          </ul>
        </li>
        <li>
          <div class="titletop">地图显示</div>
          <ul class="mapshowul">
            <li class="maptypeli active" v-for="item in mapshowuldata" :key="item.type">
              <van-image round width="2rem" height="2rem" :src="item.url" />
              <div class="title">{{item.name}}</div>
            </li>
          </ul>
        </li>
        <li>
          <div class="titletop"></div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import $ from "jquery";
import config from "../../../assets/config/config";
export default {
  name: "Layercontrol",
  props: {
    MapAction: {
      type: Object,
      default: null,
    },
    ZMaps: {
      type: Object,
      default: null,
    },
  },
  data() {
    return {
      currentBaseMap: null, //当前底图图层
      mapitemuldata: [
        {
          name: "普通",
          url: "http://localhost:8080/img/vector.png",
          type: "normal",
        },
        {
          name: "交通",
          url: "http://localhost:8080/img/vector.png",
          type: "traffic",
        },
        {
          name: "旅游",
          url: "http://localhost:8080/img/vector.png",
          type: "Travel",
        },
      ],
      mapshowuldata: [
        {
          name: "路况",
          url: "http://localhost:8080/img/vector.png",
          type: "normal",
        },
      ],
      center: null,
    };
  },
  mounted() {
    console.log(this.ZMaps);
    //根据底图类型的显示，进行判断
    for (let item of this.ZMaps._BaseLayers) {
      if (item.visible) {
        this.currentBaseMap = item;
      }
    }
    console.log("当前底图:", this.currentBaseMap.id);
    //根据当前图层进行渲染选中
    this.center = this.MapAction.centerBD.reverse();
    this.center = this.center.join(",");
    $(`.maptypeul .${this.currentBaseMap.id}`).addClass("active");
    $(`.maptypeul .${this.currentBaseMap.id} img`).addClass("activeimg");
  },
  methods: {
    SwitchBaseMap(type) {
      //选中状态处理
      $(`.maptypeul .${type}`)
        .addClass("active")
        .siblings()
        .removeClass("active");
      $(`.maptypeul .${type} img`)
        .addClass("activeimg")
        .parents()
        .siblings()
        .children("img")
        .removeClass("activeimg");

      //底图切换
      this.MapAction.BaseMapchanges(type);
    },
    showPoi(type, e) {
      let jqe = $(e.target);
      //获取下标
      jqe.addClass("active").siblings().removeClass("active");
      //当前中心点坐标，百度
      this.BaiduMapAPI.getpoi(
        {
          apikey: config.doubankey,
          query: "交通",
          location:this.center,
          radius: 2000,
          ak: config.baidumapkey,
          output: "json",
          page_size: 20,
        },
        "get"
      ).then((res) => {
        console.log(res);
        if(res.message==='ok'){
          //此处进行点位图层的添加
          
        }
        console.log(this.MapAction.centerBD);
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.main {
  padding: 1.066667rem 0;
  font-size: 0.533333rem;
  .mainul {
    .titletop {
      padding: 0.266667rem;
      background: #e8e5e5;
      color: #353535;
      margin-bottom: 0.533333rem;
    }
    .maptypeul {
      padding: 0.8rem 0.533333rem;
      display: flex;
      .Vector {
        margin-right: 0.426667rem;
        img {
          max-width: 3.733333rem;
        }
        .title {
          text-align: center;
        }
      }
      .Image {
        img {
          max-width: 3.733333rem;
        }
        .title {
          text-align: center;
        }
      }
      .maptypeli.active {
        color: #3385ff;
      }
      .maptypeli {
        img.activeimg {
          border: 0.053333rem solid #3385ff;
        }
      }
    }
    .mapitemul {
      padding: 0.8rem 0.533333rem;
      display: flex;
      justify-content: space-between;
      .maptypeli.active {
        color: #3385ff;
      }
      .maptypeli {
        img {
          max-width: 3.733333rem;
        }
        .title {
          text-align: center;
        }
        img.activeimg {
          border: 0.053333rem solid #3385ff;
        }
      }
    }
    .mapshowul {
      padding: 0.8rem 0.533333rem;
      display: flex;
      justify-content: space-between;

      .maptypeli.active {
        color: #3385ff;
      }
      .maptypeli {
        img {
          max-width: 3.733333rem;
        }
        .title {
          text-align: center;
        }
        img.activeimg {
          border: 0.053333rem solid #3385ff;
        }
      }
    }
  }
}
</style>