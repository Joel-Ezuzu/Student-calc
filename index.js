// tasks ---
// should calculate total
// calculate percentage
// calculate grade
// calculate pass/fail

function calc() {
  // Retrieve values and parse them to floats
  console.log("in here")
  let phy = document.getElementById("phy").value ;
  let chy = document.getElementById("chy").value;
  let math = document.getElementById("math").value;

  console.log(phy)

  // Calculate sum
  let sum = parseFloat(phy) + parseFloat(chy) + parseFloat(math);

  // Display total marks
  document.getElementById("demo").innerHTML = `Total mark is = ${sum}`;
  console.log("in here")
  let percentage = (sum / 300) *100;
  // Calculate percentage only if sum is not zero
  document.getElementById("demo1").innerHTML = `percentage is = ${parseInt(percentage)}%`;
  // Show result 
  if(percentage>=90){
    document.getElementById("demo2").innerHTML='A';
  }else if(percentage>=80 && percentage<=89){
    document.getElementById("demo2").innerHTML='B';
  }else if(percentage>=70 && percentage<=79){
    document.getElementById("demo2").innerHTML='C';
  }else if(percentage>=60 && percentage<=69){
    document.getElementById("demo2").innerHTML='D';
  }else if(percentage>=50 && percentage<=59){
    document.getElementById("demo2").innerHTML='E';
  }else{
    document.getElementById("demo2").innerHTML='F';
  }
    console.log("in here")
}