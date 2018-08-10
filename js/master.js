var side1 ,side2 ,side3
var result=[];
window.onload=function userinput(){
  side1=parseInt(prompt("Enter the first side"));
  side2=parseInt(prompt("Enter the second side"));
  side3=parseInt(prompt("Enter the third side"));
  result.push(side1,side2,side3)
}

// fuction that compares the sides
function compare(){
  if (side1===side2&&side2===side3){
    alert("This is an Equilateral Triangle"+"\n"+"The sides of the triangle are: "+result)
  }
  else if (side1===side2|| side2===side3|| side1===side3) {
    alert("This is an Isosceles Triangle"+"\n"+"The sides of the triangle are: "+result)
  }
  else if((side1+side2)<=side3||(side2+side3<=side1)||(side1+side3<=side2)){
    alert("this is not a triangle"+"\n"+"The sides of the triangle are: "+result)
  }
  else if ((side1+side2)>side3||(side2+side3)>side1||(side1+side3>side2)) {
    alert("this is a Scalene triangle"+"\n"+"The sides of the triangle are: "+result)
  }
  else {
    alert("Please put valid lengths"+"\n"+"The sides of the triangle are: "+result)
  }
}
