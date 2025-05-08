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
    justify-content: space-between;
    padding: 1rem 2rem;
    gap: 1rem;
    flex-wrap: wrap;
  }
  </style>
  