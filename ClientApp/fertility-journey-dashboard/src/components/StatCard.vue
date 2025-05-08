<template>
  <BaseCard class="stat-card" shadow>
    <div class="stat-card-content">
      <div class="stat-card-info">
        <div class="stat-title">{{ title }}</div>
        <div class="stat-growth" :class="{ positive: growth >= 0, negative: growth < 0 }">
          <div class="growth-icon" :class="{ positive: growth >= 0, negative: growth < 0 }">
            <i :class="growth >= 0 ? 'fas fa-arrow-up' : 'fas fa-arrow-down'"></i>
          </div>
          {{ growth }}%
        </div>
        <div class="stat-value">{{ formattedAnimatedValue }}</div>
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
      value: Number,
      growth: Number,
      icon: String,
    },
    data() {
      return {
        animatedValue: 0
      };
    },
    mounted() {
      this.animateValue(0, this.value);
    },
    watch: {
      value(newVal, oldVal) {
        this.animateValue(oldVal, newVal);
      }
    },
    computed: {
      formattedAnimatedValue() {
        return this.animatedValue.toLocaleString();
      }
    },
    methods: {
      animateValue(start, end, duration = 2500) {
        const startTime = performance.now();

        const animate = (currentTime) => {
          const elapsed = currentTime - startTime;
          const progress = Math.min(elapsed / duration, 1);
          this.animatedValue = Math.floor(start + (end - start) * progress);

          if (progress < 1) {
            requestAnimationFrame(animate);
          }
        };

        requestAnimationFrame(animate);
      }
    }
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
  font-size: 14px;
  font-weight: 600;
  display: flex;
  align-items: center;
  gap: 0.5rem;
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
.growth-icon {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 24px;
  height: 24px;
  border-radius: 50%;
  font-size: 0.75rem;
}

.growth-icon.positive {
  background-color: #D4EDDA;
  color: #28a745;
}

.growth-icon.negative {
  background-color: #F8D7DA;
  color: #dc3545;
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
  