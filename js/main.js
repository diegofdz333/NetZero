let funding; // measured in millions?
let support; // percentage ?
let carbon; // measured in ppm
let emissionRate; // ppm per year?
let research;
let researchRate; // per month
let temp;

let month;
let year;

let timeInterval;
let game_speed;
let fast = false;

let displayOn = false;

const STARTING_FUNDING = 100;
const STARTING_SUPPORT = 50;
const STARTING_CARBON = 420; // Carbon at start of game.
const STARTING_EMMISION_RATE = 4.7;
const STARTING_RESEARCH = 0;
const STARTING_RESEARCH_RATE = 1;

const EMISSION_INCREASE_RATE = 0.03

const FUNDING_RATE = 50;

const STARTING_MONTH = 1;
const STARTING_YEAR = 2024;

const ZERO_TEMP_CARBON = 320; // Carbon when temp diff = 0.
const STARTING_TEMPERTURE = 1; // Temp difference from 20th century average at start of game.
const TEMP_GAME_LOSS = 5; // Temp difference at which game loss happens.

const MAX_OPACITY = 0.8; //opacity of red overlay

const BASE_GAME_SPEED = 2; // seconds per month


// Get current global temperature. Measured in diff from 20th century average.
function getTemperature() {
  let conversion = (STARTING_TEMPERTURE) / (STARTING_CARBON - ZERO_TEMP_CARBON);
  return (carbon - ZERO_TEMP_CARBON) * conversion
}

function newGame() {
  console.log("New Game");
  resetPolicies();
  setStartingResources();
  refreshPolicies();
  closeHelp();
  closeGuide();
  updateResources();
  displayOn = false;
  fast = false;
  let img = document.getElementById("fast-img");
  img.src = "assets/singleArrow.png";
}

function displayWin() {
  let window = document.getElementById("helpwindow");

  let header = document.getElementById("helpheader");
  let dateStr = `${month}/1/${year}`
  header.innerText = "CONGRATULATIONS! Net Zero Emissions were reached on " + dateStr + ".";

  let p1 = document.getElementById("help1");
  p1.innerHTML = "";

  let p2 = document.getElementById("help2");
  p2.innerHTML = "";

  let p3 = document.getElementById("help3");
  p3.innerHTML = "Can you save the world even faster?";

  let button = document.getElementById("play");
  button.innerHTML = "Play Again"
  button.onclick = newGame;

  openHelp();
}

function displayLoss() {
  let window = document.getElementById("helpwindow");

  let header = document.getElementById("helpheader");
  let dateStr = `${month}/1/${year}`
  header.innerHTML = "Unfortunately, global temperatures rose to 5\xB0C above pre-industrial levels.";

  let p1 = document.getElementById("help1");
  p1.innerHTML = "";

  let p2 = document.getElementById("help2");
  p2.innerHTML = "";

  let p3 = document.getElementById("help3");
  p3.innerHTML = "Can you reduce emission levels even faster?";

  let button = document.getElementById("play");
  button.innerHTML = "Play Again";
  button.onclick = newGame;

  openHelp();
}

function checkWin() {
  if (!displayOn) {
    let temp = getTemperature();
    if (temp >= TEMP_GAME_LOSS) {
      console.log("LOSS");
      clearInterval(timeInterval);
      displayLoss();
      displayOn = true;
    }
    else if (emissionRate <= 0) {
      console.log("WIN");
      clearInterval(timeInterval);  
      displayWin();
      displayOn = true;
    }
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
  temp = STARTING_TEMPERTURE;

  game_speed = BASE_GAME_SPEED;
}

function updateResources() {
  let fundingStr = `Funding: $${Math.round(funding*100)/100}M`;
  let supportStr = `Support: ${Math.round(support*10)/10}%`;
  let carbonStr = `Carbon: ${Math.round(carbon*100)/100} ppm`;
  let emissionStr = `Emission Rate: ${Math.round(emissionRate*100)/100} ppm/year`;
  let researchStr = `Research: ${Math.round(research)}`;

  let dateStr = `${month}/1/${year}`;
  let tempStr = `+${Math.round(temp*10)/10} °C`

  document.getElementById("resources-funding").innerHTML = fundingStr;
  document.getElementById("resources-support").innerHTML = supportStr;
  document.getElementById("resources-carbon").innerHTML = carbonStr;
  document.getElementById("resources-emission").innerHTML = emissionStr;
  document.getElementById("resources-research").innerHTML = researchStr;

  document.getElementById("date").innerHTML = dateStr;
  document.getElementById("temp").innerHTML = tempStr;
}

function updateColor() {
  let colorDiv = document.getElementById('overlay');
  let frac = (getTemperature() - STARTING_TEMPERTURE) / (TEMP_GAME_LOSS - STARTING_TEMPERTURE);
  let opacity = frac * (MAX_OPACITY);
  console.log(opacity);

  colorDiv.style.opacity = opacity;
}

function increaseTime() {
  if (month < 12) {
    month++;
  } else {
    month = 1;
    year++;
  }
  document.getElementById("tbar").style.width = (month/12 * 100) + "%";
  carbon += emissionRate / 12;
  research += researchRate;
  funding += FUNDING_RATE * support / 100 / 12;
  emissionRate += EMISSION_INCREASE_RATE / 12;
  temp = getTemperature();
  var elem = document.getElementById("tempbar");
  var percent = temp/5 * 100;
  elem.style.width = percent + "%";
  if (percent <= 40) {
    elem.style.backgroundColor = "green";
  } else if (percent <= 70) {
    elem.style.backgroundColor = "orange";
  } else {
    elem.style.backgroundColor = "rgb(125, 22, 22)";
  }
  updateColor();
  updateResources();
  checkWin();
}

function fastForward() {
  let img = document.getElementById("fast-img");

  if (fast) {
    game_speed = BASE_GAME_SPEED;
    clearInterval(timeInterval);
    timeInterval = setInterval(increaseTime, game_speed * 1000);

    fast = false;
    img.src = "assets/singleArrow.png";
  }
  else {
    game_speed = BASE_GAME_SPEED / 10;
    clearInterval(timeInterval);
    timeInterval = setInterval(increaseTime, game_speed * 1000);

    fast = true;
    img.src = "assets/doubleArrow.png";
  }
}

var policies = JSON.parse(data);

setStartingResources();

/** help box navigation */
function openHelp() {
  document.getElementById("helpwindow").style.display = "block";
}
function closeHelp() {
  document.getElementById("helpwindow").style.display = "none";
}
function openGuide() {
  document.getElementById("guide").style.display = "block";
  document.getElementById("helpwindow").style.display = "none";
}
function closeGuide() {
  document.getElementById("guide").style.display = "none";
  clearInterval(timeInterval);
  timeInterval = setInterval(increaseTime, game_speed * 1000);
}
