<template>
  <div>
    <v-app-bar
      class="black rounded-0 px-0 px-md-16 mx-auto"
      height="100px"
      width="100%"
    >
      <v-spacer></v-spacer>
      <div class="d-sm-block d-none menuWrapper">
        <span class="text-uppercase px-4 white--text font-weight-bold"
          >Events</span
        >
        <span class="text-uppercase px-4 white--text font-weight-bold"
          >Schedule</span
        >
      </div>
      <a @click="goToHome">
        <img
          class="ml-sm-0 ml-5 mt-2"
          src="~/assets/logo _transparent.png"
          height="70px"
        />
      </a>
      <div class="d-sm-block d-none menuWrapper">
        <span class="text-uppercase px-5 white--text font-weight-bold"
          >Host</span
        >
        <a @click="goToLogin">
          <span class="text-uppercase px-5 white--text font-weight-bold"
            >Login</span
          >
        </a>
      </div>
      <v-spacer></v-spacer>
      <v-app-bar-nav-icon
        class="accent--text d-sm-none"
        @click.stop="drawer = !drawer"
      >
      </v-app-bar-nav-icon>
    </v-app-bar>
    <v-navigation-drawer v-model="drawer" fixed right temporary class="primary">
      <v-list nav dense>
        <v-list-item-group v-model="group">
          <v-list-item v-for="(menu, index) in menus" :key="index">
            <v-list-item-title
              class="accent--text text-subtitle-2 text-center"
              >{{ menu }}</v-list-item-title
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
      menus: ["Events", "Schedule", "Host", "Login"],
      drawer: false,
      group: null,
    };
  },
  methods: {
    goToHome() {
      this.$router.push({ path: "/" });
    },
    goToLogin() {
      this.$router.push({ path: "/login" });
    },
  },
};
</script>

<style scoped>
.menuWrapper {
  width: 210px;
}
</style>