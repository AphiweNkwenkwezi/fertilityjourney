<template>
  <div ref="wrapper" class="notification-wrapper" @click.stop="toggleNotifications">
    <i class="fas fa-bell bell-icon"></i>
    <span v-if="notifications.length" class="notification-badge">{{ notifications.length }}</span>

    <NotificationsPanel
      v-if="showNotifications"
      :notifications="notifications"
      @delete="deleteNotification"
      @clear="clearAllNotifications"
    />
  </div>
</template>
  
<script>
import { useNotificationStore } from '../stores/notificationStore';
import NotificationsPanel from './NotificationsPanel.vue';

export default {
  name: 'NotificationsDropdown',
  components: {
    NotificationsPanel,
  },
  created() {
    this.notificationStore.getNotifications()
      .then(() => console.log("Notifications loaded successfully."))
      .catch(error => console.error("Error loading notifications:", error));    
  },
  mounted() {
    document.addEventListener('click', this.handleClickOutside);
  },
  beforeUnmount() {
    document.removeEventListener('click', this.handleClickOutside);
  },
  computed: {
    notificationStore() {
      return useNotificationStore();
    },
    notifications() {
      return this.notificationStore.notifications;
    },
    showNotifications() {
      return this.notificationStore.showNotifications;
    },
    isAnyUnreadMessages() {
        return this.notifications.length > 0;
    },
  },
  methods: {
    getInitials(name) {
      return name
        .split(' ')
        .map(n => n[0])
        .join('')
        .toUpperCase();
    },
    toggleNotifications() {
      this.notificationStore.toggleNotifications();
    },
    deleteNotification(index) {
      this.notificationStore.deleteNotification(index);
    },
    clearAllNotifications() {
      this.notificationStore.clearAllNotifications();
    },
    handleClickOutside(event) {
      if (this.$refs.wrapper && !this.$refs.wrapper.contains(event.target)) {
        this.notificationStore.setShowNotifications(false);
      }
    },
  }
};
</script>
  
<style scoped>
.notification-wrapper {
  position: relative;
  cursor: pointer;
  margin-right: 1rem;
}
.bell-icon {
  font-size: 20px;
  color: #9D9D9D;
}
.notification-badge {
  position: absolute;
  top: -10px;
  right: -8px;
  background-color: #FF4842;
  color: white;
  font-size: 11px;
  padding: 2px 6px;
  border-radius: 50%;
  font-weight: bold;
}
</style>
  