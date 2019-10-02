<template>
  <v-toolbar color="rgba(66, 29, 122, .5)">
    <nuxt-link to="/">
      <img class="header-logo" src="~/assets/reply-ninja-logo.svg" alt="reply ninja logo" />
    </nuxt-link>
    <v-spacer></v-spacer>
    <v-toolbar-items>
      <v-btn text>Dev</v-btn>
      <v-btn text>Sign Up</v-btn>
    </v-toolbar-items>
  </v-toolbar>
</template>

<script>
export default {
  data: () => ({
    extended: false,
    extendedSlot: false,
    prominent: false,
    dense: false,
    collapse: false,
    flat: false,
    extensionHeight: 60
  })
};
</script>