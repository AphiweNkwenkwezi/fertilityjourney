<template>
  <BaseModal title="Confirm Deletion" @close="$emit('close')">
    <p>Are you sure you want to delete <strong>{{ practise.name }}</strong>?</p>

    <template #footer>
      <div class="modal-actions">
        <button class="secondary-button" type="button" @click="$emit('close')">Cancel</button>
        <button class="danger-button" type="button" @click="$emit('confirm', index)">Delete</button>
      </div>
    </template>
  </BaseModal>
</template>

<script>
import BaseModal from './BaseModal.vue';

export default {
  name: 'ConfirmDeleteModal',
  components: { BaseModal },
  props: {
    practise: { 
      type: Object,
      required: true
    },
    index: {
      type: Number,
      required: true
    }
  }
}
</script>
<style>
.danger-button {
  background-color: var(--color-red);
  color: white;
  border: none;
  padding: 0.6rem 1.2rem;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.2s ease-in-out;
}
.danger-button:hover {
  background-color: var(--color-red-darker);
}
.secondary-button {
  background-color: transparent;
  color: var(--color-blue);
}
.modal-actions {
  display: flex;
  justify-content: space-between;
  margin-top: 1.5rem;
}
button {
  padding: 0.5rem 1rem;
  font-weight: bold;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}
button[type='submit'] {
  background-color: var(--color-blue);
  color: white;
  border: none;
}
button.secondary-button {
  background-color: transparent;
  color: var(--color-blue);
}
button.secondary-button:hover {
  background-color: rgba(103, 173, 185, 0.10);
  color: var(--color-blue);
}
</style>
  