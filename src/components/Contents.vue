<template>
  <div class="item-view" v-show="item">
    <h1><a href="/">Contents</a></h1>
    <item :item="item"></item>
    <p class="itemtext" v-if="hasText" v-html="item.text"></p>
  </div>
</template>

<script>
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
      item: {
        id: 1,
        title: 'News A',
        contents: 'Contents A',
      },
    };
  },
};

</script>
