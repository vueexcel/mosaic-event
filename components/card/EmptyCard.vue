<template>
  <v-card
    min-height="376px"
    min-width="276px"
    elevation="0"
    class="secondary d-flex justify-center"
  >
    <v-card-actions class="pb-4">
      <v-btn width="96%" outlined color="primary" @click="showDetails">
        SHOW MORE EVENTS
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  methods: {
    showDetails() {
      this.$router.push({ path: "/:details" });
    },
  },
};
</script>