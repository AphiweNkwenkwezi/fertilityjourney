<template>
    <div class="dashboard-layout">
      <!-- Sidebar -->
      <Sidebar />
      <div class="main-area">
        <!-- Top nav -->
        <Topbar 
          :user=user
          @logout="logout" 
        />

        <main class="content">
          <!-- Page header -->
          <div class="page-header">
            <h1>Welcome {{ user.name }}!</h1>
            <p class="subheading">Your current stats at a glance.</p>
          </div>

          <!-- Dashboard totals -->
          <div class="dashboard-stats">
            <StatCard title="Total Practices" value="120" :growth="4" icon="fas fa-clinic-medical" />
            <StatCard title="Total Subscribers" value="3,452" :growth="2" icon="fas fa-user-friends" />
            <StatCard title="Total Treatments" value="212" :growth="5" icon="fas fa-pills" />
            <StatCard title="Total Consents" value="168" :growth="-1" icon="fas fa-file-signature" />
            <StatCard title="Total Consents Signed" value="142" :growth="3" icon="fas fa-file-signature" />
            <StatCard title="Total Fact Sheets Read" value="2,678" :growth="6" icon="fas fa-book-open" />
          </div>

          <!-- New Practises Summary -->
           <NewPractisesTable />

          <router-view />
        </main>
      </div>
    </div>
  </template>
  
<script>
import Sidebar from '@/components/Sidebar.vue';
import Topbar from '@/components/Topbar.vue';
import StatCard from '../components/StatCard.vue';
import NewPractisesTable from '../components/NewPractisesTable.vue';
  
  export default {
    name: 'DashboardLayout',
    components: {
      Sidebar,
      Topbar,
      StatCard,
      NewPractisesTable,
    },
    data() {
      return {
        user: { 
            name: "Aphiwe",
            lastname: "Nkwenkwezi",
            email: "aphiwenkwenkwezi@gmail.com",
            avatar: ""
          },
      };
    },
    methods: {
      logout() {
        console.log('Logging out...');
      }
    }
  };
  </script>
  
<style scoped>
.page-header {
  text-align: left;
  margin-block: 0;
}

.page-header h1 {
  font-size: 2rem;
  font-weight: 700;
  margin-block: 0;
}

.page-header .subheading {
  font-size: 1rem;
  color: #BCBCBC;
  font-weight: 400;
  margin: 0 0.2rem 2rem;
}
.dashboard-stats {
  display: grid;
  grid-template-columns: repeat(3, 1fr); /* 3 cards per row */
  gap: 1rem;
  margin-bottom: 2rem;
}
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