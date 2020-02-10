// object function for each character's info
function castleChar(startweapon, magic, unlock, wikitier){
  this.startweapon = startweapon;
  this.magic = magic;
  this.unlock = unlock;
  this.wikitier = wikitier;
}

//variables for each character
var red = new castleChar("Mace", "Electricity", "Default", "B");
var green = new castleChar("Thin Sword", "Poison", "Default", "D");
var blue = new castleChar("Sheathed Sword", "Ice", "Default", "S");
var orange = new castleChar("Broad Ax", "Fire", "Default", "B");
var gray = new castleChar("Skinny Sword", "Non-Elemental (Fire)", "Defeat the barbarian boss", "S");
var opengray = new castleChar("Skinny Sword", "Non-Elemental", "D", "Defeat the catfish boss on insane mode");
var blacksmith = new castleChar("Hammer", "Non-Elemental (Fire)", "DLC (Regular), At start of game (Remastered)", "E");
var pink = new castleChar("NG Lollipop", "Love", "DLC (Regular), At start of game (Remastered)", "A");
var alien = new castleChar("Alien Gun", "Non-Elemental (Fire)", "Beat level 1-1 in Alien Hominid HD (360), Complete Alien Ship", "E");
var barbarian = new castleChar("Barbarian Ax", "Non-Elemental", "Defeat the King's Arena", "C");
var bear = new castleChar("Club", "Wind", "Beat the game with Skeleton", "B");
var brute = new castleChar("Dual Prong Sword", "Nature", "Beat the game with Iceskimo", "A");
var civilian = new castleChar("Pitchfork", "Non-Elemental", "Beat the game with Peasant", "D");
var conehead = new castleChar("Light Saber", "Non-Elemental (Fire)", "Defeat the Volcano Arena", "S");
var cultminion = new castleChar("Glow Stick", "Dark", "Necromantic DLC Pack (360), Defeat the Ice Castle on insane mode", "C");
var fencer = new castleChar("Fencer's Foil", "Non-Elemental", "Beat the game with Industrialist", "SS");
var firedemon = new castleChar("Black Morning Star", "Fire", "Beat the game with Orange Knight", "A");
var hatty = new castleChar("Emerald Sword", "Money", "Get one BattleBlock Theather Achievement (360), Can't Stop Crying Pack DLC (PS3), Own both Castle Crashers and Battleblock Theather (PC), Buy at insane store (Remastered)", "E");
var iceskimo = new castleChar("Fishing Spear", "Ice", "Defeat the Ice Arena", "S");
var industrialist = new castleChar("Ugly Mace", "Non-Elemental", "Beat the game with Blue Knight", "SS");
var beekeeper = new castleChar("Rat Beating Bat", "Bee", "Beat the game with Barbarian", "C");
var king = new castleChar("King's Mace", "Non-Elemental (Healing)", "King's Pack DLC (360), Complete Pipistrello's Cave on insane mode", "D (Solo) B (Multiplayer)");
var necromancer = new castleChar("Evil Sword", "Death", "Necromatic Pack DLC (360), Complete Industrial Castle on insane mode", "C");
var ninja = new castleChar("Sai", "Non-Elemental", "Beat the game with Fire Demon", "B");
var peasant = new castleChar("Wooden Spoon", "Non-Elemental", "Defeat the Peasant's Arena", "D");
var royalguard = new castleChar("Saracen Sword", "Non-Elemental (Fire)", "Beat the game with Green Knight", "S");
var saracen = new castleChar("Saracen Sword", "Non-Elemental (Sand)", "Beat the game with Royal Guard", "B");
var skeleton = new castleChar("Skeletor Mace", "Dark", "Beat the game with Red Knight", "C");
var snakey = new castleChar("Snakey Mace", "Nature", "Beat the game with Thief", "A");
var stoveface = new castleChar("Gladiator Sword", "Non-Elemental", "Beat the game with Gray Knight", "D");
var thief = new castleChar("Thief Sword", "Non-Elemental", "Defeat the Theive's Arena", "D");


