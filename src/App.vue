<template>
    <div id="wrapper">
    <!-- header -->
    <div id="header">
      <h1><a href="/">Daison News</a></h1>
    </div>
    <!-- main view -->
    <router-view
      class="view"
      keep-alive
      transition
      transition-mode="out-in">
    </router-view>
  </div>
</template>
