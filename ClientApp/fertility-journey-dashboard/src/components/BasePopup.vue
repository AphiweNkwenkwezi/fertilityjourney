<template>
  <div v-if="visible" class="popup-overlay">
    <div class="popup-box">
      <div class="icon-wrapper" :class="iconClass">
        <div class="icon">{{ resolvedIcon }}</div>
      </div>
      <h2>{{ title }}</h2>
      <p>{{ message }}</p>
      <div v-if="showButton">
        <div class="divider"></div>
        <button @click="closePopup">Got it</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    visible: {
      type: Boolean,
      required: true,
    },
    type: {
      type: String,
      default: 'success', // success | info | error
    },
    title: {
      type: String,
      default: '',
    },
    message: {
      type: String,
      default: '',
    },
    icon: {
      type: String,
      default: '',
    },
    showButton: {
      type: Boolean,
      default: true
    }
  },
  emits: ['close'],
  computed: {
    resolvedIcon() {
      if (this.icon) return this.icon;
      if (this.type === 'error') return 'X';
      if (this.type === 'info') return 'i';
      return '✓';
    },
    iconClass() {
      return {
        success: this.type === 'success',
        info: this.type === 'info',
        error: this.type === 'error',
      };
    },
  },
  methods: {
    closePopup() {
      this.$emit('close');
    },
  },
};
</script>

<style scoped>
.popup-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.3);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
}

.popup-box {
  background: white;
  padding: 3rem;
  border-radius: 12px;
  text-align: center;
  max-width: 400px;
  width: 90%;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.15);
}

.icon-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 3rem;
}

.icon {
  font-size: 2.5rem;
  width: 70px;
  height: 70px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.icon-wrapper.success .icon {
  background-color: #d6f0d6;
  color: #4CAF50;
}

.icon-wrapper.info .icon {
  background-color: #e0f0ff;
  color: #007bff;
}

.icon-wrapper.error .icon {
  background-color: #ffe0e0;
  color: #d93025;
}

button {
  background-color: var(--color-blue);
  color: white;
  border: none;
  padding: 0.6rem 1.2rem;
  border-radius: 6px;
  cursor: pointer;
  margin-top: 1rem;
}

button:hover {
  background-color: var(--color-blue-onhover);
}

.divider {
  background-color: rgba(157, 157, 157, 0.24);
  height: 2px;
  margin-top: 3rem;
}
</style>
