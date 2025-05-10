<template>
  <div class="notification-container" @click.stop>
    <!-- <NotificationsHeader :unreadCount="notifications.length" /> -->
    <div class="dropdown-menu-header-container">
      <p class="dropdown-menu-header">Notifications</p>
      <p class="dropdown-menu-subheader">
        You have {{ unreadCount > 0 ? unreadCount : 'no' }} unread messages
      </p>
    </div>
    <div v-if="notifications.length" class="dropdown-menu-divider"></div>

    <NotificationItem
      v-for="(notif, index) in notifications"
      :key="index"
      :notification="notif"
      @delete="() => $emit('delete', index)"
    />

    <div v-if="notifications.length">
      <div class="dropdown-menu-divider"></div>
      <div class="clear-all" @click="$emit('clear')">Clear All</div>
    </div>
  </div>
</template>
  
<script>
import NotificationItem from './NofiticationItem.vue';
  
export default {
  name: 'NotificationPanel',
  components: {
    NotificationItem,
  },
  props: {
    notifications: {
      type: Array,
      required: true
    }
  },
  computed: {
    unreadCount() {
      return this.notifications.length;
    }
  },
};
</script>

<style>
.notification-container {
  position: absolute;
  right: 0;
  top: 250%;
  width: 360px;
  background: white;
  border: 1px solid #eee;
  border-radius: 8px;
  box-shadow: 0 6px 18px rgba(0, 0, 0, 0.05);
  z-index: 100;
  padding: 0.5rem 0;
}
.dropdown-menu-divider {
  background-color: rgba(157, 157, 157, 0.24);
  height: 1px;
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
</style>