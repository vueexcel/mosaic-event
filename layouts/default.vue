<template>
  <div>
    <v-app>
      <Header />
      <v-container class="pa-0 screenSize">
        <Nuxt />
      </v-container>
    </v-app>
  </div>
</template>

<script>
import Header from "../components/Header.vue";
export default {
  components: {
    Header,
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
