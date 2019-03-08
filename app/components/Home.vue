<template>
<GridLayout backgroundColor="gray" columns="*" rows="*,*">
  <Button @tap="clock" class="clock" :text="user_log.status"/>

  <GridLayout backgroundColor="white" col="0" row="1" columns="*,*,*" rows="*,*">
    <Label text="Clock In" col="0" row="0" textAlignment="center"/>
    <Label text="Clock Out" col="2" row="0" textAlignment="center"/>
    <ListView row="1" col="0" separatorColor="transparent">
      <v-template>
        <Label :text="user_log.time_in" col="0" row="1" colSpan="1"/>
        <Label :text="user_log.time_out" col="2" row="1" colSpan="1"/>
      </v-template>
    </ListView>
  </GridLayout>
</GridLayout>
</template>

<script>
import { mapGetters, mapActions } from 'Vuex';
export default {
  data() {
    return {
    };
  },
  computed: {
    ...mapGetters(['user_log','user', 'user_token']),
    
	},
  methods: {
    ...mapActions(['postUserClockIn']),
    clock(){
      var date = new Date();
      var testDate = new Date(date.toUTCString());
      this.postUserClockIn({
        time: testDate,
        location: "Fake Location",
        auth_token: this.user_token,
      })
    },

  }
};
</script>
<style scoped>
  .clock{
    border-radius:100;
    border-width:2;
    border-color:blue;
    background-color:white;
    width:100;
    height:100;
    border-radius:50;
  }
</style>
