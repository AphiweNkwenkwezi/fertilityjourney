<template>
    <div class="donut-chart">
      <Doughnut 
        :data="chartData" 
        :options="chartOptions" 
      />
      <div class="donut-info">
        <p class="percentage">{{ percentage }}%</p>
        <div class="label">{{ label }}</div>
      </div>
    </div>
  </template>
  
<script>
  import { Doughnut } from 'vue-chartjs';

  export default {
    name: 'DonutChart',
    components: { Doughnut },
    props: {
      label: String,
      percentage: Number,
      color: String,
    },
    computed: {
      chartData() {
        return {
          labels: ['Completed', 'Remaining'],
          datasets: [
            {
              data: [this.percentage, 100 - this.percentage],
              backgroundColor: [this.color, '#EAEAEA'],
              borderWidth: 0,
            },
          ],
        };
      },
      chartOptions() {
        return {
          cutout: '70%',
          plugins: {
            legend: { display: false },
            tooltip: { enabled: false },
          },
        };
      },
    },
  };
  </script>
  
<style scoped>
.donut-chart {
  display: flex;
  align-items: center;
  gap: 1rem;
  margin: 1rem;
}
.donut-info {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}
.donut-chart canvas {
  width: 100px !important;
  height: 100px !important;
}

.label {
  font-weight: 400;
  font-size: 1rem;
  color: #747474;
  white-space: nowrap;
}
.percentage {
    font-weight: 700;
    color: var(--color-text-grey);
    font-size: 1.5rem;
    margin-block: 0;
}
</style>
  