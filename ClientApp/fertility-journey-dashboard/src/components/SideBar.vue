<template>
  <aside :class="['sidebar', isVisible ? 'visible' : 'hidden']">
    <!-- <div class="logo">🩺 My Fertility Journey</div> -->
    <div class="logo">
      <img src="@/assets/logo.png" alt="My Fertility Journey Logo" class="logo-image" />
    </div>
    <nav>
      <ul>
        <SidebarItem
          v-for="item in items"
          :key="item.name"
          :item="item"
          :active="isActive(item.path)"
        />
      </ul>
    </nav>
  </aside>
</template>

<script>
import SidebarItem from './SidebarItem.vue';
import { useRoute } from 'vue-router';

export default {
  name: 'Sidebar',
  components: { SidebarItem },
  props: {
    isVisible: {
      type: Boolean,
      default: true
    }
  },
  data() {
    return {
      items: [
        { name: 'Dashboard', path: '/dashboard', icon: 'far fa-chart-bar' },
        { name: 'My Profile', path: '/profile', icon: 'far fa-user' },
        { name: 'Manage Practises', path: '/practises', icon: 'far fa-building' },
        { name: 'Logs', path: '/logs', icon: 'far fa-file-alt' }
      ]
    };
  },
  setup() {
    const route = useRoute();
    const isActive = (path) => route.path === path;
    return { isActive };
  }
};
</script>

<style scoped>
.logo {
  font-size: 1.2rem;
  font-weight: bold;
  color: #5F97A0;
  margin-bottom: 2rem;
}
.logo-image {
  height: 2.5rem;
}

ul {
  list-style: none !important;
  padding-left: 0 !important;
  margin: 0 !important;
}

.sidebar {
  width: 240px;
  background-color: #fff;
  padding: 1.5rem 1rem;
  border-right: 1px solid #eee;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  transition: transform 0.3s ease-in-out;
  z-index: 1000;
}
.sidebar.hidden {
  transform: translateX(-100%);
}
.sidebar.visible {
  transform: translateX(0);
}

@media (min-width: 768px) {
  .sidebar {
    transform: translateX(0) !important;
    position: relative;
  }
}

</style>