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
  <loading :active.sync="isLoading" :is-full-page="true" color="#67ADB9" loader="dots" :opacity="0.5" background-color="#000"/>

  <!-- Success Popup with overlay -->
  <!-- <transition name="fade">
    <div v-if="showSuccess" class="success-overlay">
      <div class="success-popup">
        <i class="fas fa-check-circle success-icon"></i>
        <i class="fas fa-check success-icon"></i>
        <span class="success-heading">Practise</span>
        <span class="success-sub-heading">Saved successfully!</span>
      </div>
    </div>
  </transition> -->
</template>

<script>
import { defineComponent } from 'vue'
import { usePractiseStore } from '@/stores/practiseStore'
import BaseTable from '@/components/BaseTable.vue'
import BaseToggle from '@/components/BaseToggle.vue'
import PractiseModal from '@/components/PractiseModal.vue'
import ConfirmDeleteModal from '@/components/ConfirmDeleteModal.vue'
import { useToast } from 'vue-toastification'

export default defineComponent({
  name: 'Practises',
  components: {
    BaseTable,
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
      title: "Edit Practise",
      isLoading: false,
      showSuccess: true,
      showEditModal: false,
      showDeleteModal: false,
      selectedPractise: null,
      selectedIndex: null,   
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
      this.isLoading = true;
      setTimeout(() => {
        this.practiseStore.deletePractise(index);
        this.isLoading = false;
        this.toast.success("Practise removed successfully!");
      }, 2000);
      
      this.showDeleteModal = false
    },
    savePractise(practise, index) {
      this.isLoading = true;
      setTimeout(() => {
        if (index === -1) {
          this.practiseStore.addPractise(practise);
          this.isLoading = false;
          this.showSuccess = true;

          setTimeout(() => {
            this.showSuccess = false;
          }, 2500)
          this.toast.success("Practise added successfully!");
        } else {
          this.practiseStore.updatePractise(practise, index);
          this.isLoading = false;
          this.toast.success("Practise updated successfully!");
        }
      }, 2000);

      this.showEditModal = false;
    },
  }
})
</script>

<style scoped>
.manage-practises {
  padding: 2rem;
  overflow-y: auto;
  height: 100%;
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

/* Pop-up styles */
.overlay,
.success-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.4);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
}
.success-popup {
  position: fixed;
  top: 40%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: white;
  color: var(--color-text-grey);
  padding: 2rem;
  border-radius: 10px;
  font-size: 1.2rem;
  font-weight: bold;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
  z-index: 1001;
  text-align: center;
  width: auto;
  min-width: 350px;
  min-height: 300px;
}

.success-icon {
  font-weight: 300;
  /* font-size: 4rem; */
  color: #28a745;
  margin-bottom: 1.5rem;
}
.success-heading {
  font-size: 1.25rem;
  color: #858585;
  font-weight: 500;
  display: block;
}
.success-sub-heading {
  font-size: 2rem;
  color: var(--color-text-grey);
  font-weight: 600;
  margin-bottom: 2rem;
}
/* Fade transition */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

/* Loader animation */
@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}
</style>
