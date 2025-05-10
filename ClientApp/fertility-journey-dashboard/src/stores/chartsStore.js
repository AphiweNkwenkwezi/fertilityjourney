import { defineStore } from 'pinia';
import { fetchChartsData } from '../services/chartsService.js';

export const  useChartsStore = defineStore('charts', {
  state: () => ({
    charts: []
  }),
  actions: {
    async getChartsData() {
      try {
        const charts = await fetchChartsData();

        this.$patch({   
          charts: charts
        });
      } catch (error) {
        console.error("Error getting charts data: ", error);
      }
    },
  },
});