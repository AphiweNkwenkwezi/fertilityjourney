<template>
  <div class="notification-wrapper" @click="toggleNotifications">
    <i class="fas fa-bell bell-icon"></i>
    <span v-if="notifications.length" class="notification-badge">{{ notifications.length }}</span>

    <div v-if="showNotifications" class="notification-dropdown">
      <div class="dropdown-menu-header-container">
        <p class="dropdown-menu-header">Notifications</p>
        <p class="dropdown-menu-subheader">You have {{ isAnyUnreadMessages ? notifications.length : 'no' }} unread messages</p>
      </div>
      <div v-if="isAnyUnreadMessages" class="dropdown-menu-divider"></div>
      <div
        v-for="(notif, index) in notifications"
        :key="index"
        class="notification-item"
      >
        <div class="notif-avatar">
          <template v-if="notif.avatar">
            <img :src="notif.avatar" alt="Avatar" class="avatar-img" />
          </template>
          <template v-else>
              <span class="avatar-initials">{{ getInitials(notif.name) }}</span>
          </template>
        </div>
        <div class="notif-content">
          <p class="notif-heading">{{ notif.title }}</p>
          <p class="notif-meta">{{ notif.name }}</p>
          <div class="date-icon-wrapper">
            <i class="far fa-clock notif-clock"></i>
            <p class="notif-meta-date">{{ notif.date }}</p>
          </div>
        </div>
        <i
          class="far fa-trash-alt notif-delete"
          @click.stop="deleteNotification(index)"
        ></i>
      </div>

      <div v-if="isAnyUnreadMessages">
          <div class="dropdown-menu-divider"></div>
          <div class="clear-all" @click="clearAllNotifications">Clear All</div>
      </div>
  </div>
  </div>
</template>
  
<script>
// import KevAvatar from '@/assets/profile photo.png'
import { useNotificationStore } from '../stores/notificationStore';
import { notifications } from '../services/appData';

export default {
  name: 'NotificationsDropdown',
  created() {
    this.notificationStore.getNotifications()
      .then(() => console.log("Notificationsloaded successfully."))
      .catch(error => console.error("Error loading notifications:", error));    
  },
  data() {
    return {
      // showNotifications: false,
      // notifications: [
      //   { name: 'John Doe', title: 'New Message', date: '6 May 2025', avatar: KevAvatar },
      //   { name: 'Jane Smith', title: 'Appointment Reminder', date: '5 May 2025', avatar: KevAvatar },
      //   { name: 'Kev Doe', title: 'Checkup Reminder', date: '10 May 2025', avatar: KevAvatar }
      // ]
    };
  },
  computed: {
    notificationStore() {
      return useNotificationStore();
    },
    notifications() {
      return this.notificationStore.notifications;
    },
    toggleNotifications() {
      this.notificationStore.toggleNotifications();
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
    deleteNotification(index) {
      this.notificationStore.deleteNotification(index);
    },
    clearAllNotifications() {
      this.notificationStore.clearAllNotifications();
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

.notification-dropdown {
  position: absolute;
  right: 0;
  top: 250%;
  width: 300px;
  background: white;
  border: 1px solid #eee;
  border-radius: 8px;
  box-shadow: 0 6px 18px rgba(0, 0, 0, 0.05);
  z-index: 100;
  padding: 0.5rem 0;
}

.notification-item {
  display: flex;
  align-items: center;
  padding: 0.75rem 1rem;
  border-bottom: 1px solid #f0f0f0;
}

.notif-avatar {
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background-color: rgba(103, 173, 185, 0.08);
  color: #578388;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  margin-right: 0.75rem;
}

.notif-content {
  flex: 1;
}

.notif-heading {
  font-weight: bold;
  margin: 0;
  font-size: 14px;
}

.notif-meta {
  font-size: 14px;
  color: #747474;
  margin-block: 0.1rem;
}
.notif-meta-date {
  font-size: 12px;
  color: #BCBCBC; 
  margin-block: 0.1rem;
  }
.notif-delete {
  color: #ccc;
  cursor: pointer;
  font-size: 12px;
}

.clear-all {
  text-align: center;
  padding: 0.75rem;
  font-size: 14px;
  color: #578388;
  cursor: pointer;
  font-weight: 600;
}
.clear-all:hover {
  text-decoration: underline;
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
.notif-delete {
  color: #9D9D9D;
  font-size: 14px;
  cursor: pointer;
  transition: color 0.2s;
}

.notif-delete:hover {
  color: #FF4C4C;
}
.dropdown-menu-divider {
  background-color: rgba(157, 157, 157, 0.24);
  height: 1px;
}
.notif-avatar {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: rgba(103, 173, 185, 0.08); /* #67ADB914 */
  color: #578388;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  font-size: 0.9rem;
  overflow: hidden;
}

.avatar-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 50%;
}

.avatar-initials {
  text-transform: uppercase;
}
.date-icon-wrapper {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: #BCBCBC; 
}
</style>
  