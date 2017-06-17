<template>
    <div class="news" >
      <a :href="'/news/' + news.id" class="list-group-item">
        <img src="" alt="サンプル" width="65" height="65" class="thumbnail">
        <h4 class="newstitle">{{ news.title }}</h4>
        <div style="clear:left;"></div>
      </a>
    </div>
</template>

<style>
img.thumbnail {
    float: left;
    margin-right: 10px;
}
h4.newstitle {
    margin-top: 20px;
}
</style>

<script type="text/javascript">
  export default {
    props: ['news'],
  };
</script>
