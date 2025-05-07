<template>
    <div class="dashboard-layout">
      <Sidebar />
      <div class="main-area">
        <Topbar @logout="logout" />
        <main class="content">
          <router-view />
        </main>
      </div>
    </div>
  </template>
  
  <script>
  import Sidebar from '@/components/Sidebar.vue';
  import Topbar from '@/components/Topbar.vue';
  
  export default {
    name: 'DashboardLayout',
    components: {
      Sidebar,
      Topbar
    },
    methods: {
      logout() {
        console.log('Logging out...');
      }
    }
  };
  </script>
  
  <style scoped>
  .dashboard-layout {
    display: flex;
    height: 100vh;
    overflow: hidden;
  }
  .main-area {
    flex: 1;
    display: flex;
    flex-direction: column;
    background: #f5f6fa;
  }
  .content {
    padding: 2rem;
    overflow-y: auto;
    height: 100%;
  }
  </style>