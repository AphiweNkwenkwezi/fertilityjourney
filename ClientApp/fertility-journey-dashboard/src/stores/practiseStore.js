import { defineStore } from 'pinia';
import { fetchPractises } from '../services/practiseService.js';

export const  usePractiseStore = defineStore('practise', {
  state: () => ({
    practises: []
  }),
  actions: {
    async getPractises() {
      try {
        const practises = await fetchPractises();

        this.$patch({   
          practises: practises
        });
      } catch (error) {
        console.error("Error getting practises: ", error);
      }
    },
    deletePractise(index) {
      this.practises.slice(index, 1);
    },
    updatePractise(updated, index) {
      if (index !== -1) {
        this.practises.splice(index, 1, updated);
      }
    }
  },
});