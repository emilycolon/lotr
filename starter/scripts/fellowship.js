console.log("Linked.");

// Dramatis Personae
var hobbits = [
  "Frodo Baggins",
  "Samwise 'Sam' Gamgee",
  "Meriadoc 'Merry' Brandybuck",
  "Peregrin 'Pippin' Took"
];

var buddies = ["Gandalf the Grey", "Legolas", "Gimli", "Strider", "Boromir"];

var lands = ["The Shire", "Rivendell", "Mordor"];
var body = document.querySelector("body");

// Part 1

function makeMiddleEarth() {
  // create a section tag with an id of middle-earth
  // add each land as an article tag
  // inside each article tag include an h1 with the name of the land
  // append middle-earth to your document body
  const middleEarth = document.createElement("section");
  middleEarth.setAttribute("id", "middle-earth");
  lands.forEach(land => {
    const article = document.createElement("article");
    const h1 = document.createElement("h1");
    h1.innerHTML = land;
    article.appendChild(h1);
    article.classList.add(land.toLowerCase().replace(" ", ""));
    middleEarth.appendChild(article);
  });
  body.appendChild(middleEarth);
}

makeMiddleEarth();

// Part 2

function makeHobbits() {
  // display an unordered list of hobbits in the shire (which is the second article tag on the page)
  // give each hobbit a class of hobbit
  const theShire = document.querySelector(".theshire");
  const ul = document.createElement("ul");

  for (let index = 0; index < hobbits.length; index++) {
    const hobbit = hobbits[index];
    const li = document.createElement("li");
    li.innerHTML = hobbit;
    li.setAttribute("class", "hobbit");
    ul.appendChild(li);
  }
  theShire.appendChild(ul);
}
makeHobbits();

// Part 3

function keepItSecretKeepItSafe() {
  // create a div with an id of 'the-ring'
  // give the div a class of 'magic-imbued-jewelry'
  // BONUS: add an event listener so that when a user clicks on the ring, the nazgulScreech function (provided) is invoked
  // add the ring as a child of Frodo
  const theRing = document.createElement("div");
  theRing.setAttribute("id", "the-ring");
  theRing.setAttribute("class", "magic-imbued-jewelry");
  var frodo = document.getElementsByClassName("hobbit")[0];
  frodo.appendChild(theRing);
  theRing.addEventListener("click", nazgulScreech);
}
keepItSecretKeepItSafe();

// Part 4

function makeBuddies() {
  // create an aside tag
  // attach an unordered list of the 'buddies' in the aside
  // insert your aside as a child element of rivendell
  const aside = document.createElement("aside");
  const rivendell = document.querySelector(".rivendell");
  const ul = document.createElement("ul");

  for (let index = 0; index < buddies.length; index++) {
    const buddy = buddies[index];
    const li = document.createElement("li");
    li.innerHTML = buddy;
    li.setAttribute("class", "buddy");
    ul.appendChild(li);
  }
  aside.appendChild(ul);
  rivendell.appendChild(aside);
}

makeBuddies();

// Part 5

function beautifulStranger() {
  // change the 'Strider' textnode to 'Aragorn'
  var strider = document.getElementsByClassName("buddy")[3];
  strider.innerHTML = "Aragorn";
}
beautifulStranger();

// Part 6

function leaveTheShire() {
  // assemble the hobbits and move them to Rivendell
  const newLocation = document.querySelector("aside");
  const hobbitGroup = document.querySelector("ul");
  newLocation.appendChild(hobbitGroup);
}

leaveTheShire();

// Part 7

