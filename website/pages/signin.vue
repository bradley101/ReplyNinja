<template>
  <div class="login-container">
    <div class="login-left">
      <img src="~assets/signin-bg.jpg" alt="ninja signin image background" />
      <div class="login-left-overlay"></div>
    </div>

    <div class="login-right">
      <img class="login-rn-logo" src="~assets/reply-ninja-logo.svg" alt="reply ninja logo" />
      <p class="font-weight-light title text-left home-hero-tagline">
        Welcome, please login to
        <br />your account
      </p>

      <div class="social-login">
        <span class="google-login"></span>
        <span class="github-login"></span>
      </div>

      <v-card-text>
        <v-form>
          <v-text-field label="Username" prepend-icon="mdi-account-circle" />
          <v-text-field
            :type="showPassword ? 'text' : 'password'"
            label="Password"
            prepend-icon="mdi-lock"
            :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
            @click:append="showPassword = !showPassword"
          />
        </v-form>
      </v-card-text>
      <v-divider></v-divider>
      <v-card-actions>
        <v-btn color="success">Register</v-btn>
        <v-btn color="info">Login</v-btn>
      </v-card-actions>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      showPassword: false
    };
  }
};
</script>

<style scoped>
.signin-container {
  height: 100vh;
  width: 100%;
}
</style>