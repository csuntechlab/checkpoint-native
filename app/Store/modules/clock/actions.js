//CLOCK MUTATION TYPES
import _clock from '../../mutation-types/clock';
//CLOCK APIS
import Time from '../../../api/clock';
//USER PROFILES
import _user from "../../mutation-types/user";


import * as Geolocation from "nativescript-geolocation";
import { Accuracy } from "ui/enums";

export default {
    postUserClockIn (context, payload) {
        Time.postUserClockInAPI(
            payload,
            (success) => {
              context.commit(_clock.ADD_CLOCK_LOG_ID_LOCALLY, success.data.log_id);
              context.commit(_clock.CLOCK_IN, success);
              context.commit(_clock.SET_STORE_WITH_CLOCK_LOG_ID);
              context.commit(_clock.SET_CLOCK_LOG_ID);
            },
            (error) => TNSFancyAlert.showError("Clock In Failed", error),
        );
    },
    postUserClockOut (context, payload) {
        Time.postUserClockOutAPI (
          payload,
            (success) => {
              context.commit(_clock.CLOCK_OUT, payload);
              context.commit(_clock.REMOVE_CLOCK_LOG_ID_LOCALLY);
              context.commit(_clock.SET_CLOCK_STATUS);
              context.commit(_clock.REMOVE_CLOCK_LOG_ID_FROM_STORE);
            },

            (error) => TNSFancyAlert.showError("Clock Out Failed", error),
        );
    },

    setInitialClockStatus (context) {
      context.commit(_clock.SET_STORE_WITH_CLOCK_LOG_ID);
      context.commit(_clock.SET_CLOCK_STATUS);
    },

    checkUserLocation (context) {
        var location = Geolocation.getCurrentLocation({
          desiredAccuracy: Accuracy.high
        }).then(res => {
          console.log("current location " + JSON.stringify(res));
          console.log(
            "checking " +
              JSON.stringify(
                Geolocation.distance(res, {
                  latitude: 34.241511,
                  longitude: -118.536259
                })
              )
          );
            if (Geolocation.distance(res, { latitude:34.238125, longitude:-118.530121 }) < 5) {
              console.log("pass");
              // context.commit(_clock.UPDATE_USER_STATUS, {verify: true});
            } else {
              console.log("fail");
              // context.commit(_clock.UPDATE_USER_STATUS);
            }
          // console.log("checking " + answer);
        });
    }
  };

   