// function forgeTheFellowShip() {
//   //     // create a new div called 'the-fellowship' within rivendell
//   //     // add each hobbit and buddy one at a time to 'the-fellowship'
//   //     // after each character is added make an alert that they have joined your party
//   const theFellowship = document.createElement("div");
//   theFellowship.setAttribute("class", "the-fellowship");
//   document.getElementsByClassName("rivendell")[0].appendChild(theFellowship);
//   let ul = document.createElement("ul");
//   var oldHobbits = document.getElementsByClassName("hobbits")[0];
//   var newHobbits = document.getElementsByClassName("the-fellowship")[0];
//   newHobbits.appendChild(oldHobbits);
//   var oldBuddies = document.getElementsByClassName("buddies")[0];
//   var newBuddies = document.getElementsByClassName("the-fellowship")[0];
//   newBuddies.appendChild(oldBuddies);
//   buddies.forEach(name => {
//     alert(name + " has joined the party!");
//   });

//   hobbits.forEach(name => {
//     alert(name + " has joined the party!");
//   });
// }
// forgeTheFellowShip();

// Part 8

function theBalrog() {
  // change the 'Gandalf' textNode to 'Gandalf the White'
  // apply style to the element
  // make the background 'white', add a grey border
  var gandalf = document.querySelector("li");
  gandalf.innerHTML = "Gandalf the white";
  gandalf.style.backgroundColor = "white";
  gandalf.style.border = "solid gray 2px";
}

theBalrog();

// Part 9

function hornOfGondor() {
  // pop up an alert that the horn of gondor has been blown
  // Boromir's been killed by the Uruk-hai!
  // put a linethrough on boromir's name
  // Remove Boromir from the Fellowship
  var boromir = document.getElementsByClassName("buddy")[4];
  var graveYard = document.createElement("div");
  graveYard.setAttribute("class", "graveYard");
  const rivendell = document.querySelector(".rivendell");
  alert(
    "The horn of Gondor has been blown! Boromir`s been killed by the Uruk-hai!"
  );
  boromir.style.textDecoration = "line-through";
  rivendell.appendChild(graveYard);
  const h1 = document.createElement("h1");
  h1.innerHTML = "Grave Yard";
  graveYard.appendChild(h1);
  graveYard.appendChild(boromir);
}

hornOfGondor();

// Part 10

function itsDangerousToGoAlone() {
  // take Frodo and Sam out of the fellowship and move them to Mordor
  // add a div with an id of 'mount-doom' to Mordor
  let frodo = document.querySelectorAll("li")[4];
  let sam = document.querySelectorAll("li")[5];
  let mountDoom = document.createElement("div");
  mountDoom.setAttribute("id", "mount-doom");
  let mordor = document.querySelector(".mordor");
  mordor.appendChild(sam);
  mordor.appendChild(frodo);
  mordor.appendChild(mountDoom);
}

itsDangerousToGoAlone();

// Part 11

function weWantsIt() {
  // Create a div with an id of 'gollum' and add it to Mordor
  // Remove the ring from Frodo and give it to Gollum
  // Move Gollum into Mount Doom
  let gollum = document.createElement("div");
  gollum.setAttribute("id", "gollum");
  gollum.innerHTML = "Gollum";
  let mordor = document.querySelector(".mordor");
  let theRing = document.querySelector("#the-ring");
  let mountDoom = document.querySelector("#mount-doom");
  mordor.appendChild(gollum);
  gollum.appendChild(theRing);
  mountDoom.appendChild(gollum);
}
weWantsIt();

// Part 12

function thereAndBackAgain() {
  // remove Gollum and the Ring from the document
  // remove all the baddies from the document
  // Move all the hobbits back to the shire
  let merry = document.querySelectorAll(".hobbit")[0];
  let pippin = document.querySelectorAll(".hobbit")[1];
  let sam = document.querySelectorAll(".hobbit")[2];
  let frodo = document.querySelectorAll(".hobbit")[3];
  let theShire = document.querySelector("article");
  let mordor = document.querySelector(".mordor");
  theShire.appendChild(frodo);
  theShire.appendChild(sam);
  theShire.appendChild(pippin);
  theShire.appendChild(merry);
  mordor.style.display = "none";
}
thereAndBackAgain();
