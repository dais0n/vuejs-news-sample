<template>
  <div class= "row newslist">
    <div class="list-group">
      <news v-for="news in newslist" :key="news.id" :news="news"></news>
    </div>
  <infinite-loading :on-infinite="onInfinite" ref="infiniteLoading">
   <span slot="no-more">
     There is no more News
   </span>
  </infinite-loading>
  </div>
</template>

<script type = "text/javascript" >
import axios from 'axios';
import InfiniteLoading from 'vue-infinite-loading';
import News from './News';

export default {
  components: {
    News,
    InfiniteLoading,
  },
  data() {
    return {
      newslist: [],
      page: 1,
    };
  },
  created() {
    axios.get('http://localhost:3000/newslist?_page=1')
    .then((response) => {
      this.newslist = response.data;
    })
    .catch((e) => {
      this.errors.push(e);
    });
  },
  methods: {
    onInfinite() {
      if (this.page < 4) {
        this.page += 1;
        const newslistUrl = `http://localhost:3000/newslist?_page=${this.page}`;
        axios.get(newslistUrl)
        .then((response) => {
          this.newslist = this.newslist.concat(response.data);
          this.$refs.infiniteLoading.$emit('$InfiniteLoading:loaded');
        })
         .catch((e) => {
           this.errors.push(e);
         });
      } else {
        this.$refs.infiniteLoading.$emit('$InfiniteLoading:complete');
      }
    },
  },
};
</script>
