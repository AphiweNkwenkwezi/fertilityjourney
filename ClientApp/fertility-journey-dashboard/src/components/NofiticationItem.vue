<template>
  <div class="notification-item">
    <div class="notif-avatar">
      <template v-if="notification.avatar">
        <img :src="notification.avatar" alt="Avatar" class="avatar-img" />
      </template>
      <template v-else>
        <span class="avatar-initials">{{ getInitials(notification.name) }}</span>
      </template>
    </div>
    <div class="notif-content">
      <p class="notif-heading">{{ notification.title }}</p>
      <p class="notif-meta">{{ notification.name }}</p>
      <div class="date-icon-wrapper">
        <i class="far fa-clock notif-clock"></i>
        <p class="notif-meta-date">{{ notification.date }}</p>
      </div>
    </div>
    <i class="far fa-trash-alt notif-delete" @click="$emit('delete')"></i>
  </div>
</template>

<script>
export default {
  name: 'NotificationItem',
  props: {
    notification: {
        type: Object,
        required: true
    }
  },
  methods: {
    getInitials(name) {
      return name
        .split(' ')
        .map(word => word.charAt(0).toUpperCase())
        .join('');
    }
  }
};
</script>

<style scoped>
.notification-item {
  display: flex;
  align-items: center;
  padding: 0.75rem 1rem;
  border-bottom: 1px solid #f0f0f0;
  gap: 1.5rem;
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
  color: #9D9D9D;
  font-size: 14px;
  cursor: pointer;
  transition: color 0.2s;
}
.notif-delete:hover {
  color: #FF4C4C;
}
.date-icon-wrapper {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: #BCBCBC; 
}
.avatar-initials {
  text-transform: uppercase;
}
.avatar-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 50%;
}
</style>
  