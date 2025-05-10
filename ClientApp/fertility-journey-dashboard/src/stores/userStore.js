import { defineStore } from 'pinia';
import { authenticate } from '@/services/authService';
import router from '@/router'

export const useUserStore = defineStore('user', {
  state: () => ({
    username: '',
    isLoggedIn: false,
    user: { 
      name: '',
      lastname: '',
      email: '',
      avatar: ''
    },
  }),
  actions: {
    login(name) {
      this.username = name;
      this.isLoggedIn = true;
    },
    logout() {
      console.log('Logging out...');
      this.username = 'Guest';
      this.isLoggedIn = false;
      router.push('/login')
    },
    async getUser() {
      try {
        const user = await authenticate(this.username);

        this.$patch({   
          user: {
            name: user.name,
            lastname: user.lastname,
            email: user.email,
            avatar: user.avatar
          } 
        });
      } catch (error) {
        console.error("Error getting user: ", error);
      }
    }
  },
});
