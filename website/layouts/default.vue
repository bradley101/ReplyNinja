@@ -0,0 +1,117 @@
<template>
  <v-app dark>
    <app-header />

    <v-content>
      <v-container>
        <nuxt />
      </v-container>
    </v-content>

    <v-footer app>
      <span>&copy; 2019</span>
    </v-footer>
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