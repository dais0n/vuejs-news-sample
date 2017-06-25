<template>
  <div class= "row newslist">
    <div class="list-group">
    <vue-pull-refresh :on-refresh="onRefresh" :config="config">
      <news v-for="news in newslist" :key="news.id" :news="news"></news>
    </vue-pull-refresh>
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
import VuePullRefresh from 'vue-pull-refresh';
import News from './News';

export default {
  components: {
    News,
    InfiniteLoading,
    VuePullRefresh,
  },
  data() {
    return {
      newslist: [],
      page: 1,
      from: 0,
      config: {
        errorLabel: 'error loading',
        startLabel: 'start loading',
        readyLabel: 'ready?',
        loadingLabel: 'now loading',
      },
    };
  },
  created() {
    this.load();
  },
  methods: {
    load() {
      axios.get('http://localhost:3000/newslist?_page=1')
      .then((response) => {
        this.from = JSON.parse(JSON.stringify(response.data[response.data.length - 1])).id;
        this.newslist = response.data;
      })
      .catch((e) => {
        this.errors.push(e);
      });
    },
    onInfinite() {
      this.page = 1;
      const newslistUrl = `http://localhost:3000/newslist?_page=${this.page}`;
      axios.get(newslistUrl)
      .then((response) => {
        if (response.data.length === 0 || this.newslist.length >= 15) {
          this.$refs.infiniteLoading.$emit('$InfiniteLoading:complete');
        }
        this.from = JSON.parse(JSON.stringify(response.data[response.data.length - 1])).id;
        this.newslist = this.newslist.concat(response.data);
        this.$refs.infiniteLoading.$emit('$InfiniteLoading:loaded');
      })
       .catch((e) => {
         console.log(e);
         this.$refs.infiniteLoading.$emit('$InfiniteLoading:complete');
       });
    },
    onRefresh() {
      this.newslist = [];
      this.load();
      this.$refs.infiniteLoading.$emit('$InfiniteLoading:reset');
    },
  },
};
</script>
