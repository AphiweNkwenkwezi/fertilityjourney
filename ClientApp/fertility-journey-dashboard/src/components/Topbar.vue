<template>
  <header class="topbar">
    <div class="actions">
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
        <div v-if="dropdown" class="dropdown-menu">
          <div class="dropdown-menu-header-container">
            <p class="dropdown-menu-header">{{ user.name }} {{ user.lastname }}</p>
            <p class="dropdown-menu-subheader">{{ user.email }}</p>
          </div>
          <div class="dropdown-menu-divider"></div>
          <router-link to="/profile" class="dropdown-item">Profile</router-link>
          <div class="dropdown-menu-divider"></div>
          <a href="#" @click.prevent="$emit('logout')" class="dropdown-item">Logout</a>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
import NotificationsDropdown from './NotificationsDropdown.vue';

export default {
  name: 'Topbar',
  components: {
    NotificationsDropdown
  },
  data() {
    return { 
      dropdown: false, 
      user: { 
        name: "Aphiwe",
        lastname: "Nkwenkwezi",
        email: "aphiwenkwenkwezi@gmail.com",
        avatar: ""
      },
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
      this.dropdown = !this.dropdown;
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
.dropdown-icon {
  font-size: 12px;
  color: var(--color-blue);
}
.dropdown {
  position: relative;
}
.dropdown-menu {
  position: absolute;
  top: 4.5rem;
  right: 0;
  background: #fff;
  border-radius: 6px;
  box-shadow: 0 4px 10px rgba(0,0,0,0.1);
  width: auto;
  z-index: 100;
}

.dropdown-item {
  margin: 0.75rem 0.75rem; /* space around the item */
  padding: 0.75rem 0.75rem;  /* space inside the item */
  display: block;
  text-decoration: none;
  color: #333;
  font-size: 14px;
  border-radius: 6px; /* optional: makes it look more modern */
  transition: background 0.2s ease;
}
.dropdown-item:hover {
  background: rgba(157, 157, 157, 0.08);
}
.dropdown-menu-header {
  font-weight: 600;
  font-size: 16px;
  margin-block: 0.1rem;
}
.dropdown-menu-subheader {
  font-weight: 400;
  font-size: 14px;
  margin-block: 0.1rem;
  color: #747474;
}
.dropdown-menu-header-container {
  padding: 0.75rem 1.25rem;
}
.dropdown-menu-divider {
  background-color: rgba(157, 157, 157, 0.24);
  height: 1px;
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

</style>