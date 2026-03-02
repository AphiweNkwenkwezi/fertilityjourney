<template>
  <div class="document-monitoring">
    <h1>Document Monitoring Dashboard</h1>

    <div class="controls">
      <input v-model="searchQuery" placeholder="Search documents..." />
      <button @click="fetchDocuments">Refresh</button>
    </div>

    <div v-if="loading">Loading documents...</div>
    <div v-else-if="documents.length === 0">No documents found.</div>

    <ul v-else class="document-list">
      <li v-for="doc in filteredDocuments" :key="doc.id">
        <h3>{{ doc.title }}</h3>
        <p>Status: {{ doc.status }}</p>
        <p>Last Updated: {{ doc.lastUpdated }}</p>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "DocumentMonitoring",
  data() {
    return {
      documents: [],
      loading: false,
      searchQuery: "",
    };
  },
  computed: {
    filteredDocuments() {
      const query = this.searchQuery.toLowerCase();
      return this.documents.filter((doc) =>
        doc.title.toLowerCase().includes(query)
      );
    },
  },
  methods: {
    async fetchDocuments() {
      this.loading = true;
      try {
        // Replace this with actual API call
        const response = await new Promise((resolve) => {
          setTimeout(() => {
            resolve([
              {
                id: 1,
                title: "Project Proposal",
                status: "Reviewed",
                lastUpdated: "2025-05-18",
              },
              {
                id: 2,
                title: "Budget Report",
                status: "Pending",
                lastUpdated: "2025-05-16",
              },
            ]);
          }, 1000);
        });
        this.documents = response;
      } catch (error) {
        console.error("Failed to fetch documents:", error);
      } finally {
        this.loading = false;
      }
    },
  },
  mounted() {
    this.fetchDocuments();
  },
};
</script>

<style scoped>
.document-monitoring {
  max-width: 600px;
  margin: auto;
  padding: 2rem;
  font-family: Arial, sans-serif;
}

.controls {
  margin-bottom: 1rem;
  display: flex;
  gap: 0.5rem;
}

.document-list {
  list-style: none;
  padding: 0;
}

.document-list li {
  border: 1px solid #ccc;
  padding: 1rem;
  margin-bottom: 1rem;
  border-radius: 5px;
}
</style>
