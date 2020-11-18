<template>
  <div class="comment-wrapper">
    <div>
      <comment-header :list="list"></comment-header>
      <comment-list :list="list" @update="fn"></comment-list>
    </div>
  </div>
</template>

<script>
import BetterScroll from "better-scroll";
import axios from "axios";
import CommentHeader from "./CommentHeader";
import CommentList from "./CommentList";
export default {
  data() {
    return {
      id: this.$route.query.id,
      list: {},
    };
  },
  components: {
    CommentHeader,
    CommentList,
  },
  created() {
    this.getData(1);
  },
  methods: {
    fn(id) {
      this.getData(id);
    },
    getData(typeId) {
      axios
        .get(
          `http://admin.gxxmglzx.com/tender/test/get_info?id=${this.id}&type=${typeId}`
        )
        .then((res) => {
          console.log(res.data.data);
          this.list = res.data.data;
          this.$nextTick(() => {
            this.comScroll = new BetterScroll(".comment-wrapper", {
              bounce: false,
              click: false,
            });
          });
        });
    },
  },
};
</script>

<style lang="scss" scoped>
.comment-wrapper {
  height: calc(100vh - 44px);
}
</style>