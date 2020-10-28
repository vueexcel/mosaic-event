<template>
  <div class="d-flex login">
    <button @click="goToHome" class="pr-5">
      <img class="logo" src="~/assets/logo.png" height="200px" />
    </button>
    <div class="formWrapper d-flex ml-16">
      <v-form>
        <div class="loginText text-center font-weight-bold">Login</div>
        <input
          class="pa-2 rounded-lg mb-6"
          v-model="form.email"
          placeholder="EMAIL"
        />
        <br />
        <input
          class="pa-2 rounded-lg mb-6"
          v-model="form.password"
          placeholder="PASSWORD"
        />
        <br />
        <div class="d-flex">
          <button class="submitBtn" @click="handleLogin">SUBMIT</button>
        </div>
      </v-form>
    </div>
  </div>
</template>

<script>
export default {
  name: "login",
  layout: "default",
  data() {
    return {
      form: {
        email: "",
        password: "",
      },
    };
  },
  methods: {
    goToHome() {
      this.$router.push({
        path: "/",
        query: { ...this.$route.query },
      });
    },
    handleLogin() {
      console.log(this.form);
    },
  },
};
</script>

<style scoped>
button,
input {
  outline: none;
}
.login {
  justify-content: center;
  align-items: center;
  height: calc(100vh - 100px);
  background-image: url("../assets/backgroundLogin.png");
  background-position: center;
  background-size: cover;
  width: 100%;
}
.logo {
  animation: spin 8s infinite;
}

.loginText {
  color: #781b97cb;
  font-size: 36px;
  padding: 30px;
  text-shadow: 3px 3px #aa9595b0;
}
input::placeholder {
  color: white;
  background-image: radial-gradient(#6a097d 45%, #c060a1);
  opacity: 1;
  padding: 10px;
  border-radius: 10px;
}
input {
  color: white;
  background-image: radial-gradient(#6a097d 45%, #c060a1);
  opacity: 1;
  padding: 10px;
  border-radius: 10px;
}
.submitBtn {
  color: white;
  border-radius: 15px;
  background-image: radial-gradient(#6a097d 45%, #c060a1);
  padding: 3px 20px;
}

.formWrapper {
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  height: 450px;
  width: 450px;
  position: relative;
  background-image: radial-gradient(#6a097d 45%, #c060a1);
  z-index: 9999;
  box-shadow: 0 6px 34px 8px #781b97cb;
}

.formWrapper:before {
  content: "";
  background-image: radial-gradient(#d6d4f1 50%, #1124cf);
  position: absolute;
  z-index: -1;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  height: 400px;
  width: 400px;
}

.d-flex {
  justify-content: center;
}

@keyframes spin {
  from {
    transform: rotateY(0deg);
  }
  to {
    transform: rotateY(360deg);
  }
}
</style>