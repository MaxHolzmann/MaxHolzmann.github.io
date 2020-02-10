function calculate() {
  var one =  Number(document.getElementById('first').value);
  var two = Number(document.getElementById('second').value);
  var operator = document.getElementById('op').value;
  var answer = document.getElementById('ans');
  var final; 
  
  switch(operator) {
  case '+':
  final = one + two;
  answer.textContent = one + " + " + two + " = " + final;
  break;
  case '-':
  final = one - two;
  answer.textContent = one + " - " + two + " = " + final;
  break;
  case '*':
  final = one * two;
  answer.textContent = one + " x " + two + " = " + final;
  break;
  case '/':
  final = one / two;
  answer.textContent = one + " / " + two + " = " + final;
  }
}
