<template>
  <li>
    <router-link
      :to="item.path"
      class="nav-link"
      :class="{ active }"
    >
      <i :class="item.icon" class="icon"></i>
      <span class="text">{{ item.name }}</span>
    </router-link>
  </li>
</template>

<script>
export default {
  name: 'SidebarItem',
  props: {
    item: Object,
    active: Boolean
  }
};
</script>

<style scoped>
.nav-link {
  display: flex;
  align-items: center;
  padding: 0.75rem 1rem;
  color: var(--color-text-grey);
  text-decoration: none;
  border-radius: 8px;
  transition: background 0.2s;
  font-weight: 700;
  font-size: 12px;
  line-height: 18px;
}
.nav-link.active {
  background-color: rgba(103, 173, 185, 0.08);
  font-weight: 700;
  color: #5F97A0;
}
.icon {
  margin-right: 10px;
  width: 20px;
  text-align: center;
}
</style>