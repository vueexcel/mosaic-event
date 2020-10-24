<template>
  <div>
    <div>
      <v-row no-gutters>
        <v-col cols="12" class="text-center">
          <span class="red--text overline pa-3">
            Connect....anytime, anywhere !
          </span>
        </v-col>
        <v-col v-for="n in 9" :key="n" class="d-flex child-flex" cols="4">
          <v-img
            :src="`https://picsum.photos/500/300?image=${n * 5 + 10}`"
            :lazy-src="`https://picsum.photos/10/6?image=${n * 5 + 10}`"
            aspect-ratio="1"
            class="grey lighten-2"
          >
            <template v-slot:placeholder>
              <v-row class="fill-height ma-0" align="center" justify="center">
                <v-progress-circular
                  indeterminate
                  color="grey lighten-5"
                ></v-progress-circular>
              </v-row>
            </template>
          </v-img>
        </v-col>
      </v-row>
    </div>
    <div class="d-flex my-4">
      <v-divider class="mt-3 warning"></v-divider>
      <span class="px-3 orange--text text-uppercase">Live and Upcoming</span>
      <v-divider class="mt-3 warning"></v-divider>
    </div>
    <card :items="eventsArray" />
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import Card from "../components/card.vue";

export default {
  name: "index",
  layout: "default",
  components: {
    Card,
  },
  data() {
    return {
      loading: false,
    };
  },
  mounted() {
    this.fetchEvents();
  },
  methods: {
    ...mapActions("eventModule", ["fetchEvents"]),
  },
  computed: {
    ...mapGetters("eventModule", ["eventsArray"]),
  },
};
</script>

<style scoped>
.col {
  padding: 0px;
}
</style>
