<template>
  <aside class="sidebar">
    <div class="logo">🩺 Fertility Dashboard</div>
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
  data() {
    return {
      items: [
        { name: 'Dashboard', path: '/', icon: 'far fa-chart-bar' },
        { name: 'My Profile', path: '/profile', icon: 'far fa-user' },
        { name: 'Manage Practises', path: '/practices', icon: 'far fa-building' },
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
.sidebar {
  width: 240px;
  background-color: #fff;
  padding: 1.5rem 1rem;
  border-right: 1px solid #eee;
  height: 100vh;
  /* box-shadow: 0 0 10px rgba(0,0,0,0.05); */
}
.logo {
  font-size: 1.2rem;
  font-weight: bold;
  color: #5F97A0;
  margin-bottom: 2rem;
}

ul {
  list-style: none !important;
  padding-left: 0 !important;
  margin: 0 !important;
}

</style>