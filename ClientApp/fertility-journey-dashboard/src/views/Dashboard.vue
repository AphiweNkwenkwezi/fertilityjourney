<template>
  <main class="content">
      <!-- Page header -->
      <div class="page-header">
        <h1>Welcome {{ user.name }}!</h1>
        <p class="subheading">Your current stats at a glance.</p>
      </div>

      <!-- Dashboard totals -->
      <div class="dashboard-stats">
        <StatCard title="Total Practices" :value=120 :growth="4" icon="fas fa-clinic-medical" />
        <StatCard title="Total Subscribers" :value=3452 :growth="2" icon="fas fa-user-friends" />
        <StatCard title="Total Treatments" :value=212 :growth="5" icon="fas fa-pills" />
        <StatCard title="Total Consents" :value=168 :growth="-1" icon="fas fa-file-signature" />
        <StatCard title="Total Consents Signed" :value=142 :growth="3" icon="fas fa-file-signature" />
        <StatCard title="Total Fact Sheets Read" :value=2678 :growth="6" icon="fas fa-book-open" />
      </div>

      <!-- Charts summaries -->
      <ChartsSection />

      <!-- New Practises Summary -->
      <NewPractisesTable />
    </main>
</template>

<script>
import StatCard from '../components/StatCard.vue';
import NewPractisesTable from '../components/NewPractisesTable.vue';
import ChartsSection from '../components/ChartsSection.vue';
import { useUserStore } from '../stores/userStore.js';

export default {
  name: 'Dashboard',
  components: {
    StatCard,
    NewPractisesTable,
    ChartsSection,
  },
  created() {
    this.userStore.getUser()
      .then(() => console.log("User data fetched successfully."))
      .catch(error => console.error("Error fetching user data:", error));  
  },
  computed: {
    userStore() {
      return useUserStore();
    },
    user() {
      return this.userStore ? this.userStore.user : {};
    },
  }
}
</script>

<style scoped>
.content {
  padding: 2rem;
  overflow-y: auto;
  height: 100%;
}

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
  grid-template-columns: repeat(3, 1fr); 
  gap: 1rem;
  margin-bottom: 2rem;
}

@media (max-width: 1024px) {
  .dashboard-stats {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 768px) {
  .dashboard-layout {
    flex-direction: column;
  }

  .dashboard-stats {
    grid-template-columns: 1fr;
  }

  .content {
    padding: 1rem;
  }

  .page-header h1 {
    font-size: 1.5rem;
  }

  .page-header .subheading {
    font-size: 0.9rem;
  }
}
</style>