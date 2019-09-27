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
        <button class="btn google-login">
          <img src="~assets/google-icon.svg" alt />
          Login with Google
        </button>
        <button class="btn github-login">
          <img src="~assets/github-icon.svg" alt />
          Login with Github
        </button>
      </div>

      <p class="font-weight-light title text-left home-hero-tagline">or login with:</p>

      <v-card-text>
        <v-form>
          <v-text-field label="Email or username" prepend-icon="mdi-account-circle" />
          <v-text-field
            :type="showPassword ? 'text' : 'password'"
            label="Password"
            prepend-icon="mdi-lock"
            :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
            @click:append="showPassword = !showPassword"
          />
        </v-form>
      </v-card-text>

      <v-card-actions>
        <div class="remember-me">
          <v-checkbox v-model="checkbox1" label="Remember me"></v-checkbox>
          <p class="text-right">forgot password</p>
        </div>
      </v-card-actions>

      <v-card-actions>
        <v-btn class="login-button">Login</v-btn>
        <v-btn class="sign-up-button">Sign Up</v-btn>
      </v-card-actions>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      showPassword: false,
      checkbox1: false
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