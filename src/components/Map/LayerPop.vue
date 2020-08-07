<template>
  <div class="LayerPop">
    <van-popup v-model="show" position="right" round :style="{ height: '100%' }" @click-overlay="backMap">
        <Layercontrol>
        </Layercontrol>
    </van-popup>
  </div>
</template>

<script>
import Layercontrol from "./mapcomponent/Layercontrol";
//图层控制组件
export default {
  name:"LayerPop",
  data() {
    return {
      show: false,
    };
  },
  created(){
    //拿到参数
    this.show = this.$route.params.show
  },
  methods: {
    showPopup() {
      this.show = true;
    },
    //返回map组件
    backMap(){
        this.$router.push(`/Map`);
    }
  },
  components:{
    Layercontrol
  }
};
</script>

<style lang="scss" scoped>
</style>