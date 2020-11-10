<template>
  <v-slide-group
    v-model="model"
    class="pa-md-3 pa-sm-2 pa-0 slideGroup"
    active-class="secondary"
    show-arrows
  >
    <v-slide-item v-for="(item, i) in items" :key="i">
      <div class="container mt-4">
        <main-card v-if="i < 7" :item="item" />
        <empty-card v-else />
      </div>
    </v-slide-item>
  </v-slide-group>
</template>

<script>
import EmptyCard from "./EmptyCard";
import MainCard from "./MainCard";
export default {
  components: {
    MainCard,
    EmptyCard,
  },
  data() {
    return {
      model: null,
    };
  },
  props: {
    items: Array,
    default: () => [],
  },
};
</script>

<style scoped>
.container {
  max-width: 300px;
}
@media screen and (max-width: 375px) {
  .slideGroup >>> .v-slide-group__next,
  >>> .v-slide-group__prev {
    min-width: 30px;
  }
}
</style>