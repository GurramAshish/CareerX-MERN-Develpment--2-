function check() {
  let num = t1.value;
  if (num > 0) {
    lb1.innerHTML = "Positive";
    lb1.style.color = "green";
    lb1.style.background = "yellow";
  } else if (num == 0) {
    lb1.innerHTML = "It has no VALUE";
    lb1.style.color = "black";
    lb1.style.background = "pink";
  } else {
    lb1.innerHTML = "Negative";
    lb1.style.color = "red";
    lb1.style.background = "black";
  }
}
///////////////////////////////////////
function square() {
  let a = l.value;
  let c = b.value;
  if (a == c) {
    lb2.innerHTML = "It's a SQUARE";
    lb2.style.color = "green";
    lb2.style.background = "yellow";
  } else {
    lb2.innerHTML = "It's not a SQUARE ";
    lb2.style.color = "red";
    lb2.style.background = "black";
  }
}
////////////////////////////////////////////////////
function greater() {
  var num1 = a1.value;
  var num2 = b2.value;
  var num3 = c3.value;
  if (num1 > num2 && num1 > num3) {
    lb3.innerHTML = `${a1.value} is Greater`;
  } else if (num2 > num1 && num2 > num3) {
    lb3.innerHTML = `${b2.value} is GREATEST`;
  } else if (num3 > num1 && num3 > num2) {
    lb3.innerHTML = `${c3.value} is GREATEST`;
  } else {
    lb3.innerHTML = `nothing is GREATEST`;
  }
}
////////////////////////////////////////////////////////
function whileloop() {
  let i = 5;
  while (i <= 25) {
    document.write(i + " ");
    i += 5;
  }
}
function forloop() {
  document.write("for loop:");
  for (let i = 5; i <= 25; i += 5) {
    document.write(+i + " ");
  }
}
/////////////////////////////////////////////////////////
function dowhileloop() {
  let i = 1;
  while (i <= 26) {
    document.write(i + " ");
    i += 5;
  }
}
///////////////////////////////////////////////////////////

function divide5() {
  let p = adiv5.value;
  if (p % 5 == 0) {
    lb5.innerHTML = "DIVISIBLE By 5";
    lb5.style.color = "green";
    lb5.style.background = "yellow";
  } else {
    lb5.innerHTML = "Not Divisible by 5";
    lb5.style.color = "red";
    lb5.style.background = "black";
  }
}
///////////////////////////////////////////////////////////////
function checkGrade() {
  let marks = cg1.value;
  if (marks < 25) {
    ib7.innerHTML = 'Grade is "F"';
    ib7.style.color = "red";
    ib7.style.background = "black";
  } else if ((marks >= 25, marks < 45)) {
    ib7.innerHTML = 'Grade is "E"';
    ib7.style.color = "green";
    ib7.style.background = "yellow";
  } else if ((marks >= 45, marks < 50)) {
    ib7.innerHTML = 'Grade is "D"';
    ib7.style.color = "green";
    ib7.style.background = "yellow";
  } else if ((marks >= 50, marks < 60)) {
    ib7.innerHTML = 'Grade is "C"';
    ib7.style.color = "green";
    ib7.style.background = "yellow";
  } else if ((marks >= 60, marks < 80)) {
    ib7.innerHTML = 'Grade is "B"';
    ib7.style.color = "green";
    ib7.style.background = "yellow";
  } else if ((marks >= 80, marks <= 100)) {
    ib7.innerHTML = 'Grade is "A"';
    ib7.style.color = "green";
    ib7.style.background = "yellow";
  } else {
    ib7.innerHTML = "Recheck your MARKS";
  }
}
//////////////////////////////////////////////////////////////////////
function add() {
  let a = parseInt(inp1.value);
  let b = parseInt(inp2.value);
  let c = a + b;
  lb8.innerHTML = c;
}
function subtract() {
  let z = parseInt(inp1.value);
  let x = parseInt(inp2.value);
  let c = z - x;
  lb8.innerHTML = c;
}
function multiply() {
  let z = parseInt(inp1.value);
  let x = parseInt(inp2.value);
  let c = z * x;
  lb8.innerHTML = c;
}
function divide() {
  let z = parseInt(inp1.value);
  let x = parseInt(inp2.value);
  let c = z / x;
  lb8.innerHTML = c;
}
///////////////////////////////////////////////////////////////
