<template>
  <div class="Layercontrol">
    <div class="main">
      <ul class="mainul">
        <li>
          <div class="titletop">地图类型</div>
          <ul class="maptypeul">
            <li class="maptypeli vector active">
              <img class="activeimg" src="../../../../public/img/vector.png" alt />
              <div class="title">2D平面图</div>
            </li>
            <li class="maptypeli img">
              <img src="../../../../public/img/img.png" alt />
              <div class="title">卫星图</div>
            </li>
          </ul>
        </li>
        <li>
          <div class="titletop">地图主题</div>
          <ul class="mapitemul">
            <li class="maptypeli active">
              <van-image
                round
                width="2rem"
                height="2rem"
                src="http://localhost:8081/img/vector.png"
              />

              <div class="title">普通</div>
            </li>
            <li class="maptypeli img">
              <van-image
                round
                width="2rem"
                height="2rem"
                src="http://localhost:8081/img/vector.png"
              />
              <div class="title">交通</div>
            </li>
            <li class="maptypeli img">
              <van-image
                round
                width="2rem"
                height="2rem"
                src="http://localhost:8081/img/vector.png"
              />
              <div class="title">旅游</div>
            </li>
          </ul>
        </li>
        <li>
          <div class="titletop">地图显示</div>
          <ul class="mapshowul">
            <li class="maptypeli active">
              <van-image
                round
                width="2rem"
                height="2rem"
                src="http://localhost:8081/img/vector.png"
              />
              <div class="title">路况</div>
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
export default {
  name: "Layercontrol",
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
      .vector {
        margin-right: 0.426667rem;
        img {
          max-width: 3.733333rem;
        }
        .title {
          text-align: center;
        }
      }
      .img {
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