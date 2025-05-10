<template>
  <div style="margin-bottom: 2rem;">
    <BaseCard>
      <section class="charts-section">
        <DonutChart
          v-for="chart in charts"
          :key="chart.label"
          :label="chart.label"
          :percentage="chart.percentage"
          :color="chart.color"
        />
      </section>
    </BaseCard>
  </div>
</template>
  
<script>
import DonutChart from './DonutChart.vue';
import BaseCard from './BaseCard.vue';
import { useChartsStore } from '../stores/chartsStore'; 


export default {
  name: 'ChartsSection',
  components: { 
    DonutChart,
    BaseCard,
    },
  created() {
    this.chartsStore.getChartsData()
      .then(() => console.log("Charts data loaded successfully."))
      .catch(error => console.error("Error loading charts data:", error));  
  },
  computed: {
    chartsStore() {
      return useChartsStore();
    },
    charts() {
      return this.chartsStore.charts;
    },
  }
};
</script>
  
<style scoped>
.charts-section {
  display: flex;
  gap: 1rem;
  padding: 1rem 0.5rem;
}

.charts-section > * {
  flex: 1 1 calc(33.333% - 1rem);
  max-width: calc(33.333% - 1rem);
  display: flex;
  justify-content: center;
}

@media (max-width: 900px) {
  .charts-section > * {
    flex: 1 1 calc(50% - 1rem);
    max-width: calc(50% - 1rem);
  }
}

@media (max-width: 600px) {
  .charts-section > * {
    flex: 1 1 100%;
    max-width: 100%;
  }
}
</style>
  