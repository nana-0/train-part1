<template>
  <div class="header-box">
    <div class="header-score">
      <div class="store-score">
        <div class="num">{{list.delivery}}</div>
        <div>商家评分</div>
      </div>
      <div class="score">
        <div class="taste">
          口味
          <div>
            <Star :num="parseFloat(list.flavor)"></Star>
          </div>
          {{list.flavor}}分
        </div>
        <div class="package">
          包装
          <div>
            <Star :num="parseFloat(list.packing)"></Star>
          </div>
          {{list.packing}}分
        </div>
      </div>
      <div class="delivery-score">
        <div class="num">{{list.score}}</div>
        <div>配送评分</div>
      </div>
    </div>
  </div>
</template>

<script>
import Star from "@/components/Star";
export default {
  props:['list'],
  components: {
    Star,
  },
};
</script>

<style lang="scss" scoped>
.header-score {
  display: flex;
  padding: 0.3rem;
  .store-score,
  .delivery-score {
    width: 1.86rem;
    text-align: center;
    font-size: 0.28rem;
    .num {
      font-size: 0.54rem;
      font-weight: bold;
      line-height: 0.54rem;
    }
  }
  .store-score {
    .num {
      color: #ffb000;
    }
  }
  .delivery-score {
    border-left: 2px solid rgb(207, 207, 207);
    .num {
      color: #999;
    }
  }
  .score {
    flex: 1;
  }
  .taste,
  .package {
    display: flex;
  }
}
</style>