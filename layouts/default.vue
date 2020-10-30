<template>
  <div>
    <v-app class="primary">
      <Header />
      <v-container class="pa-0 screenSize secondary">
        <div class="loaderWrapper" v-if="loader || (loading && !eventDetails.date)">
          <Loader />
        </div>
        <Nuxt v-else />
      </v-container>
      <Footer />
    </v-app>
  </div>
</template>

<script>
import Header from "../components/Header.vue";
import Footer from "../components/Footer.vue";
import Loader from "../components/Loader.vue";
import { mapGetters } from "vuex";
export default {
  components: {
    Header,
    Footer,
    Loader,
  },
  data() {
    return {
      loader: true,
    };
  },
  mounted() {
    this.loader = false;
  },
  computed: {
    ...mapGetters("eventdetails", ["eventDetails", "loading"]),
  },
};
</script>

<style>
*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
}
.loaderWrapper {
  display: flex;
  align-items: center;
}
.screenSize {
  display: flex;
  justify-content: center;
  max-width: 1350px;
  min-height: 54vh;
}
.footer {
  position: fixed;
  bottom: 0px;
  width: 100%;
}
.theme--light.v-application {
  background-color: #f4f4f4;
}
</style>
