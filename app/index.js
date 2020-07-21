import clock from "clock";
import document from "document";
import { preferences } from "user-settings";
import { 
  hoursToAngle,
  minutesToAngle,
  secondsToAngle,
       } from "../common/utils";

// Update the clock every minute
clock.granularity = "seconds";

let hourHand = document.getElementById("hours");
let minHand = document.getElementById("mins");
let secHand = document.getElementById("secs");

// Get a handle on the <text> element
//const myLabel = document.getElementById("myLabel");

// Update the <text> element every tick with the current time
clock.ontick = () => {
  let now = new Date();
  let hours = now.getHours() % 12;
  let mins = now.getMinutes();
  let secs = now.getSeconds();
   
  
  /* let now = new Date();
  let hours = 1;
  let mins = 51;
  let secs = 0; */

  hourHand.groupTransform.rotate.angle = hoursToAngle(hours, mins);
  minHand.groupTransform.rotate.angle = minutesToAngle(mins);
  secHand.groupTransform.rotate.angle = secondsToAngle(secs);
  

}
