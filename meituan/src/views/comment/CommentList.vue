<template>
    <div class="body-box">
        <div class="bubble">
            <div class="list">全部  30</div>
            <div class="list">好评  28</div>
            <div class="list">差评  2</div>
            <div class="list">菜品好  10</div>
            <div class="list">分量足  3</div>
            <div class="list">包装好  3</div>
            <div class="list">味儿好  3</div>
        </div>
        <div class="evaluation">
            <ul class="list-box">
      <li class="list">
        <img class="list-img" src="http://admin.gxxmglzx.com/tender/upload/test/head1.jpg" alt />
        <div class="list-info">
          <div class="name">薇薇2v</div>
          <div class="desc">包装很完美诶，虽然送的晚了一点，但是没有凉，串都很好吃，活动力度大，以后点外卖肯定首选你家哦～～～好吃！</div>
        </div>
      </li>
      <li class="list">
        <img class="list-img" src="http://admin.gxxmglzx.com/tender/upload/test/head1.jpg" alt />
        <div class="list-info">
          <div class="name">薇薇2v</div>
          <div class="desc">包装很完美诶，虽然送的晚了一点，但是没有凉，串都很好吃，活动力度大，以后点外卖肯定首选你家哦～～～好吃！</div>
        </div>
      </li>
    </ul>
        </div>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style lang="scss" scoped>
.bubble{
    display: flex; 
    flex-wrap: wrap;
    margin-top: 0.1rem;
    margin-left: 0.1rem;
    .list{
        margin-bottom:0.1rem;
        border: 1px solid #666;
        border-radius: 3rem;
        font-size: 14px;
        color: #666;
        margin-right: 5px;
        padding: 0 0.1rem;
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
    }
  }

</style>