function loadClock(){
  clock();
  // call clock function repeatedly after every second
  setInterval(clock, 1000);
}

function clock(){
  // use Date object to load date, hour, minute, second data
  var date = new Date();
  var hour = date.getHours();
  var hours = hour % 12;
  var minute = date.getMinutes();
  var second = date.getSeconds();

  // use HTML DOM getElementById method to get different html elements by their IDs
  var hourHand = document.getElementById("hour");
  var minuteHand = document.getElementById("min");
  var secondHand = document.getElementById("sec");
  var digClock = document.getElementById("dc");

  // set hour hand degree - the degree change should include changes in hour (360/12 = 30) and minute (30/60 = 0.5)
  var hourDeg = (hours * 30) + (0.5 * minute);
  // set minute hand degree - the degree change should include changes in minute (360/60 = 6) and second (6/60 = 0.1)
  var minuteDeg = (minute * 6) + (0.1 * second);
  // set second hand degree(360/60 = 6)
  var secondDeg = second * 6;

  // transformation - make corresponding degree changes to the hour, minute and second hands of the clock using rotate function
  hourHand.style.transform = 'rotate(' + hourDeg + 'deg)';
  minuteHand.style.transform = 'rotate(' + minuteDeg + 'deg)';
  secondHand.style.transform = 'rotate(' + secondDeg + 'deg)';

  // digital clock - chnages required if the number is less than 10
  if(hours < 10){
    hours = '0' + hours.toString();
  }
  if(minute < 10){
    minute = '0' + minute.toString();
  }
  if(second < 10){
    second = '0' + second.toString();
  }
  
  // setting AM and PM value based on hour value
  var amPm = "AM";
  if(hour > 11){
    amPm = "PM";
  }

  // create a string that contains all the info required for digital clock's display
  var clockStr = hours + ' : ' + minute + ' : ' + second + '  ' + amPm + '  ( ' + date.toString().split(' ', 4).join(' ') + ' )';
  //set the above generated text to the Digital Clock element identified by id "dc"
  digClock.textContent = clockStr;

}
