<template>
<AbsoluteLayout>
  <DockLayout marginBottom="15%" width="100%" backgroundColor="gray" stretchLastChild="true">
    <GridLayout rows="*, 2*" columns="2*, 2*" dock="bottom" style="border-top-right-radius:25;border-top-left-radius:25;" height="50%" width="100%" backgroundColor="white">
      <Label text="Clock In" col="0" row="0" textAlignment="center"/>
      <Label @itemTap="check" text="Clock Out" col="2" row="0" textAlignment="center"/>
      <Label :text="timeIn" col="0" row="1" textAlignment="center"/>
      <Label :text="timeOut" col="2" row="1" textAlignment="center"/>
    </GridLayout>
      <Button @itemTap="clockIn()" class="btn btn-primary m-t-20"></Button>

  </DockLayout>
</AbsoluteLayout>
</template>
<script src="http://localhost:8098"></script>
<script>
import { mapGetters, mapActions } from 'Vuex';
export default {
  data() {
    return {
      timeIn: 0,
      timeOut: 0,
      clocktext: "Clock In" 
    };
  },
  
  methods: {
    check(){console.log("does it work")},
    clockIn(self){
      console.log("here");
      // var date = new Date();
      // date = date.addHours(14);
      // this.timeIn = new Date(date.toUTCString());
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
