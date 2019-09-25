<template>
  <v-toolbar
    :extended="extended"
    :prominent="prominent"
    :dense="dense"
    :collapse="collapse"
    :flat="flat"
    color="rgba(66, 29, 122, .5)"
    :src="bg ? 'https://cdn.vuetifyjs.com/images/backgrounds/vbanner.jpg' : undefined"
    :extension-height="extensionHeight"
  >
    <template v-if="extendedSlot" #extension>
      <v-toolbar-items>
        <v-btn text>Dev</v-btn>
        <v-btn text>Sign Up</v-btn>
      </v-toolbar-items>
    </template>

    <img class="header-logo" src="~assets/reply-ninja-logo.svg" alt="reply ninja logo" />

    <div class="flex-grow-1"></div>

    <v-toolbar-items>
      <v-btn text>Developer</v-btn>
      <v-btn text>Sign Up</v-btn>
      <v-btn text>Sign In</v-btn>
    </v-toolbar-items>

    <template v-if="$vuetify.breakpoint.smAndUp">
      <v-btn icon>
        <v-icon>mdi-export-variant</v-icon>
      </v-btn>
      <v-btn icon>
        <v-icon>mdi-delete-circle</v-icon>
      </v-btn>
      <v-btn icon>
        <v-icon>mdi-plus-circle</v-icon>
      </v-btn>
    </template>
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
    bg: false,
    extensionHeight: 60
  })
};
</script>