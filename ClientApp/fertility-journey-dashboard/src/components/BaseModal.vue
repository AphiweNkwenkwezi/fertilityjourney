<template>
  <div class="modal-overlay" @click.self="close">
    <div class="modal" role="dialog" aria-modal="true" aria-labelledby="modal-title">
      <h2 id="modal-title">{{ title }}</h2>
      <div class="divider"></div>
      <slot></slot>
      <slot name="footer"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'BaseModal',
  props: {
    title: {
      type: String,
      default: 'Title'
    }
  },
  methods: {
    close() {
      this.$emit('close');
    }
  }
}
</script>

<style>
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999;
}
.modal {
  background: white;
  padding: 2rem;
  border-radius: 8px;
  width: 90%;
  max-width: 450px;
}
h2 {
  margin-bottom: 1rem;
}
.divider {
  background-color: rgba(157, 157, 157, 0.24);
  height: 1px;
  margin-bottom: 1rem;
}
</style>