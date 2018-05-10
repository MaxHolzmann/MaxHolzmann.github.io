//function to get a random integer from the objects
function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}

//lists of places
var all = ["McDonalds", "Culvers", "Lil Ceasers", "Taco Bell", "Taco Johns", "Pizza Ranch", "Jet's Pizza",
"Burger King", "Dunkin' Donuts", "Kentucky Fried Chicken", "Fazoli's", "Backyard Bar and Grill"];

var pizzaplaces = ["Lil Ceasers", "Pizza Ranch", "Jet's Pizza", "Dominoes"];

var fastfoods = ["McDonalds", "Culvers", "Taco Bell", "Taco Johns", "Burger King", "Kentucky Fried Chicken", "Panda Express", "Hardees"];

var restur = ["Backyard Bar & Grill", "Fat Joes", "Applebees"];


function any() {
var amount = all.length;
var randplace = getRandomInt(0, amount);
document.getElementById("place").textContent = all[randplace];
}

function pizza() {
var pizzalength = pizzaplaces.length;
var randoplace = getRandomInt(0, pizzalength);
document.getElementById("place").textContent = pizzaplaces[randoplace];

}

function fastFood(){
var fastlength = fastfoods.length;
var randfplace = getRandomInt(0, fastlength);
document.getElementById("place").textContent = fastfoods[randfplace];

}

function resturants(){
var resturlength = restur.length;
var randrplace = getRandomInt(0, resturlength);
document.getElementById("place").textContent = restur[randrplace];

}
