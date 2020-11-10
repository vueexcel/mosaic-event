<template>
  <div>
    <v-app-bar
      class="black rounded-0 px-0 px-md-16 mx-auto"
      height="100px"
      width="100%"
    >
      <button @click="$router.go(-1)">
        <v-icon class="white--text hidden-sm-and-up" size="30"
          >mdi-chevron-left</v-icon
        >
      </button>
      <a @click="goToProfile">
        <span class="text-uppercase white--text font-weight-bold" v-if="username">
          {{ username }}
        </span>
      </a>
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
          class="mr-sm-0 mr-8 mt-2"
          src="~/assets/logo _transparent.png"
          height="70px"
        />
      </a>
      <div class="d-sm-block d-none mr-8 menuWrapper">
        <a @click="createEvent">
          <span class="text-uppercase px-5 white--text font-weight-bold"
            >Host
          </span></a
        >
        <a @click="logoutprofile">
          <span class="text-uppercase px-5 white--text font-weight-bold"
            >Logout</span
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
      <v-list nav>
        <v-list-item-group v-model="group" class="mt-5">
          <v-list-item v-for="(menu, index) in menus" :key="index">
            <v-list-item-title
              class="accent--text overline text-center"
              @click="routeTo(menu)"
              >{{ menu }}</v-list-item-title
            >
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
export default {
  data() {
    return {
      menus: ["Events", "Schedule", "Host", "Logout"],
      drawer: false,
      group: null,
    };
  },

  computed: {
    ...mapGetters("loginModule", { username: "username" }),
  },
  methods: {
    ...mapActions("loginModule", ["logout"]),
    goToHome() {
      this.$router.push({ path: "/" });
    },
    logoutprofile() {
      this.logout();
      this.goToHome();
    },
    createEvent() {
      this.$router.push({ path: "/eventRegistration" });
    },
    routeTo(data) {
      if (data == "Events") {
        console.log(data);
      } else if (data == "Schedule") {
        console.log(data);
      } else if (data == "Host") {
        this.createEvent();
      } else {
        this.logoutprofile();
      }
    },
    goToProfile() {
      this.$router.push({ path: "/" });
    },
  },
};
</script>

<style scoped>
.menuWrapper {
  width: 210px;
}
</style>