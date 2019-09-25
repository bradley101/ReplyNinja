@@ -0,0 +1,117 @@
<template>
  <v-app dark>
    <app-header class="app-header" />
    <nuxt />
    <!-- <v-footer app>
      <span>&copy; 2019</span>
    </v-footer>-->
  </v-app>
</template>

<script>
import AppHeader from "~/components/AppHeader";
export default {
  components: {
    AppHeader
  }
};
</script>

<style>
.app-header {
  z-index: 2;
}

.page-enter-active,
.page-leave-active {
  transition: opacity 0.5s;
}
.page-enter,
.page-leave-to {
  opacity: 0;
}
</style>