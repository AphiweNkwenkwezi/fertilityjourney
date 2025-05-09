<template>
  <div class="dashboard-layout">
    <!-- Sidebar -->
    <Sidebar :isVisible="isSidebarVisible" />
    <div class="main-area">
      <!-- Top nav -->
      <Topbar 
        :user=user
        @logout="logout" 
        @toggle-sidebar="toggleSidebar"
      />  
      <!-- Views -->
      <router-view /> 
    </div>
  </div>
</template>
  
<script>
import Sidebar from '@/components/Sidebar.vue';
import Topbar from '@/components/Topbar.vue';
import { useUserStore } from '../stores/userStore.js';
  
export default {
  name: 'DashboardLayout',
  components: {
    Sidebar,
    Topbar,
  },
  data() {
    return {
      isSidebarVisible: window.innerWidth >= 768
    };
  },
  created() {
    this.userStore.getUser()
      .then(() => console.log("User data fetched successfully."))
      .catch(error => console.error("Error fetching user data:", error));      
  },
  methods: {
    logout() {
      this.userStore.logout();
    },
    toggleSidebar() {
      this.isSidebarVisible = !this.isSidebarVisible;
    },
    handleResize() {
      this.isSidebarVisible = window.innerWidth >= 768;
    }
  },
  computed: {
    userStore() {
      return useUserStore();
    },
    user() {
      return this.userStore ? this.userStore.user : {};
    },
  },
  mounted() {
    window.addEventListener('resize', this.handleResize);
  },
  beforeUnmount() {
    window.removeEventListener('resize', this.handleResize);
  }
};
</script>
  
<style scoped>
.dashboard-layout {
  display: flex;
  height: 100vh;
  overflow: hidden;
  flex-direction: row;
}

.main-area {
  flex: 1;
  display: flex;
  flex-direction: column;
  background: #f5f6fa;
}

</style>