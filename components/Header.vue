<template>
  <div>
    <v-app-bar
      class="black rounded-0 px-0 px-md-16 mx-auto"
      max-width="1350px"
      height="100px"
    >
      <button @click="$router.go(-1)">
        <v-icon class="hidden-sm-and-up" size="30">mdi-chevron-left</v-icon>
      </button>
      <button @click="goToHome">
        <span class="text-lowercase white--text text-h5 d-block d-sm-none">
          mosaic-event
        </span>
      </button>
      <v-spacer></v-spacer>
      <div class="d-md-block d-none">
        <span class="text-uppercase px-4 white--text font-weight-bold"
          >Events</span
        >
        <span class="text-uppercase px-4 white--text font-weight-bold"
          >Schedule</span
        >
      </div>
      <button @click="goToHome">
        <img class="mr-1 mt-2" src="~/assets/logo.png" height="70px" />
      </button>
      <div class="d-md-block d-none">
        <span class="text-uppercase px-4 white--text font-weight-bold"
          >Host</span
        >
        <button @click="goToLogin">
          <span class="text-uppercase px-4 white--text font-weight-bold"
            >Login</span
          >
        </button>
      </div>
      <v-spacer></v-spacer>
    </v-app-bar>
  </div>
</template>

<script>
export default {
  props: {
    activeTab: Number,
  },
  methods: {
    goToHome() {
      this.$router.push({
        path: "/",
        query: { ...this.$route.query },
      });
    },
    goToLogin() {
      this.$router.push({
        path: "/login",
        query: { ...this.$route.query },
      });
    },
  },
};
</script>

<style scoped>
button {
  outline: none;
}
</style>