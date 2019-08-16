let health = 100;
let name = "Captian Hook";
let hits = 0;

function slap() {
  health--;
  //alert(health);
  update();
  numberOfHits();
}

function punch() {
  health -= 5;
  //alert(health);
  update();
  numberOfHits();
}

function kick() {
  health -= 10;
  //alert(health);
  update();
  numberOfHits();
}

function numberOfHits() {
  hits++;
  update();
}

// responsible for updatig the user interface whenever a value changes
function update() {
  let healthElement = document.querySelector('#health');
  healthElement.textContent = health.toString();

  let numberOfHitsElement = document.querySelector('#hits');
  numberOfHitsElement.textContent = hits.toString();
}

update();