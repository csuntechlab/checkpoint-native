<template>
<GridLayout :backgroundColor="user_log.status == false ? 'gray' : 'aqua'"  columns="*" rows="*,*">
  <!-- <Button @tap="clock" class="clock" :text="user_log.status == false ? 'Clock In' : 'Clock Out'"/> -->
  <Button @tap="location" class="clock" text="TEST"/>

  <GridLayout backgroundColor="white" col="0" row="1" columns="*,*,*" rows="*,*">
    <Label text="Clock In" col="0" row="0" textAlignment="center"/>
    <Label text="Clock Out" col="2" row="0" textAlignment="center"/>
    <ListView for="item in user_log.time_in" row="1" col="0" separatorColor="transparent">
      <v-template>
        <Label :text="item" col="0" row="1" colSpan="1" textAlignment="center"/>
      </v-template>
    </ListView>
    <ListView for="item in user_log.time_out" row="1" col="2" separatorColor="transparent">
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
import  * as Geolocation from "nativescript-geolocation";
import { Accuracy } from'ui/enums';


export default {
  computed: {
    ...mapGetters(['user_log','user', 'user_token']),
  },
  methods: {
    ...mapActions(['postUserClockIn', 'postUserClockOut']),
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
      console.log("THIS IS THE STATUS IN THE HOME COMPONENT: " + this.user_log.log_id);
      console.log("what is in my phone " + localStorage.getItem('Log_uuid'));
      if(this.user_log.status){
        this.postUserClockOut({
          date: dateString,
          time: timeString,
          // logUuid: 'dd92d6e0-4a7c-11e9-b514-bf2bbb65bba2',
          logId: this.user_log.log_id
        })
      } else {
         this.postUserClockIn({
          date: dateString,
          time: timeString,
          auth_token: this.user_token,
        })
      }
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
