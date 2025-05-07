<template>
  <base-nav class="navbar-top navbar-dark" id="navbar-main" :show-toggle-button="false" expand>
    <ul class="navbar-nav align-items-center ml-auto ml-md-0">
      <base-dropdown
        menu-on-right
        class="nav-item"
        tag="li"
        title-tag="a"
        menu-classess="dropdown-menu dropdown-menu-right py-0 overflow-hidden"
      >
        <template>
          <div class="dropdown-header noti-title">
            <h6 class="text-overflow m-0">Adrian Stefan</h6>
          </div>
          <a href="" class="dropdown-item">
            <i class="ni ni-single-02"></i>
            <span>My profile</span>
          </a>
          <div class="dropdown-divider"></div>
          <a href="" @click.prevent="logout()" to="" class="dropdown-item">
            <i class="ni ni-user-run"></i>
            <span>Logout</span>
          </a>
        </template>
      </base-dropdown>
    </ul>
  </base-nav>
</template>
<script>
export default {
  data() {
    return {
      avatar: null,
    };
  },
  computed: {
    profileImage() {
      return this.avatar ? this.avatar : '/img/placeholder.jpg';
    },
  },
  methods: {
    async logout() {
      try {
        // this.$store.dispatch("logout");
      } catch (error) {
        this.$notify({
          type: 'danger',
          message: 'Oops, something went wrong!',
        });
      }
    },
  },
};
</script>
