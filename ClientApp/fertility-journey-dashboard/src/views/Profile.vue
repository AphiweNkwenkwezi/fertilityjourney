<template>
  <div class="profile-page">
    <h2 class="section-title">Edit Profile</h2>

    <form @submit.prevent="saveProfile" class="profile-form">
      <div class="form-group">
        <label for="fullName">Name</label>
        <input v-model="form.name" id="name" type="text" required />
      </div>

      <div class="form-group">
        <label for="fullName">Surname</label>
        <input v-model="form.lastname" id="surname" type="text" required />
      </div>

      <div class="form-group">
        <label for="email">Email</label>
        <input v-model="form.email" id="email" type="email" required />
      </div>

      <div class="form-group">
        <label for="role">Role</label>
        <select v-model="form.role" id="role" required>
          <option v-for="role in roles" :key="role" :value="role">
            {{ role }}
          </option>
        </select>
      </div>

      <div class="form-group">
        <label for="phone">Phone</label>
        <input v-model="form.phone" id="phone" type="tel" />
      </div>

      <div class="form-actions">
        <button type="button" class="secondary-button" @click="cancelChanges">Cancel</button>
        <button type="submit">Save</button>
      </div>
    </form>
  </div>
</template>

<script>
import { useUserStore } from '../stores/userStore'

export default {
  name: 'ProfilePage',
  data() {
    return {
      form: {}
    }
  },
  created() {
    const user = this.userStore.user;

    if (!user.name) {
      this.userStore.getUser().then(() => {
        this.form = { ...this.userStore.user };
      });
    } else {
      this.form = { ...user };
    }

    this.userStore.getRoles();
  },
  computed: {
    userStore() {
      return useUserStore();
    },
    user() {
      return this.userStore.user;
    },
    roles() {
      return this.userStore.roles;
    }
  },
  methods: {
    saveProfile() {
      this.userStore.updateUser(this.form);
    },
    cancelChanges() {
      this.form = { ...this.userStore.user };
    }
  }
}
</script>

<style scoped>
.profile-page {
  padding: 2rem;
  max-width: 400px;
  overflow-y: auto;
  height: 100%;
}

.profile-form {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.form-group {
  display: flex;
  flex-direction: column;
}

label {
  font-weight: bold;
  margin-bottom: 0.5rem;
}

input[type='text'],
input[type='email'],
input[type='date'],
input[type='tel'] {
  display: block;
  width: 95%;
  padding: 0.6rem;
  font-size: 1rem;
  border: 1px solid #ccc;
  border-radius: 6px;
}
select {
  display: block;
  padding: 0.6rem;
  font-size: 1rem;
  border: 1px solid #ccc;
  border-radius: 6px;
  background-color: white;
  color: #333;
  appearance: none;
  background-image: url("data:image/svg+xml,%3Csvg width='14' height='10' viewBox='0 0 14 10' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M1 1l6 6 6-6' stroke='%23999' stroke-width='2' fill='none' fill-rule='evenodd'/%3E%3C/svg%3E");
  background-repeat: no-repeat;
  background-position: right 0.75rem center;
  background-size: 1em;
}

select:focus {
  outline: none;
  border-color: #67ADB9;
  box-shadow: 0 0 0 2px rgba(103, 173, 185, 0.15);
}
.form-actions {
  display: flex;
  justify-content: space-between;
  margin-top: 1.5rem;
}

button {
  padding: 0.5rem 1rem;
  font-weight: bold;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

button[type='submit'] {
  background-color: var(--color-blue);
  color: white;
}

.secondary-button {
  background-color: transparent;
  color: var(--color-blue);
}
</style>
