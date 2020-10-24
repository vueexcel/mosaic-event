<template>
  <div class="card d-flex">
    <div v-for="(item, i) in items" :key="i" class="mt-3 container">
      <v-card class="rounded-xl">
        <v-img
          height="120px"
          src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"
        ></v-img>
        <v-card-text class="red--text pb-0">HAPPENING NOW</v-card-text>
        <v-card-subtitle class="pb-0 pt-0">{{
          item.date.toDate()
        }}</v-card-subtitle>

        <v-card-text>
          <h2 class="font-weight-bold">{{ item.title }}</h2>
          <h2 class="font-weight-bold">Presented by: {{ item.host }}</h2>
          <div>{{ item.address }}</div>
        </v-card-text>

        <v-card-actions class="d-flex pb-4 mt-4 showDetails">
          <v-btn width="96%" class="accent black--text" @click="showDetails">
            Explore
          </v-btn>
        </v-card-actions>
      </v-card>
    </div>
  </div>
</template>

<script>
export default {
  name: "card",
  props: {
    items: Array,
  },
  methods: {
    showDetails() {
      this.$router.push({
        path: "/:details",
        query: { ...this.$route.query },
      });
    },
  },
};
</script>

<style scoped>
.card {
  margin-top: 10px;
  min-width: 600px;
  max-width: 700px;
}

.showDetails {
  justify-content: center;
}

.v-btn--contained {
  box-shadow: none;
}
.container {
  max-width: 300px;
}
</style>