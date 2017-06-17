<template>
    <div class="newsdetail">
        <h4>{{ newsdetail.title }}</h4>
        <p>{{ newsdetail.contents }}</p>
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
  props: ['newsdetail'],
};

</script>
