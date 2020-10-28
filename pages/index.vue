<template>
  <div class="index container">
    <v-row no-gutters>
      <v-col
        v-for="n in 9"
        :key="n"
        class="d-md-flex child-flex d-none"
        cols="4"
      >
        <v-carousel
          cycle
          :interval="4000"
          hide-delimiters
          :show-arrows="false"
          height="150px"
        >
          <v-carousel-item v-for="(slide, i) in slides" :key="i">
            <v-img
              :src="
                require(`../assets/slider/${Math.floor(
                  Math.random() * 10
                )}.jpg`)
              "
              :lazy-src="require(`../assets/slider/${n}.jpg`)"
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
          </v-carousel-item>
        </v-carousel>
      </v-col>
      <v-col cols="12" class="d-flex justify-center d-md-none">
        <v-carousel
          cycle
          :interval="3000"
          height="30vh"
          hide-delimiters
          :show-arrows="false"
        >
          <v-carousel-item v-for="(slide, i) in slides" :key="i">
            <v-img
              :src="
                require(`../assets/slider/${Math.floor(
                  Math.random() * 10
                )}.jpg`)
              "
              :lazy-src="require(`../assets/slider/${slide}.jpg`)"
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
          </v-carousel-item>
        </v-carousel>
      </v-col>
    </v-row>
    <div class="d-flex mt-10">
      <v-divider class="mt-3 warning"></v-divider>
      <span class="px-4 orange--text text-uppercase font-weight-bold"
        >Live and Upcoming</span
      >
      <v-divider class="mt-3 warning"></v-divider>
    </div>
    <div>
      <slider-card :items="eventsArray" />
    </div>
    <div class="d-flex my-6">
      <v-divider class="mt-3 blue"></v-divider>
      <span class="px-4 blue--text text-uppercase">Browse Online Events</span>
      <v-divider class="mt-3 blue"></v-divider>
    </div>
    <div class="container">
      <v-row>
        <v-col
          class="browserWrapper"
          cols="12"
          v-for="n in 8"
          :key="n"
          sm="6"
          md="6"
        >
          <div class="text-center">
            <div class="ImgWrapper">
              <img class="browserImg fluid" src="../assets/mountain.jpg" />
            </div>
            <a class="accent--text">Event Name</a>
          </div>
        </v-col>
      </v-row>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import SliderCard from "../components/card/index.vue";

export default {
  name: "index",
  layout: "default",
  components: {
    SliderCard,
  },
  data() {
    return {
      loading: false,
      slides: ["1", "2", "3", "4", "5", "6", "7", "8", "9"],
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
.index {
  padding-top: 30px;
  max-width: 1050px;
}
.browserImg {
  width: 100%;
  height: 15vw;
}
.browserWrapper:nth-child(odd) div .ImgWrapper {
  text-align: left;
  padding-right: 10px;
}
.browserWrapper:nth-child(even) div .ImgWrapper {
  text-align: right;
  padding-left: 10px;
}

h2 {
  font-weight: normal;
}
@media screen and (max-width: 600px) {
  .browserWrapper:nth-child(odd) div .ImgWrapper {
    text-align: center;
    padding-right: 0px;
  }
  .browserWrapper:nth-child(even) div .ImgWrapper {
    text-align: center;
    padding-left: 0px;
  }
  .browserImg {
    width: 100%;
    height: 50vw;
  }
}
</style>
