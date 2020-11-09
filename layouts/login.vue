<template>
  <div>
    <v-app class="primary">
      <v-container class="pa-0 screenSize secondary">
        <div class="loaderWrapper" v-if="loader">
          <Loader />
        </div>
        <Nuxt v-else />
      </v-container>
    </v-app>
  </div>
</template>

<script>
import Loader from "../components/Loader.vue";
export default {
  components: {
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
.theme--light.v-application {
  background-color: #f4f4f4;
}
</style>
