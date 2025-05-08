import { defineStore } from 'pinia';
import { fetchNotifications } from '../services/notificationService.js';

export const  useNotificationStore = defineStore('notification', {
  state: () => ({
    showNotifications: false,
    notifications: []
  }),
  actions: {
    async getNotifications() {
      try {
        const notifications = await fetchNotifications();

        this.$patch({   
          notifications: notifications
        });
      } catch (error) {
        console.error("Error getting notifications: ", error);
      }
    },
    toggleNotifications() {
      this.showNotifications = !this.showNotifications;
    },
    deleteNotification(index) {
      this.notifications.splice(index, 1);
    },
    clearAllNotifications() {
      this.notifications = [];
    }
  },
});