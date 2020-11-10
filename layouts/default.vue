<template>
  <div>
    <v-app class="primary">
      <Header v-if="!username" />
      <LoginHeader v-if="username" />
      <v-container class="pa-0 screenSize secondary">
        <div
          class="loaderWrapper"
          v-if="loader || (loading && !eventDetails.date)"
        >
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
import LoginHeader from "../components/LoginHeader.vue";
import Footer from "../components/Footer.vue";
import Loader from "../components/Loader.vue";
import { mapGetters, mapActions } from "vuex";
export default {
  components: {
    Header,
    LoginHeader,
    Footer,
    Loader,
  },
  data() {
    return {
      loader: true,
    };
  },
  async mounted() {
    await this.checkUserStatus();
    this.loader = false;
  },
  computed: {
    ...mapGetters({
      username: "loginModule/username",
      eventDetails: "eventDetails/eventDetails",
      loading: "eventDetails/loading",
    }),
  },
  methods: {
    ...mapActions("loginModule", ["checkUserStatus"]),
  },
};
</script>

<style scoped>
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
  align-self: center;
  max-width: 1350px;
  min-height: 54vh;
}
.theme--light.v-application {
  background-color: #f4f4f4;
}
</style>
