<template>
  <GridLayout row="1">
    <TextView text="Settings Page" />
     <Button text="Log Out" @tap="logout" class="btn btn-primary m-t-20" />
     
  </GridLayout>
</template>
<script>
import Index from './authentication/Index'
import { mapActions } from 'Vuex';
export default {
    methods: {
        ...mapActions([
            'postUserLogout',
            'routeToAuthentication'
        ]),
        
        logout() {
          this.postUserLogout();
          this.routeToAuthentication('Login');
          this.$navigateTo(Index,
            {
              clearHistory: true
            }
          );
        },
    }
}
</script>