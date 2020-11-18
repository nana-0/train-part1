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
    <!-- <div class="cart" v-if="active == 0"></div> -->
    <cart v-if="active==0" :storeMsg="storeMsg"></cart>
    <!-- {{$route.query.id}} -->
  </div>
</template>

<script>
import Order from "@/views/order/index";
import BetterScroll from "better-scroll";
import DetailHead from "./DetailHead";
import Comment from "@/views/comment/index";
import Cart from './../cart'
import axios from 'axios'
export default {
  data() {
    return {
      active: 0,
      storeMsg:{}
    };
  },
  components: {
    DetailHead,
    Comment,
    Order,
    Cart
  },
    
  mounted() {
    setTimeout(() => {
      let bs = new BetterScroll(".bs-wrapper", {
        click: true,
        bounce: false,
      });
    }, 1000);

    axios.get('http://admin.gxxmglzx.com/tender/test/get_store_id?id='+this.$route.query.id)
    .then(res=>{
      this.storeMsg = res.data.data;
    }).catch(err=>{
      console.log(err)
    })
  },
};
</script>

<style lang="scss" scoped>
.bs-wrapper {
  height: 100vh;
  overflow: hidden;

}
</style>