<template>
  <div class="container">
    <!-- header -->
    <nav-header></nav-header>
    <!-- main view -->
    <router-view
      class="view"
      keep-alive
      transition
      transition-mode="out-in">
    </router-view>
  </div>
</template>

<script>
import NavHeader from './components/NavHeader';

export default {
  components: {
    NavHeader,
  },
};
</script>
