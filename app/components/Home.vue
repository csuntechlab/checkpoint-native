<template>
<GridLayout :backgroundColor="clock_log.status == false ? 'gray' : 'aqua'"  columns="*" rows="*,*">
  <Button @tap="clock" class="clock" :text="clock_log.status == false ? 'Clock In' : 'Clock Out'"/>

  <GridLayout backgroundColor="white" col="0" row="1" columns="*,*,*" rows="*,*">
    <Label text="Clock In" col="0" row="0" textAlignment="center"/>
    <Label text="Clock Out" col="2" row="0" textAlignment="center"/>
    <ListView for="item in clock_log.time_in" row="1" col="0" separatorColor="transparent">
      <v-template>
        <Label :text="item" col="0" row="1" colSpan="1" textAlignment="center"/>
      </v-template>
    </ListView>
    <ListView for="item in clock_log.time_out" row="1" col="2" separatorColor="transparent">
      <v-template>
        <Label :text="item" col="2" row="1" colSpan="1" textAlignment="center"/>
      </v-template>
    </ListView>
  </GridLayout>
</GridLayout>
</template>
<script src="http://localhost:8098"></script>
<script>
import { mapGetters, mapActions } from 'Vuex';

export default {
  computed: {
    ...mapGetters(['clock_log','user', 'user_token']),
  },
  created() {
    this.$store.dispatch('setInitialClockStatus');
  },
  methods: {
    ...mapActions(['postUserClockIn', 'postUserClockOut', 'setInitialClockStatus']),
    clock(){
      var today = new Date();
      var dateString =
      today.getUTCFullYear() + "-" +
      ("0" + (today.getUTCMonth()+1)).slice(-2) + "-" +
      ("0" + today.getUTCDate()).slice(-2);
      var timeString = 
      ("0" + today.getUTCHours()).slice(-2) + ":" +
      ("0" + today.getUTCMinutes()).slice(-2) + ":" +
      ("0" + today.getUTCSeconds()).slice(-2);
      if(this.clock_log.status){
        this.postUserClockOut({
          date: dateString,
          time: timeString,
          // logId: 'b18b9690-6dfd-11e9-8818-bf3a9b3deab0',
          logId: this.clock_log.log_id
        })
      } else {
         this.postUserClockIn({
          date: dateString,
          time: timeString,
          // auth_token: this.user_token,
        })
      }
      this.setInitialClockStatus();
    },

    location (){
      // var Geolocation = require('nativescript-geolocation');
      // Geolocation.enableLocationRequest();
      // Geolocation.enableLocationRequest().then(res => {console.log(res);});
      var loc1;
      var loc2;
      var location = Geolocation.getCurrentLocation({desiredAccuracy: Accuracy.high})
      .then(res => {
        console.log(res);        
        console.log("checking " + JSON.stringify(Geolocation.distance(res, {latitude: 34.241511, longitude: -118.536259})))
        // Geolocation.distance(res, {latitude: 39, longitude: -113});
        // console.log("checking " + answer);	
      })
        // console.log("checking " + JSON.stringify(Geolocation.distance(loc1, loc2)))
            // console.log(location);
            // console.log(Geolocation);
            // console.log("testtting " + JSON.stringify(Geolocation.isEnabled()));

      // if(!Geolocation.isEnabled()) {
      //       Geolocation.enableLocationRequest(true);
      // } else {
      //   console.log(JSON.stringify(Geolocation));
      // }
      // Geolocation.enableLocationRequest(false);
    }
  },
};
</script>
<style scoped>
  .clock{
    border-radius:100;
    border-width:2;
    border-color:aqua;
    background-color:white;
    width:100;
    height:100;
    border-radius:50;
  }
</style>
