var containerEle = document.body.querySelector(".container");

var oper = String(prompt("What is your operator?(+, -, *, or /)"))
var num1 = Number(prompt("What is your first number"))
var num2 = Number(prompt("What is your second number?"));
var check = isNaN(num1)
var check2 = isNaN(num2)
if(check){
  containerEle.innerHTML="Error"
}
else{
  newnum1 = num1
  }

if(check2){
  containerEle.innerHTML="Error"
}
else{
  newnum2 = num2
}
  
if(oper == "+")
  {
   totalnum = newnum1 + newnum2
}
else if(oper == "-")
  {
    totalnum = newnum1 - newnum2
}
else if(oper == "*")
  {
    totalnum = newnum1 * newnum2
}
else if(oper == "/")
  {
    totalnum = newnum1 / newnum2
}
else{
  containerEle.innerHTML="Error"
}



containerEle.innerHTML = totalnum;