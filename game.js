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
    modifier: 3, // reduces by an extra 5
    description: "My other hand!"
  }
};

function slap() {
  target.health -= 1 + addMods();
  update();
  numberOfHits();
  gameOver();
};

function punch() {
  target.health -= 5 + addMods();
  update();
  numberOfHits();
  gameOver();
};

function kick() {
  target.health -= 10 + addMods();
  update();
  numberOfHits();
  gameOver();
};

function numberOfHits() {
  target.hits++;
  update();
};

function addItemToTarget(itemName) {
  if (itemName === "blood") {
    target.items.push(items.blood);
    bloodSnackbar();
  } else if (itemName === "sword") {
    target.items.push(items.sword);
    swordSnackbar();
  } else if (itemName === "crocodile") {
    target.items.push(items.crocodile);
    crocodileSnackbar();
  }
};

function bloodSnackbar() {
  let bar = document.getElementById("blood-snackbar");
  bar.className = "show";
  // bar.classList.add('show');
  setTimeout(function () { bar.className = bar.className.replace("show", ""); }, 3000);
}

function swordSnackbar() {
  let bar = document.getElementById("sword-snackbar");
  bar.className = "show";
  // bar.classList.add('show');
  setTimeout(function () { bar.className = bar.className.replace("show", ""); }, 3000);
}

function crocodileSnackbar() {
  let bar = document.getElementById("crocodile-snackbar");
  bar.className = "show";
  // bar.classList.add('show');
  setTimeout(function () { bar.className = bar.className.replace("show", ""); }, 3000);
}

function addMods() {
  let modifierTotal = 0;
  // need to add the value of the modifiers used
  for (let i = 0; i < target.items.length; i++) {
    modifierTotal += target.items[i].modifier
  };
  return modifierTotal;
};

// responsible for updating the user interface whenever a value changes
function update() {
  let targetHealthElement = document.querySelector('#health');
  targetHealthElement.textContent = target.health.toString();

  let numberOfHitsElement = document.querySelector('#hits');
  numberOfHitsElement.textContent = target.hits.toString();
};

update();

function restartGame() {
  if (confirm("Are you sure you want to restart this game?")) {
    target.health = 100;
    target.hits = 0;
    target.items = [];
    update();
  }
};

// game over when health = 0
// pop up message saying game over and asking if want to play again
// if yes, restart game

function gameOver() {
  if (target.health <= 0) {
    //console.log("dead");

    alert("Congrats! You killed Captian Hook!");
    restartGame();
  }
};