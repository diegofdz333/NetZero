let funding; // measured in millions?
let support; // percentage ?
let carbon; // measured in ppm
let emissionRate; // ppm per year?
let research;
let researchRate; // per month

let month;
let year;

let game_speed;

let paused = false; // is the clock paused?

const STARTING_FUNDING = 100;
const STARTING_SUPPORT = 50;
const STARTING_CARBON = 420; // Carbon at start of game.
const STARTING_EMMISION_RATE = 4.7;
const STARTING_RESEARCH = 0;
const STARTING_RESEARCH_RATE = 1;

const STARTING_MONTH = 1;
const STARTING_YEAR = 2024;

const ZERO_TEMP_CARBON = 320; // Carbon when temp diff = 0.
const STARTING_TEMPERTURE = 1; // Temp difference from 20th century average at start of game.
const TEMP_GAME_LOSS = 5; // Temp difference at which game loss happens.

const BASE_GAME_SPEED = 5; // seconds per month


// Get current global temperature. Measured in diff from 20th century average.
function getTemperature() {
  let conversion = (STARTING_TEMPERTURE) / (STARTING_CARBON - ZERO_TEMP_CARBON);
  return (carbon - ZERO_TEMP_CARBON) * conversion
}

function displayWin() {
  let endscreen = document.getElementById("endscreen");

  let endheader = document.getElementById("endheader");
  let dateStr = `${month}/1/${year}`
  endheader.innerHTML = "CONGRATULATIONS! Net Zero Emissions were reached on " + dateStr + ".";

  let endpara = document.getElementById("endpara");
  endpara.innerHTML = "Can you make it happen faster?";

  endscreen.style.display = "flex";
}

function displayLoss() {
  let endscreen = document.getElementById("endscreen");

  let endheader = document.getElementById("endheader");
  let dateStr = `${month}/1/${year}`
  endheader.innerHTML = "Unfortunately, carbon levels of " + carbon + "ppm caused global temperatures to rise 5 degrees above pre-industrial levels." + dateStr + ".";

  let endpara = document.getElementById("endpara");
  endpara.innerHTML = "Can you make it happen faster?";

  endscreen.style.display = "flex";
}

function checkWin() {
  let temp = getTemperature();
  if (temp >= TEMP_GAME_LOSS) {
    displayLoss();
  }
  else if (emissionRate <= 0) {
    displayWin();
  }
}

function setStartingResources() {
  funding = STARTING_FUNDING;
  support = STARTING_SUPPORT;
  carbon = STARTING_CARBON;
  emissionRate = STARTING_EMMISION_RATE;
  research = STARTING_RESEARCH;
  researchRate = STARTING_RESEARCH_RATE;

  month = STARTING_MONTH;
  year = STARTING_YEAR;

  game_speed = BASE_GAME_SPEED;
}

function updateResources() {
  let fundingStr = `Funding: $${Math.round(funding*100)/100}MM`;
  let supportStr = `Support: ${Math.round(support*10)/10}%`;
  let carbonStr = `Carbon: ${Math.round(carbon*100)/100} ppm`;
  let emissionStr = `Emission Rate: ${Math.round(emissionRate*100)/100} ppm/year`;
  let researchStr = `Research: ${Math.round(research)}`;

  let dateStr = `${month}/1/${year}`;

  document.getElementById("resources-funding").innerHTML = fundingStr;
  document.getElementById("resources-support").innerHTML = supportStr;
  document.getElementById("resources-carbon").innerHTML = carbonStr;
  document.getElementById("resources-emission").innerHTML = emissionStr;
  document.getElementById("resources-research").innerHTML = researchStr;

  document.getElementById("date").innerHTML = dateStr;

  checkWin();
}

function increaseTime() {
  if (month < 12) {
    month++;
  } else {
    month = 1;
    year++;
  }
  carbon += emissionRate / 12;
  research += researchRate;
  updateResources();
}

/* IN CASE WE NEED TO PAUSE TIMER! e.g. opened help window...
function pauseClock() {
  if (!paused) {
    paused = true;
    clearInterval(timeinterval); // stop the clock
    time_left = time_remaining(deadline).total; // preserve remaining time
  }
}

function resumeClock() {
  if (paused) {
    paused = false;

  }
}
*/

console.log("Hello, Main")

var policies = JSON.parse(data);
console.log(policies);

setStartingResources();
setInterval(increaseTime, game_speed * 1000);





// TODO FIND WHAT WE CAN REMOVE FROM BELOW 

/** help box navigation */
function openHelp() {
  document.getElementById("helpwindow").style.display = "block";
  //pause_clock();
}
function closeHelp() {
  document.getElementById("helpwindow").style.display = "none";
  // if (document.getElementById("play").innerHTML == "START") {
  //   current_time = Date.parse(new Date());
  //   deadline = new Date(current_time + time_in_minutes * 60 * 1000);
  //   run_clock('floodtime', deadline);
  //   document.getElementById("play").innerHTML = "LET'S PLAY";
  // }
  /*
  else
    resume_clock();*/
}

/*
//changes color and length of budget bar depending on how much has been spent
function budgetBar(amt) {
  var elem = document.getElementById("bbar");
  var percent = amt / 100000;
  elem.style.width = percent + "%";
  if (percent <= 0) {
    elem.style.width = "0.1%";
    elem.style.backgroundColor = "red";
  } else if (percent <= 20) {
    elem.style.backgroundColor = "red";
  } else if (percent <= 50) {
    elem.style.backgroundColor = "orange";
  } else {
    elem.style.backgroundColor = "rgb(50, 163, 50)";
  }
  document.getElementById("budpercent").innerHTML = Math.round(percent) + "%";
}

//changes color and length of budget bar depending on how much has been spent
function timerbar() {
  var elem = document.getElementById("tbar");
  var timeleft = time_remaining(deadline).minutes * 60 + time_remaining(deadline).seconds;
  var percent = (timeleft / (time_in_minutes * 60)) * 100;
  elem.style.width = percent + "%";
  if (percent <= 0) {
    elem.style.width = "0.5%";
    elem.style.backgroundColor = "rgba(187, 42, 42, 0.5)";
  } else if (percent <= 20) {
    elem.style.backgroundColor = "red";
  } else if (percent <= 50) {
    elem.style.backgroundColor = "orange";
  } else {
    elem.style.backgroundColor = "rgb(50, 163, 50)";
  }
}
*/
