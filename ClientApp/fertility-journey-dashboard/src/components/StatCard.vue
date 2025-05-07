<template>
  <BaseCard class="stat-card" shadow>
    <div class="stat-card-content">
      <div class="stat-card-info">
        <div class="stat-title">{{ title }}</div>
        <div class="stat-value">{{ value }}</div>
        <div class="stat-growth" :class="{ positive: growth >= 0, negative: growth < 0 }">
          <i :class="growth >= 0 ? 'fas fa-arrow-up' : 'fas fa-arrow-down'"></i>
          {{ Math.abs(growth) }}%
        </div>
      </div>
      <div class="stat-icon">
        <i :class="icon"></i>
      </div>
    </div>
  </BaseCard>
</template>

<script>
  import BaseCard from '@/components/BaseCard.vue';
  
  export default {
    components: {
      BaseCard,
    },
    props: {
      title: String,
      value: [String, Number],
      growth: Number,
      icon: String,
    },
  };
</script>
  
<style scoped>
.stat-card {
  justify-content: space-between;
  align-items: center;
  padding: 1.25rem;
  border-radius: 12px;
  background-color: #fff;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
  transition: box-shadow 0.2s ease-in-out;
}

.stat-card:hover {
  box-shadow: 0 6px 10px rgba(0, 0, 0, 0.1);
}

.stat-card-info {
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
}

.stat-title {
  font-size: 14px;
  color: var(--color-text-grey);
  font-weight: 600;
}

.stat-value {
  font-size: 32px;
  font-weight: 700;
  color: var(--color-text-grey);
}

.stat-growth {
  font-size: 0.875rem;
  display: flex;
  align-items: center;
  gap: 0.25rem;
}

.stat-growth.positive {
  color: #28a745;
}

.stat-growth.negative {
  color: #dc3545;
}

.stat-card-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.stat-icon {
  background-color: #E4F7F9;
  border-radius: 50%;
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.25rem;
  color: #067D82;
}

@media (max-width: 600px) {
  .stat-card-content {
    flex-direction: column;
    align-items: flex-start;
    gap: 1rem;
  }

  .stat-icon {
    align-self: flex-end;
  }
}
</style>
  