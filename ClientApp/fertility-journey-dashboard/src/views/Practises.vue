<template>
  <section class="manage-practises">
    <div class="section-header">
      <h2 class="section-title">Manage Practises</h2>
      <button class="add-button" @click="openAddModal">Add New</button>
    </div>

    <BaseTable :headers="headers" :showSeeAll="false">
      <tr v-for="(practise, i) in practiseStore.practises" :key="i">
        <td>{{ practise.name }}</td>
        <td>{{ practise.tel }}</td>
        <td>{{ practise.email }}</td>
        <td>{{ practise.dateCreated }}</td>
        <td>
          <BaseToggle v-model="practise.active" />
        </td>
        <td class="action-icons">
          <i class="far fa-edit" @click="openEditModal(practise, i)"></i>
          <i class="far fa-trash-alt" @click="openDeleteModal(practise, i)"></i>
        </td>
      </tr>
    </BaseTable>

    <!-- Edit Modal -->
    <PractiseModal
      v-if="showEditModal"
      :title="title"
      :practise="selectedPractise"
      :index="selectedIndex"
      @save="savePractise"
      @close="showEditModal = false"
    />

    <!-- Delete Confirmation -->
    <ConfirmDeleteModal
      v-if="showDeleteModal"
      :practise="selectedPractise"
      :index="selectedIndex"
      @confirm="confirmDelete"
      @close="showDeleteModal = false"
    />
  </section>
</template>

<script>
import { defineComponent } from 'vue'
import { usePractiseStore } from '@/stores/practiseStore'
import BaseTable from '@/components/BaseTable.vue'
import BaseToggle from '@/components/BaseToggle.vue'
import PractiseModal from '@/components/PractiseModal.vue'
import ConfirmDeleteModal from '@/components/ConfirmDeleteModal.vue'

export default defineComponent({
  name: 'Practises',
  components: {
    BaseTable,
    BaseToggle,
    PractiseModal,
    ConfirmDeleteModal
  },
  data() {
    return {
      showEditModal: false,
      showDeleteModal: false,
      selectedPractise: null,
      selectedIndex: null,
      title: "Edit Practise"
    }
  },
  created() {
    this.practiseStore.getPractises()
      .then(() => console.log("Practises loaded successfully."))
      .catch(error => console.error("Error loading practises:", error));  
  },
  computed: {
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
    openEditModal(practise, index) {
      this.title = "Edit Practise"
      this.selectedPractise = { ...practise }
      this.selectedIndex = index
      this.showEditModal = true
    },
    openAddModal() {
      this.selectedPractise = {
        name: '',
        tel: '',
        email: '',
        dateCreated: new Date().toISOString().split('T')[0],
        active: true
      }
      this.selectedIndex = -1
      this.title = "Add New Practise"
      this.showEditModal = true
    },
    openDeleteModal(practise, index) {
      this.selectedPractise = practise
      this.selectedIndex = index
      this.showDeleteModal = true
    },
    confirmDelete(index) {
      this.practiseStore.deletePractise(index)
      this.showDeleteModal = false
    },
    savePractise(practise, index) {
      if (index === -1) {
        this.practiseStore.addPractise(practise);
      } else {
        this.practiseStore.updatePractise(practise, index);
      }
      this.showEditModal = false;
    }
  }
})
</script>

<style scoped>
.manage-practises {
  padding: 2rem;
}

.section-title {
  margin-bottom: 1rem;
  color: #333;
}
.section-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
}
.add-button {
  background-color: var(--color-blue);
  color: white;
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 4px;
  cursor: pointer;
  font-weight: bold;
}
</style>
