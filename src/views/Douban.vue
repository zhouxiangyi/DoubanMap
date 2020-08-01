<template>
  <div class="douban">
    <!-- 顶部tab栏 -->
    <van-tabs
      animated
      background="white"
      color="black"
      title-inactive-color="#585756"
      title-active-color="black"
      :border="bordershow"
      class="tab"
      v-model="activeName"
      @click="onchangeCon"
    >
      <van-tab
        v-for="(item,index) in tablist"
        :title="item.name"
        :key="item.title"
        :name="item.title"
      >
        <router-view />
      </van-tab>
    </van-tabs>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "Douban",
  data() {
    return {
      activeName: "movie",
      bordershow: true,
      tablist: [
        {
          name: "电影",
          title: "movie",
        },
        {
          name: "电视",
          title: "tv",
        },
        {
          name: "读书",
          title: "book",
        },
        {
          name: "原创小说",
          title: "oribook",
        },
        {
          name: "音乐",
          title: "musicdb",
        },
      ],
    };
  },
  methods: {
    onchangeCon(name, title) {
      console.log(name);
      //子路由跳转
      this.$router.push({
        path: `/Douban/${name}`,
      });
    },
  },
  components: {
    HelloWorld,
  },
};
</script>
<style lang="scss" scoped>
.douban {
  .tab {
    // border: 1px solid red!important;
  }
}
</style>
