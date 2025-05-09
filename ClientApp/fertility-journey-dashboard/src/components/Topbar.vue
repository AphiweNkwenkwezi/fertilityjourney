<template>
  <header class="topbar">
    <!-- Hamburger Menu for small screens -->
    <button class="hamburger" @click="$emit('toggle-sidebar')">
      <i class="fas fa-bars"></i>
    </button>

    <!-- Right-side actions -->
    <div class="actions">
      <!-- Notifications -->
      <NotificationsDropdown />

      <div class="dropdown" @click="toggleDropdown">
        <div class="profile-display">
          <div class="avatar-wrapper">
            <template v-if="user.avatar">
              <img
                :src="user.avatar"
                alt="Avatar"
                class="avatar"
              />
            </template>
            <template v-else>
              <div class="avatar-fallback">
                {{ userInitials }}
              </div>
            </template>
          </div>
          <span class="profile-name">{{ user.name }} {{ user.lastname }}</span>
          <i class="fas fa-chevron-down dropdown-icon"></i>
        </div>
        <AccountDropdown 
          :show="showAccountDropdown" 
          :user="user" 
        />
      </div>
    </div>
  </header>
</template>

<script>
import NotificationsDropdown from './NotificationsDropdown.vue';
import AccountDropdown from './AccountDropdown.vue'

export default {
  name: 'Topbar',
  props: {
    user: {
      type: Object,
      required: true
    }
  },
  components: {
    NotificationsDropdown,
    AccountDropdown
  },
  data() {
    return { 
      showAccountDropdown: false, 
     };
  },
  computed: {
    userInitials() {
      const first = this.user.name?.charAt(0) || '';
      const last = this.user.lastname?.charAt(0) || '';
      return (first + last).toUpperCase();
    }
  },
  methods: {
    toggleDropdown() {
      this.showAccountDropdown = !this.showAccountDropdown;
    }
  }
};
</script>

<style scoped>
.topbar {
  height: 76px;
  background-color: #f9f9f9;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding: 0 1.5rem;
  border-bottom: 1px solid #eee;
}
.actions {
  display: flex;
  gap: 1rem;
  align-items: center;
}
.profile-display {
  display: flex;
  align-items: center;
  cursor: pointer;
  gap: 1rem;
  font-size: 14px;
  font-weight: 600;
  color: var(--color-text-grey);
}
.profile-name {
  font-size: 14px;
  font-weight: 600;
}
.notification-bell {
  color: #9D9D9D;
}
.avatar-wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
}
.avatar {
  width: 48px;
  height: 48px;
  border-radius: 50%;
  object-fit: cover;
}
.avatar-fallback {
  width: 48px;
  height: 48px;
  border-radius: 50%;
  background-color: rgba(103, 173, 185, 0.08);
  color: #578388;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 600;
  font-size: 1rem;
}
.hamburger {
  background: none;
  border: none;
  font-size: 1.5rem;
  margin-right: 1rem;
  display: none;
  color: #578388;

}

@media (max-width: 767px) {
  .hamburger {
    display: block;
  }
}

</style>