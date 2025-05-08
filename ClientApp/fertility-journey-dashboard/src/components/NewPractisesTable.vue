<template>
  <BaseCard>
    <section class="new-practices-table">
        <h2 class="section-title">Newest Practices</h2>
        <BaseTable :headers="headers">
        <tr v-for="(practice, i) in practices.slice(0, 5)" :key="i">
            <td>{{ practice.name }}</td>
            <td>{{ practice.tel }}</td>
            <td>{{ practice.email }}</td>
            <td>{{ practice.dateCreated }}</td>
            <td>
              <BaseToggle v-model="practice.active" />
            </td>
            <td class="action-icons">
            <i class="far fa-edit"></i>
            <i class="far fa-trash-alt"></i>
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
  
  export default {
    name: 'NewPracticesTable',
    components: { 
      BaseTable,
      BaseCard,
      BaseToggle
     },
    data() {
      return {
        headers: ['Practice Name', 'Tel No', 'Email', 'Date Created', 'Status', 'Actions'],
        practices: [
        {
          name: 'Sunrise Health',
          tel: '021-123-4567',
          email: 'info@sunrise.com',
          dateCreated: '2025-05-06',
          active: true,
        },
        {
          name: 'Wellness Clinic',
          tel: '010-987-6543',
          email: 'hello@wellness.co.za',
          dateCreated: '2025-05-07',
          active: false,
        },
        {
          name: 'Greenleaf Medical',
          tel: '031-222-3333',
          email: 'contact@greenleaf.com',
          dateCreated: '2025-05-01',
          active: true,
        },
        {
          name: 'Oceanview Practice',
          tel: '041-456-7890',
          email: 'admin@oceanview.co.za',
          dateCreated: '2025-05-02',
          active: false,
        },
        {
          name: 'Lakeside Family Health',
          tel: '051-321-7654',
          email: 'info@lakesidehealth.org',
          dateCreated: '2025-05-03',
          active: true,
        },
        {
          name: 'Mountainview Care',
          tel: '012-654-3210',
          email: 'support@mountainview.com',
          dateCreated: '2025-05-04',
          active: true,
        },
        {
          name: 'Harmony Clinic',
          tel: '011-222-4444',
          email: 'harmony@clinic.co.za',
          dateCreated: '2025-05-05',
          active: false,
        },
        {
          name: 'Bright Futures Medical',
          tel: '021-777-8888',
          email: 'future@brightmed.co.za',
          dateCreated: '2025-05-08',
          active: true,
        },
      ],

      };
    },
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
  