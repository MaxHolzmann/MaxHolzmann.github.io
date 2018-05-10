//function to get a random integer from the objects
function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}

//lists of places
var all = ["McDonalds", "Culvers", "Lil Ceasers", "Taco Bell", "Taco Johns", "Pizza Ranch", "Jet's Pizza",
"Burger King", "Dunkin' Donuts", "Kentucky Fried Chicken", "Fazoli's", "Backyard Bar and Grill", "Sal's Pizza", "Bob's Pizza", "Panda Express",
"A&W", "Noodles and Company", "Rocky Rococos", "Papa Johns", "Urban Fuel", "Pamela's Bar & Grill", "Five Guys (Oshkosh)", "Buffalo Wild Wings",
"Starbucks", "Dairy Queen", "Qdoba", "Arby's", "Jimmy Johns", "Tuckers", "Subway", "Cousin Subs", "Schmittys", "11:11 Burger's & Beignets", "Gilles",
"Panera Bread", "Schreiners", "Ala Roma", "Red Cabin"];

var pizzaplaces = ["Lil Ceasers", "Pizza Ranch", "Jet's Pizza", "Dominoes", "Bob's Pizza", "Sal's Pizza", 
"Rocky Rococos", "Papa Johns"];

var fastfoods = ["McDonalds", "Culvers", "Taco Bell", "Taco Johns", "Burger King", "Kentucky Fried Chicken", "Panda Express", "Hardees", "A&W",
"Noodles and Company", "Five Guys (Oshkosh)", "Buffalo Wild Wings", "Qdoba", "Dairy Queen", "Arby's", "Jimmy Johns", "Tuckers", "Subway", 
"Cousin Subs", "Fazoli's", "11:11 Burger's & Beignets", "Gilles", "Panera Bread"];

var restur = ["Backyard Bar & Grill", "Fat Joes", "Applebees", "Urban Fuel", "Pamela's Bar & Grill", "Schmittys", "Schreiners", "Ala Roma",
"Red Cabin"];


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
