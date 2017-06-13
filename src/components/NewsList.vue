<template>
  <div>
    <item v-for="item in news" :item="item"></item>
  </div>
</template>

<script type = "text/javascript" >
import Item from './Item';

export default {
  components: {
    Item,
  },
  data() {
    return {
      news: [{
        id: 1,
        title: 'News A',
        contents: 'Contents A',
      }, {
        id: 2,
        title: 'News B',
        contents: 'Project B',
      }, {
        id: 3,
        title: 'News C',
        contents: 'Project C',
      }, {
        id: 4,
        title: 'News D',
        contents: 'Project D',
      }],
    };
  },
};
</script>

<style scoped>
p.tasks {
  text-align: center;
}
</style>
