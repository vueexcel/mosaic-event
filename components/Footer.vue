<template>
  <div class="black d-flex justify-center py-3" width="100%">
    <div class="container px-sm-16 pl-7 pr-0">
      <v-row no-gutters>
        <v-col cols="12" sm="6" class="pl-sm-0">
          <div>
            <span class="text-uppercase white--text font-weight-bold"
              >Invite your friends or post on social media</span
            >
            <div class="d-flex mt-5">
              <img
                v-for="(logo, index) in logos"
                :key="index"
                :src="require(`../assets/footer/${logo}`)"
                height="30px"
                class="pa-1"
              />
            </div>
          </div>
        </v-col>
        <v-col cols="12" sm="6" class="pl-sm-0 mt-5 mt-sm-0">
          <v-row no-gutters>
            <v-col cols="6">
              <p>
                <a class="white--text">EVENTS</a>
              </p>
              <p>
                <a class="white--text">SCHEDULE</a>
              </p>
              <p>
                <a class="white--text">HOST AN EVENT</a>
              </p>
              <p>
                <a class="white--text">JOIN AN EVENT</a>
              </p>
            </v-col>
            <v-col cols="6">
              <p>
                <a class="white--text">PRICING</a>
              </p>
              <p>
                <a class="white--text">TERMS OF SERVICE</a>
              </p>
              <p>
                <a class="white--text">PRIVACY POLICY</a>
              </p>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      logos: [
        "facebook-logo.png",
        "instagram.png",
        "linkedin-logo.png",
        "twitter-sign.png",
      ],
    };
  },
};
</script>
