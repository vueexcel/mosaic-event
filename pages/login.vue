<template>
  <div class="login text-center my-12 secondary">
    <v-snackbar v-model="snackbar" :timeout="timeout" :top="top" :color="color">
      {{ text }}
      <template v-slot:action="{ attrs }">
        <v-btn dark text v-bind="attrs" @click="snackbar = false">Close</v-btn>
      </template>
    </v-snackbar>
    <a @click="goToHome">
      <img src="~/assets/logo _transparent.png" height="100px" />
      <h1 class="primary--text">Mosaic-Event</h1>
    </a>
    <div class="container">
      <v-row justify="center" no-gutters>
        <v-col cols="12" sm="8">
          <v-form ref="form" class="mt-5 text-left" lazy-validation>
            <p class="mt-5 mb-2">Email</p>
            <v-text-field
              class="pa-0"
              type="email"
              v-model="form.email"
              placeholder="Email"
              :rules="emailRules"
              outlined
              required
            ></v-text-field>
            <p class="mb-2">Password</p>
            <v-text-field
              class="pa-0"
              type="password"
              v-model="form.password"
              placeholder="Password"
              :rules="passwordRules"
              outlined
              required
            />
            <a class="float-left" @click="handleForgotPassword"
              >Forgot password?</a
            >
            <v-btn
              :loading="this.isLoading"
              class="accent text-center rounded-lg float-right mt-3 mt-sm-0 px-6 px-lg-10"
              @click.prevent="handleemaillogin"
            >
              <b>SIGN IN</b>
            </v-btn>
          </v-form>
        </v-col>
      </v-row>
    </div>
    <v-btn
      class="accent signUpbtn text-center rounded-lg mt-5 mt-sm-10 py-6"
      to="/registration"
    >
      <b>SIGN UP</b>
    </v-btn>
  </div>
</template>

<script>
import { mapState, mapActions, mapMutations } from "vuex";
export default {
  name: "login",
  layout: "login",
  data() {
    return {
      snackbar: false,
      top: "top",
      color: "error",
      timeout: 4000,
      form: {
        email: "",
        password: "",
      },
      isLoading: false,
      passwordRules: [
        (v) => !!v || "Password is required",
        (v) => (v && v.length > 7) || "Password too short to match",
      ],
      emailRules: [
        (v) => !!v || "E-mail is required",
        (v) => /.+@.+\..+/.test(v) || "E-mail must be valid",
      ],
    };
  },
  computed: {
    ...mapState("errorMessage", {
      text: (state) => state.handleMessage,
    }),
  },
  methods: {
    ...mapActions("loginModule", ["handlelogin"]),
    ...mapMutations("errorMessage", ["HANDLE_MESSAGE"]),
    goToHome() {
      this.$router.push({
        path: "/",
      });
    },
    async handleemaillogin() {
      const res = this.$refs.form.validate();
      if (res) {
        this.isLoading = true;
        const response = await this.handlelogin({
          email: this.form.email,
          password: this.form.password,
        });
        if (response === true) {
          this.resetForm();
          this.isLoading = false;
          this.goToHome();
        } else {
          this.isLoading = false;
          this.HANDLE_MESSAGE(response);
          return (this.snackbar = true);
        }
      }
    },
    handleForgotPassword() {
      console.log("Forgot Password");
    },
    resetForm() {
      this.form = {
        email: "",
        password: "",
      };
    },
  },
};
</script>

<style scoped>
button {
  outline: none;
}
.login {
  min-width: 60vw;
  max-width: 1050px;
}
.signUpbtn {
  width: 65%;
}
@media screen and (max-width: 540px) {
  .container {
    width: 100vw;
  }
  .signUpbtn {
    width: 95%;
  }
}
</style>