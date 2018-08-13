var side1 ,side2 ,side3
var result=[];
function userinput(){
  side1=parseInt(prompt("Enter the first side"));
  side2=parseInt(prompt("Enter the second side"));
  side3=parseInt(prompt("Enter the third side"));

  if(side1===null || side2===null || side3===null){
    alert("put valid length")
  }
  else if(side1<=0||side2<=0||side3<=0){
    alert("ERROR !!!,NO TRIANGLE WITH A NEGATIVE LENGHT or ,0,")
  }
  else {
    result.push(side1,side2,side3)
  }
}
// function reloaads the page

// function reload (){
//   window.location.reload();
// }
// fuction that compares the sides
function compare(){
  if (result[0]===result[1]&&result[1]===result[2]){
    alert("This is an Equilateral Triangle"+"\n"+"The sides of the triangle are: "+result)
  }
  else if (result[0]===result[1]|| result[1]===result[2]|| result[0]===result[2]) {
    alert("This is an Isosceles Triangle"+"\n"+"The sides of the triangle are: "+result)
  }
  else if((result[0]+result[1])<=result[2]||(result[1]+result[2]<=result[0])||(result[0]+result[2]<=result[1])){
    alert("this is not a triangle"+"\n"+"The sides of the triangle are: "+result)
  }
  else if ((result[0]+result[1])>result[2]||(result[1]+result[2])>result[0]||(result[0]+result[2]>result[1])) {
    alert("this is a Scalene triangle"+"\n"+"The sides of the triangle are: "+result)
  }
  else {
    alert("Please put valid lengths"+"\n"+"The sides of the triangle are: "+result)
  }
  window.location.reload();
}
