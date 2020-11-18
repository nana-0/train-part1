<template>
  <div>
    <div class="cart">
      <div class="circle">
        <span class="iconfont icon-gouwuche"></span>
        <span class="total" v-if="$store.getters.total>0">{{$store.getters.total}}</span>
      </div>
      <div class="fee">
        <p>
          另需配送费{{ storeMsg.fee }}元 总价{{ $store.getters.totalPrice }}
        </p>
      </div>
      <div class="price">
        <p>{{ storeMsg.price }}元起送</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["storeMsg"],
};
</script>

<style lang="scss" scoped>
.cart {
  height: 50px;
  background: #3b3b3c;
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  display: flex;
  .circle {
    width: 50px;
    border-radius: 50%;
    height: 50px;
    background: #656565;
    text-align: center;
    line-height: 50px;
    position: absolute;
    top: -10px;
    left: 10px;
    .icon-gouwuche {
      font-size: 28px;
      color: #c4c4c4;
      font-weight: 700;
    }
    .total{
      right: 0;
      top: 0;
      line-height: 18px;
      position: absolute;
      background-color: red;
      border-radius: 50%;
      width: 18px;
      height: 18px;
      color: white;
    }
  }
  .fee {
    flex: 3;
    margin-left: 80px;
    height: 50px;
    line-height: 50px;
    color: #999;
  }
  .price {
    flex: 1;
    color: #999;
    height: 50px;
    line-height: 50px;
  }
}
</style>