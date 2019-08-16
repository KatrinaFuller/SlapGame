let target = {
  health: 100,
  name: "Captian Hook",
  hits: 0,
  items: []
};

let items = {
  blood: {
    name: "blood",
    modifier: 1, // reduces by an extra 1
    description: "Ouch my eyes!"
  },
  sword: {
    name: "sword",
    modifier: 2, // reduces by an extra 2
    description: "Don't cut me!"
  },
  crocodile: {
    name: "crocodile",
    modifier: 5, // reduces by an extra 5
    description: "My other hand!"
  }
};

function slap() {
  target.health--;
  update();
  numberOfHits();
};

function punch() {
  target.health -= 5;
  update();
  numberOfHits();
};

function kick() {
  target.health -= 10;
  update();
  numberOfHits();
};

function numberOfHits() {
  target.hits++;
  update();
};

function hurtTarget() {
  target.items.push(items);
};

// calling this function is making the items object be pushed onto the target items array
hurtTarget();

function addMods() {
  let modifierTotal = 0;
  // need to add the value of the modifiers used
  for (let i = 0; i < target.items; i++) {
    // modifierTotal += 
  };
};

// responsible for updatig the user interface whenever a value changes
function update() {
  let targetHealthElement = document.querySelector('#health');
  targetHealthElement.textContent = target.health.toString();

  let numberOfHitsElement = document.querySelector('#hits');
  numberOfHitsElement.textContent = target.hits.toString();
};

update();