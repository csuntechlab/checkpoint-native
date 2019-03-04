<template>
<GridLayout backgroundColor="gray" columns="*" rows="*,*">
  <Button @tap="clockIt" class="clock" :text="clocktext"/>
  <!-- <Button v-else @tap="clockOut" class="clock" :text="clocktext"/> -->

  <GridLayout backgroundColor="white" col="0" row="1" columns="*,*,*" rows="*,*">
    <Label text="Clock In" col="0" row="0" textAlignment="center"/>
    <Label text="Clock Out" col="2" row="0" textAlignment="center"/>
    <!-- <Label :text="timein" col="0" row="1" colSpan="2" textAlignment="center"/>
    <Label :text="timeout" col="2" row="1" colSpan="2" textAlignment="center"/> -->
    <ListView row="1" col="0" separatorColor="transparent" for="time in times">
      <v-template>
        <Label :text="time" col="0" row="1" colSpan="1"/>
      </v-template>
      <!-- <v-template if="$odd"> 
         <Label text="move" col="2" row="1" colSpan="1"/> 
      </v-template> -->
    </ListView>
    <ListView row="1" col="2" for="time in times" separatorColor="transparent">
      <v-template>
        <Label text="move" col="2" row="1" colSpan="1"/> 
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
      times: [],
      clocktext: "Clock In" 
    };
  },
  
  methods: {
    clockIt(){
      if(this.clocktext == "Clock In"){
        this.clocktext = "Clock Out";
      } else {
        this.clocktext = "Clock In";
      }
      var date = new Date();
      this.times.push(new Date(date.toUTCString()));
    },
    // clockOut(){
    //   var date = new Date();
    //   time.push(new Date(date.toUTCString()));
    //   this.clocktext = "Clock In";
    // }
    onItemTap(event) {
      console.log(event.index)
      console.log(event.item)
    }

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
