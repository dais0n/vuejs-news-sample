<template>
  <div class='ui centered card'>
    <div class="content">
      <div class='header'>
          <a :href="'/item/' + item.id">{{ item.title }}</a>
      </div>
      <div class='meta'>
          {{ item.contents }}
      </div>
    </div>
  </div>
</template>

<script type="text/javascript">
  export default {
    props: ['item'],
  };
</script>
