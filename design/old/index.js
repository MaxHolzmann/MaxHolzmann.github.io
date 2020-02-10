var theHour = new Date().getHours();

if (theHour < 18) {
  greeting = 'Good evening!';
} else if (theHour > 12) {
  greeting = 'Good afternoon!';
} else if (theHour > 0) {
  greeting = 'Good morning!';
} else {
  greeting = 'Welcome!';
}

document.write("<p class=lead>" + greeting + "</p>")
