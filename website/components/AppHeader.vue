<template>
  <v-toolbar
    :extended="extended"
    :prominent="prominent"
    :dense="dense"
    :collapse="collapse"
    :flat="flat"
    :src="bg ? 'https://cdn.vuetifyjs.com/images/backgrounds/vbanner.jpg' : undefined"
    :extension-height="extensionHeight"
  >
    <template v-if="extendedSlot" #extension>
      <v-toolbar-items>
        <v-btn text>Link 1</v-btn>
        <v-btn text>Link 2</v-btn>
        <v-btn text>Link 3</v-btn>
      </v-toolbar-items>
    </template>

    <img src="~assets/reply-ninja-logo.svg" alt="reply ninja logo" />

    <div class="flex-grow-1"></div>

    <v-toolbar-items>
      <v-btn text>Link 1</v-btn>
      <v-btn text>Link 2</v-btn>
      <v-btn text>Link 3</v-btn>
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
    extensionHeight: 48
  })
};
</script>