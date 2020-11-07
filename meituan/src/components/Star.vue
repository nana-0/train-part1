<template>
  <div>
    <ul>
      <!-- 传过来num = 31  class名 根据num和i对比 
        3  i<=3   active

        half-active i- num在0-1之间的时候
          num   i
          3.5  ->4
          2.5  ->3
          1.1  ->2
          0< (i-num) <1

           i<=num(3.8)  1 2 3  active
           0  < i-num  < 1   =>3     half-active

        unactive
           3.5   >4
           4     >4

           2.5   >3
           3     >3
      -->
      <li
        v-for="i in 5"   
        :key="i"
        :class="{
          'active':i<=num,
          'half-active': ((i-num)>0)&&((i-num)<1),  
          'unactive':i> Math.ceil(num)
      }"
      ></li>
      <!-- <li class="active"></li>
      <li class="half-active"></li>
      <li class="unactive"></li>-->
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    num: {
      type: Number,
      default: 5
    }
  }
};
</script>

<style lang="scss" scoped>
ul {
  display: flex;
  li {
    width: 12px;
    height: 12px;
    background-size: 12px 12px;
  }
  .active {
    background-image: url(./images/star-active.png);
  }
  .half-active {
    background-image: url(./images/star-half.png);
  }
  .unactive {
    background-image: url(./images/star.png);
  }
}
</style>