<template>
  <div class="Layercontrol">
    <div class="main">
      <ul class="mainul">
        <li>
          <div class="title">地图类型</div>
          <ul class="maptypeul">
            <li class="maptypeli vector">
              <img src="../../../../public/img/vector.png" alt />
              <div class="title">2D平面图</div>
            </li>
            <li class="maptypeli img">
              <img src="../../../../public/img/img.png" alt />
              <div class="title">卫星图</div>
            </li>
          </ul>
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
    .maptypeul {
      padding: 0 0.533333rem;
      display: flex;
      .vector {
        margin-right: .426667rem;
        img {
          max-width: 3.733333rem;
        }
      }
      .img {
        img {
          max-width: 3.733333rem;
        }
      }
    }
  }
}
</style>