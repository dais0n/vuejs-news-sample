<template>
    <div class="newsitem">
      <a :href="'/item/' + item.id" class="list-group-item">
        <h4 class="list-group-item-heading">{{ item.title }}</h4>
        <p class="list-group-item-text">{{ item.contents }}</p>
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
    props: ['item'],
  };
</script>
