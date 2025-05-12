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
            <i class="far fa-edit" @click="openEditModal(practice, i)"></i>
            <i class="far fa-trash-alt" @click.stop="openDeleteModal(practice, i)"></i>
          </td>
        </tr>
      </BaseTable>
      
      <!-- Edit Practise Modal -->
      <PractiseModal
        v-if="showModal"
        title="Edit Practise"
        :practise="selectedPractise"
        :index="selectedPractiseIndex"
        @save="updatePractise"
        @close="showModal = false"
      />

      <!-- Confirm Delete Modal -->
      <ConfirmDeleteModal
        v-if="showDeleteModal"
        :practise="selectedPractise"
        :index="selectedPractiseIndex"
        @confirm="deletePractise"
        @close="showDeleteModal = false"
      />
    </section>
  </BaseCard>
  <loading :active.sync="isLoading" :is-full-page="true" color="#67ADB9" loader="dots" :opacity="0.5" background-color="#000"/>
</template>

<script>
import BaseTable from '@/components/BaseTable.vue';
import BaseCard from './BaseCard.vue';
import BaseToggle from './BaseToggle.vue';
import { usePractiseStore } from '../stores/practiseStore';
import PractiseModal from './PractiseModal.vue';
import ConfirmDeleteModal from './ConfirmDeleteModal.vue';
import { useToast } from 'vue-toastification';
  
export default {
  name: 'NewPractisesTable',
  components: { 
    BaseTable,
    BaseCard,
    BaseToggle,
    PractiseModal,
    ConfirmDeleteModal
    },
  setup() {
    const toast = useToast();
    return {
      toast
    };
  },
  data() {
    return {
      isLoading: false,
      showAllPractises: false,
      showModal: false,
      showDeleteModal: false,
      selectedPractise: null,
      selectedPractiseIndex: -1,
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
    },
    headers() {
      return this.practiseStore.headers;
    }
  },
  methods: {
    showLoading() {
      this.isLoading = true;
    },
    closeLoading() {
      this.isLoading = false;
    },
    openEditModal(practice, index) {
      this.selectedPractise = { ...practice };
      this.selectedPractiseIndex = index;
      this.showModal = true;
    },
    toggleSeeAll() {
      this.showAllPractises = !this.showAllPractises;
    },
    updatePractise(updated, index) {
      this.showLoading();

      setTimeout(() => {
        this.practiseStore.updatePractise(updated, index); 
        this.closeLoading();
        this.toast.success("Practise updated successfully!");
      }, 2000);
   
      this.showModal = false;
    },
    openDeleteModal(practise, index) {
      this.selectedPractise = practise;
      this.selectedPractiseIndex = index;
      this.showDeleteModal = true;
    },
    deletePractise(index) {
      this.showLoading()

      setTimeout(() => {
        this.practiseStore.deletePractise(index);
        this.closeLoading();
        this.toast.success("Practise removed successfully!");
      }, 2000);

      this.showDeleteModal = false;
    },
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
</style>
  