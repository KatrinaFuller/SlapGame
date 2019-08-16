let target = {
  health: 100,
  name: "Captian Hook",
  hits: 0
}


function slap() {
  target.health--;
  //alert(health);
  update();
  numberOfHits();
}

function punch() {
  target.health -= 5;
  //alert(health);
  update();
  numberOfHits();
}

function kick() {
  target.health -= 10;
  //alert(health);
  update();
  numberOfHits();
}

function numberOfHits() {
  target.hits++;
  update();
}

// responsible for updatig the user interface whenever a value changes
function update() {
  let targetHealthElement = document.querySelector('#health');
  targetHealthElement.textContent = target.health.toString();

  let numberOfHitsElement = document.querySelector('#hits');
  numberOfHitsElement.textContent = target.hits.toString();
}

update();