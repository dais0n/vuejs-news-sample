<template>
    <div class="newsitem">
      <a :href="'/news/' + news.id" class="list-group-item">
        <h4 class="list-group-item-heading">{{ news.title }}</h4>
        <p class="list-group-item-text">{{ news.contents }}</p>
      </a>
    </div>
</template>

<style>
img.thumbnail {
    float: left;
}
p.list-group-item-text {
    word-wrap: break-word;
}
</style>

<script type="text/javascript">
  export default {
    props: ['news'],
  };
</script>
