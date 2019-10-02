<template>
  <div class="login-container">
    <div class="login-left">
      <img src="~assets/signin-bg.jpg" alt="ninja signin image background" />
      <div class="login-left-overlay"></div>
    </div>

    <div class="login-right">
      <img class="login-rn-logo" src="~assets/reply-ninja-logo.svg" alt="reply ninja logo" />
      <p class="font-weight-light title text-left home-hero-tagline">
        Welcome, please register
        <br />your account
      </p>

      <div class="social-login">
        <button class="btn google-login" id="google-login" @click="googleLogin">
          <img src="~assets/google-icon.svg" alt />
          SignUp with Google
        </button>
        <button class="btn github-login" id="github-login" @click="githubLogin">
          <img src="~assets/github-icon.svg" alt />
          SignUp with Github
        </button>
      </div>

      <p class="font-weight-light title text-left home-hero-tagline">Sign up with mail:</p>

      <v-card-text>
        <v-form @submit.prevent="signup">
          <v-text-field
            label="Full Name"
            prepend-icon="mdi-account"
            color="#E040FB"
            v-model="name"
          />
          <v-text-field label="Email" prepend-icon="mdi-mail" color="#E040FB" v-model="email" />
          <v-text-field
            :type="showPassword ? 'text' : 'password'"
            label="Enter Password"
            prepend-icon="mdi-lock"
            :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
            @click:append="showPassword = !showPassword"
            color="#E040FB"
            v-model="password"
          />
          <v-text-field
            :type="showPassword ? 'text' : 'password'"
            label="Re-enter Password"
            prepend-icon="mdi-lock"
            :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
            @click:append="showPassword = !showPassword"
            color="#E040FB"
            v-model="repassword"
          />
          <v-card-actions>
            <div class="remember-me">
              <v-checkbox v-model="checkbox1" label="Remember me"></v-checkbox>
            </div>
          </v-card-actions>

          <v-card-actions>
            <v-btn type="submit" class="sign-up-button">Sign Up</v-btn>
            <v-btn class="login-button" to="signin">Login</v-btn>
          </v-card-actions>
        </v-form>
      </v-card-text>

      
    </div>
  </div>
</template>
<script>
import firebase from "firebase";
let redirect = (router) => {
  router.push('dashboard');
};
let callAuth = provider => {
  firebase
    .auth()
    .signInWithPopup(provider)
    .then(result => {
      console.log(result);
      redirect();
    })
    .catch(err => {
      console.log(err);
    });
};

export default {
  data() {
    return {
      showPassword: false,
      checkbox1: false,
      email: "",
      password: "",
      repassword: '',
      name: ''

    };
  },
  mounted: function() {
    3;
    console.log(firebase.SDK_VERSION);
  },
  methods: {
    googleLogin: function(event) {
      console.log("Ok reached");
      let googleProvider = new firebase.auth.GoogleAuthProvider();
      googleProvider.addScope(
        "https://www.googleapis.com/auth/contacts.readonly"
      );
      firebase.auth().useDeviceLanguage();
      callAuth(googleProvider);
    },
    githubLogin: function(event) {
      console.log("Ok reached");
      let githubProvider = new firebase.auth.GithubAuthProvider();
      githubProvider.addScope("read:user user:mail");

      callAuth(githubProvider);
    },
    signup: function() {
      console.log("Ok reached");
      let email = this.email,
        password = this.password,
        repassword = this.repassword;
      console.log(typeof password);
      if (password != repassword || password.length < 8)
        return;

      let that = this;
      firebase
        .auth()
        .createUserWithEmailAndPassword(email, password)
        .then(result => {
          console.log(result);
          redirect(that.$router);
        })
        .catch(error => {
          console.log(error);
        });
    }
  }
};
</script>

<style scoped>
.signin-container {
  height: 100vh;
  width: 100%;
}
</style>