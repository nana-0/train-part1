<template>
  <div class="order-container">
    <div class="cate-box">
      <ul>
        <li
          v-for="(obj, index) in nav"
          :key="obj.id"
          @click="select(index)"
          :class="{ active: index == currentIndex,'cate-list':true}"
        >
          {{ obj.name }}
        </li>
      </ul>
    </div>

    <div class="pro-box">
      <div>
        <div v-for="(obj, typeIndex) in goods" :key="typeIndex" class="pro-cate-box">
          <p>{{ obj.name }}</p>
          <ul>
            <li class="prod-list" v-for="(prod,index) in obj.content" :key="prod.id">
              <img class="prod-img" :src="prod.img" alt="" />
              <div>
                <p>{{ prod.name }}</p>
                <p>{{ prod.price }}</p>
              </div>
              <div class="add-cart">
                <span class="iconfont icon-jiahao-copy" @click="$store.commit('add',{typeIndex,index})"></span>
                <span class="num">{{prod.count}}</span>
                <span class="iconfont icon-jianhao" v-if="prod.count > 0"></span>
              </div>
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
      currentIndex: 0,
      scrollY:0,
      pos: []
    };
  },
  methods: {
    select(index) {
      let ProCateList = document.querySelectorAll(".pro-cate-box");
      this.proScroll.scrollToElement(ProCateList[index], 300);
      this.currentIndex = index;
    },
    getPos(){
      let prodCateList = document.getElementsByClassName("pro-cate-box");
      console.log(prodCateList)
      let H = 0;
      for(let i = 0; i < prodCateList.length; i++){
        if(i == 0) {
          this.pos.push(0);
        }else{
          console.log(prodCateList[i - 1])
          H += prodCateList[i - 1].offsetHeight;
          this.pos.push(H);
        }
      }
      console.log(this.pos);
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
        this.$store.commit('save',this.goods);

        this.$nextTick(() => {
          this.cateScroll = new BetterScroll(".cate-box", {
            click: false,
            bounce: false,
          });
          this.proScroll = new BetterScroll(".pro-box", {
            click: false,
            bounce: false,
            probeType:3
          });
          this.proScroll.on("scroll", position => {
            //console.log(position.x,position.y)
            this.scrollY = Math.abs(position.y)
          });
          this.getPos();
        });
      });
  },
  watch:{
    scrollY(val) {
      let cateList = document.querySelectorAll('.cate-list');
      for(let index = 0; index < this.pos.length; index++) {
        let pos1 = this.pos[index];
        let pos2 = this.pos[index+1];
        if(val >= pos1 &&val < pos2){
          this.currentIndex = index;
          this.cateScroll.scrollToElement(cateList[index],300)
          break;
        }
      }
    }
  }
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
      &.active {
        color: red;
      }
    }
  }
  .pro-box {
    height: calc(100vh - 94px);
    flex: 3;
    .prod-list {
      margin-bottom: 0.1rem;
      position: relative;
      display: flex;
      .prod-img {
        width: 1.5rem;
      }
      p {
        flex: 1;
      }
      .add-cart{
        margin-bottom: 0;
        position: absolute;
        bottom: 0;
        right: 0.2rem;
        .icon-jiahao-copy{
          color:#ffc134;
          vertical-align: center;
        }
        .num{
          margin: 0 0.1rem;
          vertical-align: center;
        }
        .icon-jianhao{
          color:#e2e3e5;
          vertical-align: center;
        }
      }
    }
  }
}
</style>