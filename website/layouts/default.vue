<template>
  <v-app dark color="bg-white">
    <app-header class="z-2" />
    <v-content>
      <nuxt />
    </v-content>
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
.z-2 {
  z-index: 2;
}
</style>