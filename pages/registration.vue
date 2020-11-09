<template>
  <div class="mb-4 pa-3 secondary text-center register">
    <v-snackbar v-model="snackbar" :timeout="timeout" :top="top" :color="color">
      {{ text }}
      <template v-slot:action="{ attrs }">
        <v-btn dark text v-bind="attrs" @click="snackbar = false">Close</v-btn>
      </template>
    </v-snackbar>
    <div class="text-center">
      <a @click="goToHome">
        <h1 class="primary--text">Sign Up for free</h1>
      </a>
      <p
        v-if="!SignUpform"
        class="pb-md-5 text-h6 font-weight-regular"
        style="max-width: 650px; display: inline-flex"
      >
        You are almost set. Upload a profile image and click on complete.
      </p>
    </div>
    <div class="container">
      <v-row no-gutters class="mt-md-4 justify-center">
        <v-col cols="12" sm="8">
          <v-form
            ref="form"
            class="text-left"
            v-if="SignUpform"
            lazy-validation
          >
            <p class="mb-sm-2 mb-0">Username</p>
            <v-text-field
              type="text"
              class="rounded mt-1"
              v-model="form.username"
              placeholder="Username"
              :rules="nameRules"
              outlined
              required
            ></v-text-field>
            <p class="mb-sm-2 mb-0">Email</p>
            <v-text-field
              type="email"
              class="rounded mt-1"
              v-model="form.email"
              placeholder="Email"
              @keydown.space.prevent
              :rules="emailRules"
              outlined
              required
            ></v-text-field>
            <p class="mb-sm-2 mb-0">Password</p>
            <v-text-field
              type="password"
              class="rounded mt-1"
              v-model="form.password"
              placeholder="Password"
              @keydown.space.prevent
              :rules="passwordRules"
              outlined
              required
            ></v-text-field>
            <div id="continueButton">
              <v-btn
                class="accent text-center rounded-lg pl-8 pr-8 pa-4 mt-3"
                @click.prevent="toggleform"
                :disabled="!isComplete"
              >
                <b>CONTINUE</b>
              </v-btn>
            </div>
          </v-form>
          <div class="d-flex flex-column mt-md-5" v-if="!SignUpform">
            <div id="preview" class="mb-sm-9">
              <img v-if="this.url" :src="this.url" />
            </div>
            <input
              class="fileInput d-none"
              ref="uploadImg"
              type="file"
              accept="image/*"
              @change="onChange"
            />
            <v-btn
              @click="$refs.uploadImg.click()"
              class="accent text-center font-weight-black font-weight-Medium pa-4 rounded-xl mb-5"
              >UPLOAD IMAGE</v-btn
            >
            <v-btn
              :loading="this.isLoading"
              @click="handlregistration"
              class="accent text-center font-weight-black font-weight-Medium pa-6 rounded-lg mt-5"
              >Complete</v-btn
            >
          </div>
        </v-col>
      </v-row>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState, mapMutations } from "vuex";
export default {
  layout: "default",
  data() {
    return {
      SignUpform: true,
      form: {
        username: "",
        email: "",
        password: "",
      },
      url: null,
      file: null,
      snackbar: false,
      top: "top",
      color: "error",
      timeout: 4000,
      logo: require("~/assets/logo _transparent.png"),
      isLoading: false,
      nameRules: [
        (v) => !!v || "Name is required",
        (v) => (v && v.length <= 12) || "Name must be less than 12 characters",
      ],
      passwordRules: [
        (v) => !!v || "Password is required",
        (v) =>
          (v && v.length > 7) || "Weak Password, Must be atleast 8 characters",
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
    isComplete() {
      if (
        this.form.username &&
        this.form.password &&
        this.form.email
      ) {
        const res = this.$refs.form.validate();
        return res;
      }
    },
  },
  methods: {
    ...mapMutations("errorMessage", ["HANDLE_MESSAGE"]),
    toggleform() {
      this.SignUpform = false;
    },
    ...mapActions("registration", ["signup"]),
    async handlregistration() {
      this.isLoading = true;
      const data = {
        username: this.form.username,
        email: this.form.email,
        password: this.form.password,
        file: this.file,
      };
      const response = await this.signup(data);
      if (response) {
        this.onReset();
        this.isLoading = false;
        this.HANDLE_MESSAGE("Registered Successfully");
        this.snackbar = true;
        setTimeout(() => this.$router.push({ path: "/login" }), 1000);
      } else {
        this.isLoading = false;
        this.SignUpform = true;
        this.HANDLE_MESSAGE("Please try again");
        return (this.snackbar = true);
      }
    },
    goToHome() {
      this.$router.push({ path: "/" });
    },
    onReset() {
        (this.form.username = ""),
        (this.form.email = ""),
        (this.form.password = ""),
        (this.url = null);
    },
    onChange(event) {
      event.preventDefault();
      const file = event.target.files[0];
      this.file = file;
      this.url = URL.createObjectURL(file);
    },
  },
};
</script>

<style scoped>
button {
  outline: none;
}

.register {
  min-width: 60vw;
  max-width: 1050px;
}

#continueButton {
  display: flex;
  justify-content: center;
}
#preview {
  display: flex;
  justify-content: center;
}
#preview img {
  padding-bottom: 10px;
  max-width: 200px;
  max-height: 200px;
}
@media screen and (max-width: 540px) {
  .container {
    width: 96vw;
  }
}
</style>