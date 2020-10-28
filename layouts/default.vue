<template>
  <div>
    <v-app>
      <Header />
      <v-container class="pa-0 screenSize secondary">
        <Nuxt />
      </v-container>
      <Footer />
    </v-app>
  </div>
</template>

<script>
import Header from "../components/Header.vue";
import Footer from "../components/Footer.vue";
export default {
  components: {
    Header,
    Footer,
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
.screenSize {
  display: flex;
  justify-content: center;
  max-width: 1350px;
}
</style>
