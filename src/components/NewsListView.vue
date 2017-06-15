<template>
  <div class="list-group row">
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
        contents: 'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
      }, {
        id: 2,
        title: 'News B',
        contents: 'bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb',
      }, {
        id: 3,
        title: 'News C',
        contents: 'cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc',
      }, {
        id: 4,
        title: 'News D',
        contents: 'dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd',
      }],
    };
  },
};
</script>
