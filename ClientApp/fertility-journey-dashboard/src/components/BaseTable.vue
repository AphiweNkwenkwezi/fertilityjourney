<template>
    <div class="base-table">
      <table class="modern-table">
        <thead>
          <tr>
            <th v-for="(header, i) in headers" :key="i">{{ header }}</th>
          </tr>
        </thead>
        <tbody>
          <slot></slot>
        </tbody>
      </table>
      <div clase="table-divider"></div>
      <div class="see-all" v-if="showSeeAll">
        <a href="#" @click.prevent="$emit('toggle-see-all')">
          {{ isShowingAll ? 'See Less' : 'See All' }}
          <i class="fas fa-chevron-right" style="margin-left: 6px;"></i>
        </a>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'BaseTable',
    props: {
      headers: Array,
      showSeeAll: {
        type: Boolean,
        default: true,
      },
      isShowingAll: {
        type: Boolean,
        default: false
      }
    },
  };
  </script>
  
  <style scoped>
  .base-table {
    overflow-x: auto;
    background: #fff;
  }
  
  .modern-table {
    width: 100%;
    border-collapse: collapse;
    min-width: 800px;
  }
  
  thead {
    background-color: #f5f5f5;
    text-align: left;
  }
  
  th {
    padding: 14px 16px;
    font-size: 0.9rem;
    color: #747474;
  }

  td {
    padding: 14px 16px;
    color: var(--color-text-grey);
  }
  
  td input[type='checkbox'] {
    transform: scale(1.2);
    cursor: pointer;
  }
  
  .action-icons i {
    color: #67adb9;
    margin-right: 10px;
    cursor: pointer;
  }
  
  .see-all {
    text-align: right;
    padding: 10px 16px;
    font-size: 0.75rem;
    font-weight: 600;
  }
  .see-all a {
    color: #67adb9;
    text-decoration: none;
  }
  .table-divider {
    background-color: rgba(157, 157, 157, 0.24);
    height: 2px;
    }
  </style>
  