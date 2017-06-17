<template>
  <div class= "row">
    <ul class="nav nav-tabs">
        <li class="active"><a href="/">最新記事</a></li>
        <li><a href="/">人気記事</a></li>
    </ul>
      <div class="list-group">
        <news v-for="news in newslist" :key="news.id" :news="news"></news>
      </div>
  </div>
</template>

<script type = "text/javascript" >
import axios from 'axios';
import News from './News';

export default {
  components: {
    News,
  },
  data() {
    return {
      newslist: [],
    };
  },
  created() {
    axios.get('http://localhost:3000/newslist')
    .then((response) => {
      // JSON responses are automatically parsed.
      this.newslist = response.data;
    })
    .catch((e) => {
      this.errors.push(e);
    });
  },
};
</script>
