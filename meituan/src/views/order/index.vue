<template>
  <div class="order-container">
    <div class="cate-box">
      <ul>
        <li v-for="(obj,index) in nav" :key="obj.id" @click="select(index)" :class="{active:index == currentIndex}">{{ obj.name }}</li>
      </ul>
    </div>

    <div class="pro-box">
      <div>
        <div v-for="(obj, index) in goods" :key="index" class="pro-cate-box">
          <p>{{ obj.name }}</p>
          <ul>
            <li class="prod-list" v-for="prod in obj.content" :key="prod.id">
              <img class="prod-img" :src="prod.img" alt="" />
              <h2>{{ prod.name }}</h2>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import BetterScroll from "better-scroll";
export default {
  data() {
    return {
      nav: [],
      goods: [],
      currentIndex: 0
    };
  },
  methods:{
    select(index){
      let ProCateList = document.querySelectorAll(".pro-cate-box");
      this.proScroll.scrollToElement(ProCateList[index],300);
      this.currentIndex = index;
    }

    

  },
  created() {
    axios
      .get(
        `http://admin.gxxmglzx.com/tender/test/get_nav?id=${this.$route.query.id}`
      )
      .then((res) => {
        console.log(res.data.data);
        this.nav = res.data.data.nav;
        this.goods = res.data.data.goods;

        this.$nextTick(() => {
          this.cateScroll = new BetterScroll(".cate-box", {
            click: true,
            bounce: false,
          });
          this.proScroll = new BetterScroll(".pro-box", {
            click: true,
            bounce: false,
          });
        });
      });
  },
};
</script>

<style lang="scss" scoped>
.order-container {
  padding-bottom: 50px;
  display: flex;
  .cate-box {
    height: calc(100vh - 94px);
    flex: 1;
    li {
      padding: 0.18rem 0.24rem 0.44rem;
      background-color: #f5f5f5;
      &.active{
        color: red;

      }
    }
  }
  .pro-box {
    height: calc(100vh - 94px);
    flex: 3;
    .prod-list {
      display: flex;
      .prod-img {
        width: 1.5rem;
      }
      p {
        flex: 1;
      }
    }
  }
}
</style>