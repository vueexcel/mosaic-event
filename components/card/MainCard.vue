<template>
  <v-card>
    <v-img
      height="120px"
      src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"
    ></v-img>
    <v-card-text class="red--text pb-0">HAPPENING NOW</v-card-text>
    <v-card-subtitle class="pt-0">{{ item.date.toDate() }}</v-card-subtitle>

    <v-card-text>
      <v-card-title class="pa-0">{{ item.title }}</v-card-title>
      <v-card-title class="pa-0"> By: {{ item.host }} </v-card-title>
      <div class="hostAddress">{{ item.address }}</div>
    </v-card-text>

    <v-card-actions class="d-flex pb-4 justify-center">
      <v-btn width="96%" outlined color="primary" @click="explore(item.id)">
        Explore
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  props: {
    item: {
      type: Object,
      default: () => {},
    },
  },
  methods: {
    explore(value) {
      this.$router.push({
        // name: "details",
        path: `/${value}`,
        query: { ...this.$route.query },
        params: { value },
      });
    },
  },
};
</script>

<style scoped>
.hostAddress {
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
}
</style>