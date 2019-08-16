function culversCode() {
  var num1 = Math.floor(Math.random() * 10);
  var num2 = Math.floor(Math.random() * 10);
  var num3 = Math.floor(Math.random() * 10);
  var num4 = Math.floor(Math.random() * 10);
  var num5 = Math.floor(Math.random() * 10);
  var all = num1 + num2 + num3 + num4 + num5;

  if (all % 3 === 0) {
  document.getElementById("code").textContent = num1 + "" + num2 + "" + num3 + "" + num4 + "" + num5 + "";
  } else if (all % 3 !== 0) {
    do {
      var num6 = Math.floor(Math.random() * 10);
      var num7 = Math.floor(Math.random() * 10);
      var num8 = Math.floor(Math.random() * 10);
      var num9 = Math.floor(Math.random() * 10);
      var num10 = Math.floor(Math.random() * 10);
      var all2 = num6 + num7 + num8 + num9 + num10;
    if(all2 % 3 === 0) {
      document.getElementById("code").textContent = num6 + "" + num7 + "" + num8 + "" + num9 + "" + num10 + "";
      good = true;
    } else if (all2 % 3 !== 0) {
      good = false;

    }
  }while(good === false)
  }
}