// function to update the html page
function update() {
// DOM variables regarding input & title / picture.
var charvalue = document.getElementById('castleinput').value;
var charpic = document.getElementById('charpic');
var title = document.getElementById('chartitle');
var castlethumb = document.getElementById('castlethumb');

//DOM variables regarding character information
var castleweapon = document.getElementById('startweapon');
var castlemagic = document.getElementById('magic');
var castleunlock = document.getElementById('unlock');
var castlewikitier = document.getElementById('wikitier');

//variables for common prefixs
var weaponprefix = "Starting Weapon: ";
var unlockprefix = "Unlock: ";
var magicprefix = "Magic: ";
var wikitierprefix = "Wiki Tier: ";

title.textContent = charvalue; //sets title to the name of the picked character

castlethumb.style.display = "initial";

switch(charvalue) { //sorts between character values and sets the coressponding info
  case 'Red Knight':
  charpic.src='images/castle/red.png';
  castlewikitier.textContent = wikitierprefix + red.wikitier;
  castleweapon.textContent = weaponprefix + red.startweapon;
  castlemagic.textContent = magicprefix + red.magic;
  castleunlock.textContent = unlockprefix + red.unlock;
  break;
  case 'Green Knight':
  charpic.src= 'images/castle/green.png';
  castlewikitier.text = wikitierprefix + green.wikitier;
  castleweapon.textContent = weaponprefix + green.startweapon;
  castlemagic.textContent = magicprefix + green.magic;
  castleunlock.textContent = unlockprefix + green.unlock;
  break;
  case 'Blue Knight':
  charpic.src = "images/castle/blue.png";
  castlewikitier.textContent = wikitierprefix + blue.wikitier;
  castleweapon.textContent = weaponprefix + blue.startweapon;
  castlemagic.textContent = magicprefix + blue.magic;
  castleunlock.textContent = unlockprefix + blue.unlock;
  break;
  case 'Orange Knight':
  charpic.src = "images/castle/orange.png";
  castlewikitier.textContent = wikitierprefix + orange.wikitier;
  castleweapon.textContent = weaponprefix + orange.startweapon;
  castlemagic.textContent = magicprefix + orange.magic;
  castleunlock.textContent = unlockprefix + orange.unlock;
  break;
  case 'Gray Knight':
  charpic.src = "images/castle/gray.png";
  castlewikitier.textContent = wikitierprefix + gray.wikitier;
  castleweapon.textContent = weaponprefix + gray.startweapon;
  castlemagic.textContent = magicprefix + gray.magic;
  castleunlock.textContent = unlockprefix + gray.unlock;
  break;
  case 'Open Faced Gray Knight':
  charpic.src = "images/castle/opengray.png";
  castlewikitier.textContent = wikitierprefix + opengray.wikitier;
  castleweapon.textContent = weaponprefix + opengray.startweapon;
  castlemagic.textContent = magicprefix + opengray.magic;
  castleunlock.textContent = unlockprefix + opengray.unlock;
  break;
  case 'Blacksmith':
  charpic.src = "images/castle/blacksmith.png";
  castlewikitier.textContent = wikitierprefix + blacksmith.wikitier;
  castleweapon.textContent = weaponprefix + blacksmith.startweapon;
  castlemagic.textContent = magicprefix + blacksmith.magic;
  castleunlock.textContent = unlockprefix + blacksmith.unlock;
  break;
  case 'Pink Knight':
  charpic.src = "images/castle/pink.png";
  castlewikitier.textContent = wikitierprefix + pink.wikitier;
  castleweapon.textContent = weaponprefix + pink.startweapon;
  castlemagic.textContent = magicprefix + pink.magic;
  castleunlock.textContent = unlockprefix + pink.unlock;
  break;
  case 'Alien':
  charpic.src = "images/castle/alien.png";
  castlewikitier.textContent = wikitierprefix + alien.wikitier;
  castleweapon.textContent = weaponprefix + alien.startweapon;
  castlemagic.textContent = magicprefix + alien.magic;
  castleunlock.textContent = unlockprefix + alien.unlock;
  break;
  case 'Barbarian':
  charpic.src="images/castle/barbarian.png";
  castlewikitier.textContent = wikitierprefix + barbarian.wikitier;
  castleweapon.textContent = weaponprefix + barbarian.startweapon;
  castlemagic.textContent = magicprefix + barbarian.magic;
  castleunlock.textContent = unlockprefix + barbarian.unlock;
  break;
  case 'Bear':
  charpic.src="images/castle/bear.png";
  castlewikitier.textContent = wikitierprefix + bear.wikitier;
  castleweapon.textContent = weaponprefix + bear.startweapon;
  castlemagic.textContent = magicprefix + bear.magic;
  castleunlock.textContent = unlockprefix + bear.unlock;
  break;
  case 'Brute':
  charpic.src="images/castle/brute.png";
  castlewikitier.textContent = wikitierprefix + brute.wikitier;
  castleweapon.textContent = weaponprefix + brute.startweapon;
  castlemagic.textContent = magicprefix + brute.magic;
  castleunlock.textContent = unlockprefix + brute.unlock;
  break;
  case 'Civilian':
  charpic.src="images/castle/civilian.png";
  castlewikitier.textContent = wikitierprefix + civilian.wikitier;
  castleweapon.textContent = weaponprefix + civilian.startweapon;
  castlemagic.textContent = magicprefix + civilian.magic;
  castleunlock.textContent = unlockprefix + civilian.unlock;
  break;
  case 'Conehead':
  charpic.src = "images/castle/conehead.png";
  castlewikitier.textContent = wikitierprefix + conehead.wikitier;
  castleweapon.textContent = weaponprefix + conehead.startweapon;
  castlemagic.textContent = magicprefix + conehead.magic;
  castleunlock.textContent = unlockprefix + conehead.unlock;
  break;
  case 'Cult Minion':
  charpic.src = "images/castle/cultminion.jpg";
  castlewikitier.textContent = wikitierprefix + cultminion.wikitier;
  castleweapon.textContent = weaponprefix + cultminion.startweapon;
  castlemagic.textContent = magicprefix + cultminion.magic;
  castleunlock.textContent = unlockprefix + cultminion.unlock;
  break;
  case 'Fencer':
  charpic.src = "images/castle/fencer.png";
  castlewikitier.textContent = wikitierprefix + fencer.wikitier;
  castleweapon.textContent = weaponprefix + fencer.startweapon;
  castlemagic.textContent = magicprefix + fencer.magic;
  castleunlock.textContent = unlockprefix + fencer.unlock;
  break;
  case 'Fire Demon':
  charpic.src = "images/castle/firedemon.png";
  castlewikitier.textContent = wikitierprefix + firedemon.wikitier;
  castleweapon.textContent = weaponprefix + firedemon.startweapon;
  castlemagic.textContent = magicprefix + firedemon.magic;
  castleunlock.textContent = unlockprefix + firedemon.unlock;
  break;
  case 'Hatty Hattington':
  charpic.src = "images/castle/hatty.jpg"; //needs a new, same size image.
  castlewikitier.textContent = wikitierprefix + hatty.wikitier;
  castleweapon.textContent = weaponprefix + hatty.startweapon;
  castlemagic.textContent = magicprefix + hatty.magic;
  castleunlock.textContent = unlockprefix + hatty.unlock;
  break;
  case 'Iceskimo':
  charpic.src = "images/castle/iceskimo.png";
  castlewikitier.textContent = wikitierprefix + iceskimo.wikitier;
  castleweapon.textContent = weaponprefix + iceskimo.startweapon;
  castlemagic.textContent = magicprefix + iceskimo.magic;
  castleunlock.textContent = unlockprefix + iceskimo.unlock;
  break;
  case 'Industrialist':
  charpic.src = "images/castle/industrialist.png";
  castlewikitier.textContent = wikitierprefix + industrialist.wikitier;
  castleweapon.textContent = weaponprefix + industrialist.startweapon;
  castlemagic.textContent = magicprefix + industrialist.magic;
  castleunlock.textContent = unlockprefix + industrialist.unlock;
  break;
  case 'Killer Beekeeper':
  charpic.src = "images/castle/beekeeper.png";
  castlewikitier.textContent = wikitierprefix + beekeeper.wikitier;
  castleweapon.textContent = weaponprefix + beekeeper.startweapon;
  castlemagic.textContent = magicprefix + beekeeper.magic;
  castleunlock.textContent = unlockprefix + beekeeper.unlock;
  break;
  case 'King':
  charpic.src = "images/castle/king.png";
  castlewikitier.textContent = wikitierprefix + king.wikitier;
  castleweapon.textContent = weaponprefix + king.startweapon;
  castlemagic.textContent = magicprefix + king.magic;
  castleunlock.textContent = unlockprefix + king.unlock;
  break;
  case 'Necromancer':
  charpic.src = "images/castle/necromancer.png";
  castlewikitier.textContent = wikitierprefix + necromancer.wikitier;
  castleweapon.textContent = weaponprefix + necromancer.startweapon;
  castlemagic.textContent = magicprefix + necromancer.magic;
  castleunlock.textContent = unlockprefix + necromancer.unlock;
  break;
  case 'Ninja':
  charpic.src = "images/castle/ninja.png";
  castlewikitier.textContent = wikitierprefix + ninja.wikitier;
  castleweapon.textContent = weaponprefix + ninja.startweapon;
  castlemagic.textContent = magicprefix + ninja.magic;
  castleunlock.textContent = unlockprefix + ninja.unlock;
  break;
  case 'Peasant':
  charpic.src = "images/castle/peasant.png";
  castlewikitier.textContent = wikitierprefix + peasant.wikitier;
  castleweapon.textContent = weaponprefix + peasant.startweapon;
  castlemagic.textContent = magicprefix + peasant.magic;
  castleunlock.textContent = unlockprefix + peasant.unlock;
  break;
  case 'Royal Guard':
  charpic.src = "images/castle/royalguard.png";
  castlewikitier.textContent + wikitierprefix + royalguard.wikitier;
  castleweapon.textContent = weaponprefix + royalguard.startweapon;
  castlemagic.textContent = magicprefix + royalguard.magic;
  castleunlock.textContent = unlockprefix + royalguard.unlock;
  break;
  case 'Saracen':
  charpic.src = "images/castle/saracen.png";
  castlewikitier.textContent = wikitierprefix + saracen.wikitier;
  castleweapon.textContent = weaponprefix + saracen.startweapon;
  castlemagic.textContent = magicprefix + saracen.magic;
  castleunlock.textContent = unlockprefix + saracen.unlock;
  break;
  case 'Skeleton':
  charpic.src = "images/castle/skeleton.png";
  castlewikitier.textContent = wikitierprefix + skeleton.wikitier;
  castleweapon.textContent = weaponprefix + skeleton.startweapon;
  castlemagic.textContent = magicprefix + skeleton.magic;
  castleunlock.textContent = unlockprefix + skeleton.unlock;
  break;
  case 'Snakey':
  charpic.src = "images/castle/snakey.png";
  castlewikitier.textContent = wikitierprefix + snakey.wikitier;
  castleweapon.textContent = weaponprefix + snakey.startweapon;
  castlemagic.textContent = magicprefix + snakey.magic;
  castleunlock.textContent = unlockprefix + snakey.unlock;
  break;
  case 'Stove Face':
  charpic.src="images/castle/stove.png";
  castlewikitier.textContent = wikitierprefix + stoveface.wikitier;
  castleweapon.textContent = weaponprefix + stoveface.startweapon;
  castlemagic.textContent = magicprefix + stoveface.magic;
  castleunlock.textContent = unlockprefix + stoveface.unlock;
  break;
  case 'Thief':
  charpic.src = "images/castle/thief.png";
  castlewikitier.textContent = wikitierprefix + thief.wikitier;
  castleweapon.textContent = weaponprefix + thief.startweapon;
  castlemagic.textContent = magicprefix + thief.magic;
  castleunlock.textContent = unlockprefix + thief.unlock;
  break;

}
title.scrollIntoView(true); //WIP
}
