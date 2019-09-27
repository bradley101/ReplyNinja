<template>
  <div class="login-container">
    <div class="login-left">
      <img src="~assets/signin-bg.jpg" alt="ninja signin image background" />
      <div class="login-left-overlay"></div>
    </div>

    <div class="login-right">
      <v-card width="400" class="mx-auto mt-5">
        <v-card-title class="pb-0">
          <h1>Login</h1>
        </v-card-title>
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
      </v-card>
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