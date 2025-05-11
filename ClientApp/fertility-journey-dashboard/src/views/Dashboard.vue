<template>
  <main class="content">
      <!-- Page header -->
      <div class="page-header">
        <h1>Welcome {{ user.name }}!</h1>
        <p class="subheading">Your current stats at a glance.</p>
      </div>

      <!-- Dashboard totals -->
      <div class="dashboard-stats">
        <StatCard
          v-for="total in totals"
          :title="total.title"
          :value="total.value"
          :growth="total.growth"
          :icon="total.icon"
        />
      </div>

      <!-- Charts summaries -->
      <ChartsSection />

      <!-- New Practises Summary -->
      <NewPractisesTable />
    </main>
    <loading :active.sync="isLoading" :is-full-page="true" color="#67ADB9" loader="dots" :opacity="0.5" background-color="#000"/>
</template>

<script>
import StatCard from '../components/StatCard.vue';
import NewPractisesTable from '../components/NewPractisesTable.vue';
import ChartsSection from '../components/ChartsSection.vue';
import { useUserStore } from '../stores/userStore.js';
import { useTotalsStore } from '../stores/totalsStore.js';
import { useToast } from 'vue-toastification';

export default {
  name: 'Dashboard',
  components: {
    StatCard,
    NewPractisesTable,
    ChartsSection,
  },
  setup() {
    const toast = useToast();
    return {
      toast
    };
  },
  created() {
    this.totalsStore.getTotals()
      .then(() => console.log("Totals data fetched successfully."))
      .catch(error => console.error("Error fetching totals data:", error));  
  },
  data() {
    return {
      isLoading: false
    } 
  },
  computed: {
    userStore() {
      return useUserStore();
    },
    totalsStore() {
      return useTotalsStore();
    },
    user() {
      return this.userStore ? this.userStore.user : {};
    },
    totals() {
      return this.totalsStore ? this.totalsStore.totals : []
    }
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