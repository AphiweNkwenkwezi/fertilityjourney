<template>
  <BaseCard>
    <section class="new-practices-table">
        <h2 class="section-title">Newest Practises</h2>
        <BaseTable 
          :headers="headers"
          :showSeeAll="practises.length > 3"
          :isShowingAll="showAllPractises"
          @toggle-see-all="toggleSeeAll"
        >
          <tr v-for="(practice, i) in displayedPractises" :key="i">
            <td>{{ practice.name }}</td>
            <td>{{ practice.tel }}</td>
            <td>{{ practice.email }}</td>
            <td>{{ practice.dateCreated }}</td>
            <td>
              <BaseToggle v-model="practice.active" />
            </td>
            <td class="action-icons">
              <i class="far fa-edit"></i>
              <i class="far fa-trash-alt" @click.stop="deletePractise(i)"></i>
            </td>
          </tr>
        </BaseTable>
    </section>
  </BaseCard>
</template>

<script>
import BaseTable from '@/components/BaseTable.vue';
import BaseCard from './BaseCard.vue';
import BaseToggle from './BaseToggle.vue';
import { usePractiseStore } from '../stores/practiseStore';
  
export default {
  name: 'NewPracticesTable',
  components: { 
    BaseTable,
    BaseCard,
    BaseToggle
    },
  data() {
    return {
      headers: ['Practise Name', 'Tel No', 'Email', 'Date Created', 'Status', 'Actions'],
      showAllPractises: false
    };
  },
  created() {
    this.practiseStore.getPractises()
      .then(() => console.log("Practises loaded successfully."))
      .catch(error => console.error("Error loading practises:", error));  
  },
  computed: {
    displayedPractises() {
      return this.showAllPractises ? this.practises : this.practises.slice(0, 3);
    },
    practiseStore() {
      return usePractiseStore();
    },
    practises() {
      return this.practiseStore.practises;
    }
  },
  methods: {
    toggleSeeAll() {
      this.showAllPractises = !this.showAllPractises;
    },
    deletePractise(index) {
      this.practiseStore.deletePractise(index);
    }
  }
};
</script>
  
<style scoped>
.section-title {
  font-size: 1.25rem;
  margin-bottom: 1rem;
  font-weight: 700;
  padding-left: 1rem;
}

th,
td {
  padding-top: 1rem;
  padding-bottom: 1rem;
  padding-left: 1rem;
}

td {
  font-size: 0.85rem;
}
.action-icons {
  display: flex;
  gap: 0.95rem;
}
.action-icons i {    
  color: #67adb9;
  /* margin-right: 10px; */
  cursor: pointer;
  font-size: 1rem;
}
</style>
  