<template>
  <div class="login-container">
    <div class="login-box">
      <div class="logo-wrapper">
        <img src="@/assets/logo.png" alt="My Fertility Journey Logo" class="logo-image" />
      </div>
      <h2>Register</h2>
      <form @submit.prevent="handleRegister">
        <div class="form-group">
          <label class="login-label" for="name">Name</label>
          <input v-model="form.name" type="text" id="name" required />
        </div>
        <div class="form-group">
          <label class="login-label" for="lastname">Surname</label>
          <input v-model="form.lastname" type="text" id="lastname" required />
        </div>
        <div class="form-group">
          <label class="login-label" for="email">Email</label>
          <input v-model="form.email" type="email" id="email" required />
        </div>
        <div class="form-group">
          <label class="login-label" for="password">Password</label>
          <input v-model="form.password" type="password" id="password" required />
        </div>
        <div class="form-group">
          <label class="login-label" for="role">Role</label>
          <select v-model="form.role" id="role" required>
            <option v-for="role in roles" :key="role" :value="role">{{ role }}</option>
          </select>
        </div>
        <button type="submit">Register</button>
      </form>
    </div>
  </div>
</template>

<script>
import { useUserStore } from '../stores/userStore';

export default {
  name: 'RegisterUser',
  data() {
    return {
      form: {
        name: '',
        lastname: '',
        email: '',
        password: '',
        role: ''
      },
    }
  },
  created() {
    this.userStore.getRoles();
  },
  computed: {
    userStore() {
      return useUserStore();
    },
    roles() {
      return this.userStore.roles;
    }
  },
  methods: {
    handleRegister() {
      this.userStore.registerUser(this.form);
    }
  }
}
</script>

<style scoped>
.login-container {
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  background-color: #f5f6fa;
}

.login-box {
  width: 100%;
  max-width: 400px;
  padding: 2rem;
  background: white;
  border-radius: 10px;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.1);
}

.logo-wrapper {
  text-align: center;
  margin-bottom: 1rem;
}

.logo-image {
  max-height: 60px;
}

h2 {
  text-align: center;
  margin-bottom: 1.5rem;
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

input[type='text'],
input[type='email'],
input[type='date'],
input[type='password'] {
  width: 95%;
  padding: 0.6rem;
  border: 1px solid #ccc;
  border-radius: 6px;
  font-size: 1rem;
}
select {
  width: 100%;
  padding: 0.6rem;
  border: 1px solid #ccc;
  border-radius: 6px;
  font-size: 1rem;
}

button {
  width: 100%;
  padding: 0.75rem;
  background-color: #67adb9;
  color: white;
  font-size: 1rem;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  margin-top: 2rem;
}

button:hover {
  background-color: #5499a8;
}
</style>
