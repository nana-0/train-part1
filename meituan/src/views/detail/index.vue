<template>
  <div class="bs-wrapper">
    <div class="bs-content">
      <DetailHead></DetailHead>
      <!-- tab切换 -->
      <van-tabs v-model="active" animated>
        <van-tab :title="'点餐'">
          <order></order>
        </van-tab>
        <van-tab :title="'评论'">
          <comment></comment>
        </van-tab>
        <van-tab :title="'商家'">商家页</van-tab>
      </van-tabs>
    </div>

    <!-- {{$route.query.id}} -->
  </div>
</template>

<script>
import Order from "@/views/order/index";
import BetterScroll from "better-scroll";
import DetailHead from "./DetailHead";
import Comment from "@/views/comment/index";
export default {
  data() {
    return {
      active: 0,
    };
  },
  components: {
    DetailHead,
    Comment,
    Order,
  },
  mounted() {
    setTimeout(() => {
      let bs = new BetterScroll(".bs-wrapper", {
      click:true,
      bounce:false
    });
    }, 1000);
    
  },
};
</script>

<style lang="scss" scoped>
.bs-wrapper {
  height: 100vh;
  overflow: hidden;
}
</style>