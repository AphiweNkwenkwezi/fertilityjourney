<template>
  <div style="margin-bottom: 2rem;">
    <BaseCard>
      <section class="charts-section">
        <DonutChart label="Pending" :percentage="35" color="#F7C548" />
        <DonutChart label="Registered" :percentage="50" color="#6FCF97" />
        <DonutChart label="Post Treatment" :percentage="15" color="#67ADB9" />
      </section>
    </BaseCard>
  </div>
</template>
  
  <script>
  import DonutChart from './DonutChart.vue';
  import BaseCard from './BaseCard.vue';
  
  export default {
    name: 'ChartsSection',
    components: { 
      DonutChart,
      BaseCard,
     },
  };
  </script>
  
<style scoped>
.charts-section {
  display: flex;
  gap: 1rem;
  padding: 1rem 2rem;
}

.charts-section > * {
  flex: 1 1 calc(33.333% - 1rem);
  max-width: calc(33.333% - 1rem); /* Prevents the last chart from stretching full-width */
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
  