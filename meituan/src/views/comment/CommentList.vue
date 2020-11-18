<template>
  <div class="body-box">
    <div class="bubble">
      <div :class="{active:obj.id == typeId}" v-for="obj in list.label" :key="obj.id" @click="change(obj.id)" class="list"> {{ obj.name }} {{ obj.count }} </div>
    </div>
    <div class="evaluation">
      <ul class="list-box">
        <li class="list" v-for="obj in list.rate" :key="obj.id">
          <img class="list-img" :src="obj.portrait" alt/>
          <div class="list-info">
            <div class="name">{{obj.name}}</div>
            <div class="desc">{{obj.content}}</div>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  props: ["list"],
  data(){
    return{
      typeId:1
    }
  },
  created() {
    console.log(this.list);
  },
  methods: {
    change(id) {
      this.$emit('update', id);
      this.typeId=id;
    }
  },
};
</script>

<style lang="scss" scoped>
.bubble {
  display: flex;
  flex-wrap: wrap;
  margin-top: 0.1rem;
  margin-left: 0.1rem;
  .list {
    margin-bottom: 0.1rem;
    border: 1px solid #666;
    border-radius: 3rem;
    font-size: 14px;
    color: #666;
    margin-right: 5px;
    padding: 0 0.1rem;
    &.active{
        background: #fffbf1;
        border:1px solid #ffb000;
      }
  }
}
.list-box {
  .list {
    display: flex;
    .list-img {
      width: 0.8rem;
      height: 0.8rem;
      border-radius: 50%;
    }
    .list-info{
      flex:1;
    }
  }
}
</style>