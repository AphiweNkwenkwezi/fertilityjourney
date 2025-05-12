<template>
  <div class="content">
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
          <button type="button" class="secondary-button" @click="cancelChanges">Clear</button>
          <button type="submit">Save</button>
        </div>
      </form>
    </div>
  
    <loading :active.sync="isLoading" :is-full-page="true" color="#67ADB9" loader="dots" :opacity="0.5" background-color="#000"/>
  </div>
</template>

<script>
import { useToast } from 'vue-toastification'
import { useUserStore } from '../stores/userStore'

export default {
  name: 'ProfilePage',
  data() {
    return {
      form: {},
      isLoading: false,
    }
  },
  setup() {
    const toast = useToast();
    return {
      toast
    };
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
      this.isLoading = true;

      setTimeout(() => {
        this.userStore.updateUser(this.form);
        this.isLoading = false;
        this.toast.success("Profile updated successfully!");
      }, 2000);
    },
    cancelChanges() {
      this.form = { ...this.userStore.user };
    }
  }
}
</script>

<style scoped>
.content {
  padding: 2rem;
  overflow-y: auto;
  height: 100%;
}
.profile-page {
  max-width: 400px;
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
