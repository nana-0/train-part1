<template>
  <div>
    <ul class="store-list-box">
      <li class="store-list" v-for="obj in list" :key="obj.id"
        @click="$router.push({path:'/detail',query:{id:obj.id}})"
        >
        <img class="store-img" :src="obj.img" alt />
        <div class="store-info">
          <h2>{{obj.name}}</h2>
          <div>
              <Star :num="parseFloat(obj.score)"></Star>
              {{obj.num}}
          </div>
          <div>配送时间：{{obj.minute}}</div>
        </div>

      </li>
    </ul>
    <img class="loading" v-show="isShow" src="@/assets/images/loading.gif" alt="">
  </div>
</template>
<script>
import axios from 'axios'
import Star from '@/components/Star'
export default {
    data(){
        return {
            list:[],
            pageNum:0,
            isShow:true,  //判断loading是否显示  true显示|false隐藏
            isFinished:false
        }
    },
    components:{
        Star
    },
    methods:{
      // 获取数据
      getData(){
        axios.get("http://admin.gxxmglzx.com/tender/test/get_store?current="+this.pageNum+"&size=10")
        .then((res)=>{
            // this.list.push(...res.data.data.list);
            this.list = [...this.list,...res.data.data.list]
            this.pageNum++;
            this.isShow = false; //loading隐藏
            // 判断是不是请求完了
            if(this.list.length == res.data.data.total){
              this.isFinished = true
            }
        }).catch((err)=>{
            console.log(err);
        })
      }
    },
    created(){
    // 获取列表的数据
       this.getData()

        // 判断 当滚动条滚动高度 + 可视区的高度  = 整个页面的高度
        // 滚动事件
        window.onscroll = () => {
         
          let scrollTtop = document.documentElement.scrollTop;  // 获滚动条滚动高度
          let clientHeight = document.documentElement.clientHeight;//可视区高度
          let scrollHeight = document.documentElement.scrollHeight;//整个页面的高度

          // console.log(scrollTtop,clientHeight,scrollHeight)
          if((scrollTtop + clientHeight == scrollHeight) && !this.isFinished ){//页面到底了 并且 数据没有加载完
            this.isShow = true; //loading
            this.getData();
          }

        }
    }
};
</script>
<style lang="scss" scoped>
.store-list-box {
    padding: 0.2rem;
  .store-list {
    display: flex;
    .store-img {
      width: 1.52rem;
    }
    .store-info {
      flex: 1;
    }
  }
}
.loading{
  position: fixed;
  left:50%;
  top:50%;
  transform: translate(-50%,-50%);
  width:1.4rem;
  height:1.4rem;
}
</style>