<template>
  <div>
    <DetailHead></DetailHead>
    <!-- tab切换 -->
    <van-tabs v-model="active" animated>
      <van-tab :title="'点餐'" >点餐页</van-tab>
      <van-tab :title="'评论'" >
        <comment></comment>  
      </van-tab>
      <van-tab :title="'商家'" >商家页</van-tab>
    </van-tabs>
    <!-- {{$route.query.id}} -->
  </div>
</template>

<script>
import DetailHead from "./DetailHead";
import Comment from "@/views/comment/index";
export default {
    data(){
        return {
            active:0
        }
    },
  components: {
    DetailHead,
    Comment
  }
};
</script>

<style lang="scss" scoped>
</style>