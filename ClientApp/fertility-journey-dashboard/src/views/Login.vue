<template>
  <div class="login-container">
    <div class="login-box">
      <div class="logo-wrapper">
        <img src="@/assets/logo.png" alt="My Fertility Journey Logo" class="logo-image" />
      </div>
      <h2>Login</h2>
      <form @submit.prevent="handleLogin">
        <div class="form-group">
          <label class="login-label" for="email">Email</label>
          <input v-model="email" type="email" id="email" required />
        </div>
        <div class="form-group">
          <label class="login-label" for="password">Password</label>
          <input v-model="password" type="password" id="password" required />
        </div>
        <button type="submit">Log In</button>
      </form>
      <p class="register-link">
        Don't have an account?
        <router-link to="/register"><strong>Register here</strong></router-link>
      </p>
    </div>
  </div>
</template>
  
<script>
import { useUserStore } from '../stores/userStore';

export default {
  name: "LoginView",
  data() {
    return {
      email: "",
      password: ""
    };
  },
  computed: {
    userStore() {
      return useUserStore();
    }    
  },
  methods: {
    handleLogin() {
      this.userStore.login(this.email);
    }
  }
};
</script>
  
<style scoped>
.logo-wrapper {
  display: flex;
  justify-content: center;
  margin-bottom: 2rem;
}
.logo-image {
  height: 5rem;
}
.login-container {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background-color: var(--color-bg-alt);
}

.login-box {
  background-color: white;
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1);
  width: 100%;
  max-width: 400px;
}

h2 {
  text-align: center;
  margin-bottom: 1.5rem;
  color: #333;
}

.form-group {
  margin-bottom: 1rem;
}

label {
  display: block;
  margin-bottom: 0.5rem;
  color: #555;
  font-size: 14px;
  font-weight: 600;
}

input {
  display: block;
  width: 95%;
  padding: 0.6rem;
  border: 1px solid #ccc;
  border-radius: 6px;
  font-size: 1rem;
}

button {
  width: 100%;
  padding: 0.7rem;
  background-color: var(--color-blue);
  border: none;
  color: white;
  font-weight: bold;
  border-radius: 6px;
  cursor: pointer;
  transition: background-color 0.2s ease-in-out;
  margin-top: 2rem;
}

button:hover {
  background-color: #5499a8;
}

.register-link {
  margin-top: 1rem;
  text-align: center;
  font-size: 0.9rem;
}

.register-link a {
  color: #67adb9;
  text-decoration: none;
  font-weight: 500;
}

.register-link a:hover {
  text-decoration: underline;
}
</style>
  