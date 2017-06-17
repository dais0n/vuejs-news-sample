<template>
  <div class="row">
    <news-detail :newsdetail="newsdetail"></news-detail>
  </div>
</template>

<script>
import axios from 'axios';
import NewsDetail from './NewsDetail';

export default {
  components: {
    NewsDetail,
  },
  data() {
    return {
      newsdetail: {},
    };
  },
  created() {
    const url = `http://localhost:3000/newslist/${this.$route.params.id}`;
    axios.get(url)
    .then((response) => {
      // JSON responses are automatically parsed.
      this.newsdetail = response.data;
    })
    .catch((e) => {
      this.errors.push(e);
    });
  },
};
</script>
