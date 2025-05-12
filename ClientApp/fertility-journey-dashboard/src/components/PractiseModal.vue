<template>
    <BaseModal :title="title" @close="close">  
      <form @submit.prevent="save">
        <div class="form-group">
          <label for="name">Name</label>
          <input id="name" type="text" v-model="form.name" required />
        </div>
        <div class="form-group">
          <label for="tel">Telephone</label>
          <input id="tel" type="text" v-model="form.tel" required />
        </div>
        <div class="form-group">
          <label for="email">Email</label>
          <input id="email" type="email" v-model="form.email" required />
        </div>
        <div class="form-group">
          <label for="dateCreated">Date Created</label>
          <input id="dateCreated" type="date" v-model="form.dateCreated" required />
        </div>
        <div class="form-group checkbox">
          <label>
            <input type="checkbox" v-model="form.active" />
            <span class="checkbox-label">Active</span>
          </label>
        </div>
        <div class="modal-actions">
          <button class="secondary-button" type="button" @click="close">Cancel</button>
          <button type="submit">Save</button>
        </div>
      </form>
    </BaseModal>  
  </template>
  
  <script>
  import { Title } from 'chart.js';
import BaseModal from './BaseModal.vue';

  export default {
    name: 'PractiseModal',
    components: {
      BaseModal
    },
    props: {
      title: {
        type: String,
        required: true
      },
      practise: {
        type: Object,
        required: true
      },
      index: {
        type: Number,
        required: true
      }
    },
    data() {
      return {
        form: { ...this.practise }
      };
    },
    methods: {
      save() {
        this.$emit('save', this.form, this.index);
      },
      close() {
        this.$emit('close');
      }
    }
  };
  </script>
  
<style scoped> 
.form-group {
margin-bottom: 1rem;
}

input[type='text'],
input[type='email'],
input[type='date'] {
  display: block;
  width: 95%;
  padding: 0.6rem;
  font-size: 1rem;
  border: 1px solid #ccc;
  border-radius: 6px;
}
.form-group {
  margin-bottom: 1rem;
}
label {
  display: block;
  margin-bottom: 0.5rem;
  color: #555;
  font-size: 14px;
  font-weight: 600;
}
.checkbox label {
    display: flex;
    align-items: center;
}
.checkbox-label {
    margin-left: 10px;
}

.modal-actions {
  display: flex;
  justify-content: space-between;
  margin-top: 1.5rem;
}
.modal-actions button {
  min-width: 100px;
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
button[type='submit']:hover {
  background-color: var(--color-blue-onhover);
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
  