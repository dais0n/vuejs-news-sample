<template>
  <div class="list-group row">
    <news v-for="news in newslist" :key="news.id" :news="news"></news>
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
