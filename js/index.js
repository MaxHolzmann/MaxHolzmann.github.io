//general js functions
var animate = function() {
  var elements;
  var windowHeight;
  function inWindow() {
  elements = document.querySelectorAll(".hide");
  windowHeight = window.innerHeight;
  addEventHandlers();
  checkPosition();
}
function addEventHandlers() {
  window.addEventListener('scroll', checkPosition);
  window.addEventListener('resize', inWindow);
}
function checkPosition() {
  for(var i = 0; i < elements.length; i++) {
    var positionFromTop = elements[i].getBoundingClientRect().top; //look up
    if(positionFromTop - windowHeight <= 0) {
      elements[i].className = elements[i].className.replace('hide', 'fade-in');

    }
  }
}
return {
  inWindow: inWindow
};
};
animate().inWindow();
