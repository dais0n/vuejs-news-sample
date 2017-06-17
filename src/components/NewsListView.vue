<template>
  <div class= "row newslist">
    <div class="list-group">
      <news v-for="news in newslist" :key="news.id" :news="news"></news>
    </div>
  <infinite-loading :on-infinite="onInfinite" ref="infiniteLoading"></infinite-loading>
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
    };
  },
  created() {
    axios.get('http://localhost:3000/newslist')
    .then((response) => {
      this.newslist = response.data;
    })
    .catch((e) => {
      this.errors.push(e);
    });
  },
  methods: {
    onInfinite() {
      axios.get('http://localhost:3000/newslist')
      .then(() => {
        this.newslist.push({});
        this.$refs.infiniteLoading.$emit('$InfiniteLoading:loaded');
      })
       .catch((e) => {
         this.errors.push(e);
       });
    },
  },
};
</script>
