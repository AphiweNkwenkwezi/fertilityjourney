import { defineStore } from 'pinia';
import { fetchTotals } from '../services/totalsService.js';

export const  useTotalsStore = defineStore('totals', {
  state: () => ({
    totals: []
  }),
  actions: {
    async getTotals() {
      try {
        const totals = await fetchTotals();

        this.$patch({   
          totals: totals
        });
      } catch (error) {
        console.error("Error getting totals data: ", error);
      }
    },
  },
});