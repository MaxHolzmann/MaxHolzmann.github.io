 function Message() {
  event.preventDefault();
  var text = document.getElementById('textbox').value;
  var replacing = document.getElementById('textreplace');
  replacing.innerText = text;
}
