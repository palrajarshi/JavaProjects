//interval for setinterval so that it can be cleared by clear timeout
let interval;

//month array so that months can be printed rather than 0-11(Jan-Dec)
let Months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

//Days array so that days can be printed rather than 0-6(Sun-Sat)
let Days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

let timenow = new Date();
let fetch = document.querySelector("#spanbox > p");

//datenow variable for storing date
let datenow =
  " of" +
  " " +
  Days[timenow.getDay()] +
  ", " +
  timenow.getDate() +
  " " +
  Months[timenow.getMonth()] +
  " " +
  timenow.getFullYear();

//dateUTC variable for storing UTC date
let dateUTC =
  " of" +
  " " +
  Days[timenow.getUTCDay()] +
  ", " +
  timenow.getUTCDate() +
  " " +
  Months[timenow.getUTCMonth()] +
  " " +
  timenow.getUTCFullYear();

// Function for displaying time and date on load (IST)
function ISTime() {
  interval = setInterval(() => {
    let timenow = new Date();
    const a = timenow.getHours();
    const b = timenow.getMinutes();
    const c = timenow.getSeconds();
    let hour;
    let minute;
    let second;

    //conditions so that there is a leading zero when hours, minutes and seconds are below 10
    if (a < 10) {
      hour = "0" + a;
    } else {
      hour = a;
    }

    if (b < 10) {
      minute = "0" + b;
    } else {
      minute = b;
    }

    if (c < 10) {
      second = "0" + c;
    } else {
      second = c;
    }
    fetch.innerHTML = hour + ":" + minute + ":" + second + datenow;
  }, 100);
}

// setInterval calls function every 100 milliseconds rather than 1000 milliseconds as 1000 milliseconds delays the function call for 1sec

//calling the function to display
ISTime();

//interval2 stores the timeout value which can be used by clear interval to clear setinterval
let interval2;

// function for UTC time
let UTCtime = () => {
  interval2 = setInterval(function set() {
    let utctime = new Date();
    const hour = utctime.getUTCHours();
    const minute = utctime.getUTCMinutes();
    const seconds = utctime.getUTCSeconds();
    let formathour;
    let formatminute;
    let formatSecond;

    //conditions so that there is a leading zero when hours, minutes and seconds are below 10
    if (hour < 10) {
      formathour = "0" + hour;
    } else {
      formathour = hour;
    }

    if (minute < 10) {
      formatminute = "0" + minute;
    } else {
      formatminute = minute;
    }

    if (seconds < 10) {
      formatSecond = "0" + seconds;
    } else {
      formatSecond = seconds;
    }
    fetch.innerHTML =
      formathour + ":" + formatminute + ":" + formatSecond + dateUTC;
  }, 100);
};

// onclick to toggle between IST and UTC
btn1.innerHTML = "UTC Time";
let switchUTC = () => {
  if (btn1.innerHTML == "UTC Time") {
    btn1.innerHTML = "Switch to IST";
    clearInterval(interval);
    UTCtime();
  } else {
    clearInterval(interval2);
    ISTime();
    btn1.innerHTML = "UTC Time";
  }
};

// Stopwatch

// interval3 for getting timeout value to clear interval of the setInterval used
let interval3;
let fetchpara = document.querySelector("#watch>p");

// setting date to 0, 0 so the 'get' functions fetch '0' value
let fake = new Date(0, 0);
function strinterval() {
  interval3 = setInterval(() => {
    fake.setMilliseconds(fake.getMilliseconds() + 100);
    let a = fake.getHours();
    let b = fake.getMinutes();
    let c = fake.getSeconds();
    let d = fake.getMilliseconds();
    let aformat;
    let bformat;
    let cformat;
    let dformat;
    if (a < 10) {
      aformat = "0" + a;
    } else {
      aformat = a;
    }

    if (b < 10) {
      bformat = "0" + b;
    } else {
      bformat = b;
    }

    if (c < 10) {
      cformat = "0" + c;
    } else {
      cformat = c;
    }
    if (d < 10) {
      dformat = "00" + d;
    } else {
      dformat = d;
    }
    let fakeset = aformat + ":" + bformat + ":" + cformat + ":" + dformat;
    fetchpara.innerHTML = fakeset;
  }, 100);
}

// assigning flag value so that we can toggle between start and stop
let flag = true;

function start() {
  strinterval();
  btn2.innerHTML = "Stop";
  flag = false;
}

function stop() {
  clearInterval(interval3);
  btn2.innerHTML = "Start";
  flag = true;
}

function toggle() {
  if (flag == true) {
    start();
  } else {
    stop();
  }
}

// reset function triggers when reset button is clicked
// first it stops the timer
// then it reassigns the "Date" object back to its initial value
// then we insert the initial value pf "00:00:00:00"
// finally we set flag value to true again
function Reset() {
  stop();
  fake = new Date(0, 0);
  btn2.innerHTML = "Start";
  fetchpara.innerHTML = "00:00:00:000";
  flag = true;
}
