<template>
  <div class="logs-view">
    <h2 class="section-title">System Logs</h2>

    <BaseTable :headers="headers" :showSeeAll="false">
      <tr v-for="(log, i) in logs" :key="i">
        <td>{{ log.date }}</td>
        <td>{{ log.user }}</td>
        <td>{{ log.action }}</td>
      </tr>
    </BaseTable>
  </div>
</template>

<script>
import BaseTable from '../components/BaseTable.vue';

export default {
  name: 'Logs',
  components: {
      BaseTable
  },
  data() {
    return {
      headers: ['Date', 'User', 'Action'],
      logs: [
        { date: '2025-05-01', user: 'Admin', action: 'Logged in' },
        { date: '2025-05-02', user: 'Dr. Smith', action: 'Updated practise' },
        { date: '2025-05-03', user: 'Admin', action: 'Deleted record' },
        { date: '2025-05-04', user: 'Nurse Joy', action: 'Added patient note' },
        { date: '2025-05-05', user: 'Admin', action: 'Logged out' },
        { date: '2025-05-06', user: 'Dr. Smith', action: 'Viewed schedule' },
        { date: '2025-05-07', user: 'Reception', action: 'Booked appointment' },
        { date: '2025-05-08', user: 'Admin', action: 'Changed system settings' },
        { date: '2025-05-09', user: 'Nurse Joy', action: 'Checked vitals' },
        { date: '2025-05-10', user: 'Dr. Lee', action: 'Created new patient file' },
        { date: '2025-05-11', user: 'Admin', action: 'Backed up database' },
        { date: '2025-05-12', user: 'Dr. Smith', action: 'Uploaded lab results' },
        { date: '2025-05-13', user: 'Reception', action: 'Cancelled appointment' },
        { date: '2025-05-14', user: 'Admin', action: 'Updated permissions' },
        { date: '2025-05-15', user: 'Nurse Joy', action: 'Administered medication' },
        { date: '2025-05-16', user: 'Dr. Lee', action: 'Reviewed patient history' },
        { date: '2025-05-17', user: 'Admin', action: 'Cleared logs' },
        { date: '2025-05-18', user: 'Reception', action: 'Sent confirmation SMS' },
        { date: '2025-05-19', user: 'Dr. Smith', action: 'Reviewed blood test' },
        { date: '2025-05-20', user: 'Admin', action: 'Updated software version' }
      ]
    }
  }
}
</script>

<style scoped>
.logs-view {
  padding: 2rem;
  overflow-y: auto;
  height: 100%;
}
</style>
  