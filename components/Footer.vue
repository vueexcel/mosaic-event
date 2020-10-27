<template>
  <div class="black wrapper" width="100%">
    <div class="container px-sm-16 pl-7 px-0">
      <v-row>
        <v-col cols="12" sm="6" class="pl-sm-0">
          <div>
            <span class="text-uppercase white--text font-weight-bold"
              >Invite your friends or post on social media</span
            >
            <div class="d-flex mt-5">
              <img
                src="~/assets/footer/facebook-logo.png"
                height="30px"
                class="pa-1"
              />
              <img
                src="~/assets/footer/instagram.png"
                height="30px"
                class="pa-1"
              />
              <img
                src="~/assets/footer/linkedin-logo.png"
                height="30px"
                class="pa-1"
              />
              <img
                src="~/assets/footer/twitter-sign.png"
                height="30px"
                class="pa-1"
              />
            </div>
          </div>
        </v-col>
        <v-col cols="12" sm="6" class="pl-sm-0">
          <v-row no-gutters>
            <v-col cols="12" sm="6">
              <p class="white--text">EVENTS</p>
              <p class="white--text">SCHEDULE</p>
              <p class="white--text">HOST AN EVENT</p>
              <p class="white--text">JOIN AN EVENT</p>
            </v-col>
            <v-col cols="12" sm="6">
              <p class="white--text">PRICING</p>
              <p class="white--text">TERMS OF SERVICE</p>
              <p class="white--text">PRIVACY POLICY</p>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
button {
  outline: none;
}
.wrapper {
  display: flex;
  justify-content: center;
}
</style>