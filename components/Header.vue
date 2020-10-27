<template>
  <div>
    <v-app-bar
      class="black rounded-0 px-0 px-md-16 mx-auto"
      height="100px"
      width="100%"
    >
      <!-- <button @click="$router.go(-1)">
        <v-icon class="hidden-sm-and-up white--text" size="30">mdi-chevron-left</v-icon>
      </button> -->
      <!-- <button @click="goToHome">
        <span class="text-lowercase white--text text-h5 d-block d-sm-none">
          mosaic-event
        </span>
      </button> -->
      <v-spacer></v-spacer>
      <div class="d-sm-block d-none">
        <span class="text-uppercase px-4 white--text font-weight-bold"
          >Events</span
        >
        <span class="text-uppercase px-4 white--text font-weight-bold"
          >Schedule</span
        >
      </div>
      <button @click="goToHome">
        <img class="ml-sm-0 ml-5 mt-2" src="~/assets/logo.png" height="70px" />
      </button>
      <div class="d-sm-block d-none">
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
      <v-app-bar-nav-icon
        class="accent--text d-sm-none"
        @click.stop="drawer = !drawer"
      >
      </v-app-bar-nav-icon>
    </v-app-bar>
    <v-navigation-drawer
      v-model="drawer"
      absolute
      right
      temporary
      class="primary"
    >
      <v-list nav dense>
        <v-list-item-group v-model="group">
          <v-list-item>
            <v-list-item-title class="accent--text text-subtitle-2 text-center"
              >Events</v-list-item-title
            >
          </v-list-item>

          <v-list-item>
            <v-list-item-title class="accent--text text-subtitle-2 text-center"
              >Schedule</v-list-item-title
            >
          </v-list-item>

          <v-list-item>
            <v-list-item-title class="accent--text text-subtitle-2 text-center"
              >Host</v-list-item-title
            >
          </v-list-item>

          <v-list-item>
            <v-list-item-title class="accent--text text-subtitle-2 text-center"
              >Login/Logout</v-list-item-title
            >
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>

<script>
export default {
  data() {
    return {
      drawer: false,
      group: null,
    };
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