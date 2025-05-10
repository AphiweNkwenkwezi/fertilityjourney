<template>
	<div v-if="show" class="dropdown-menu" @click.stop>
    <div class="dropdown-menu-header-container">
      <p class="dropdown-menu-header">{{ name }}</p>
      <p class="dropdown-menu-subheader">{{ email }}</p>
    </div>
    <div class="dropdown-menu-divider"></div>
    <router-link to="/profile" class="dropdown-item">Profile</router-link>
    <div class="dropdown-menu-divider"></div>
    <a href="#" @click.prevent="$emit('logout')" class="dropdown-item">Logout</a>
  </div>
</template>

<script>
export default {
  name: 'AccountDropdown',
  props: {
    name: {
      type: String,
      required: true
    },
    email: {
      type: String,
      required: true
    },
    show: {
      type: Boolean,
      default: false
    }
  }
}
</script>
<style>
.dropdown-icon {
  font-size: 12px;
  color: var(--color-blue);
}
.dropdown {
  position: relative;
}
.dropdown-menu {
  position: absolute;
  top: 4.5rem;
  right: 0;
  background: #fff;
  border-radius: 6px;
  box-shadow: 0 4px 10px rgba(0,0,0,0.1);
  width: auto;
  z-index: 100;
}

.dropdown-item {
  margin: 0.75rem 0.75rem; /* space around the item */
  padding: 0.75rem 0.75rem;  /* space inside the item */
  display: block;
  text-decoration: none;
  color: #333;
  font-size: 14px;
  border-radius: 6px; /* optional: makes it look more modern */
  transition: background 0.2s ease;
}
.dropdown-item:hover {
  background: rgba(157, 157, 157, 0.08);
}
.dropdown-menu-header {
  font-weight: 600;
  font-size: 16px;
  margin-block: 0.1rem;
}
.dropdown-menu-subheader {
  font-weight: 400;
  font-size: 14px;
  margin-block: 0.1rem;
  color: #747474;
}
.dropdown-menu-header-container {
  padding: 0.75rem 1.25rem;
}
.dropdown-menu-divider {
  background-color: rgba(157, 157, 157, 0.24);
  height: 1px;
}
</style>
