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
  document.getElementById("demo1").innerHTML = `percentage is = ${percentage}%`;
  // Show result 
  if(percentage>=100){
    document.getElementById("demo2").innerHTML='A';
  }else if(percentage>=99){
    document.getElementById("demo2").innerHTML='A';
  }else if(percentage>=98){
    document.getElementById("demo2").innerHTML='A';
  }else if(percentage>=97){
    document.getElementById("demo2").innerHTML='A';    
  }else if(percentage>=96){
    document.getElementById("demo2").innerHTML='A';
  }else if(percentage>=95){
    document.getElementById("demo2").innerHTML='A';
  }else if(percentage>=94){
    document.getElementById("demo2").innerHTML='A';
  }else if(percentage>=93){
    document.getElementById("demo2").innerHTML='A';
  }else if(percentage>=92){
    document.getElementById("demo2").innerHTML='A';
  }else if(percentage>=91){
    document.getElementById("demo2").innerHTML='A';
  }else if(percentage>=90){
    document.getElementById("demo2").innerHTML='A';
  }else if(percentage>=89){
    document.getElementById("demo2").innerHTML='B';
  }else if(percentage>=88){
    document.getElementById("demo2").innerHTML='B';
  }else if(percentage>=87){
    document.getElementById("demo2").innerHTML='B';
  }else if(percentage>=86){
    document.getElementById("demo2").innerHTML='B';
  }else if(percentage>=85){
    document.getElementById("demo2").innerHTML='B';
  }else if(percentage>=84){
    document.getElementById("demo2").innerHTML='B';
  }else if(percentage>=83){
    document.getElementById("demo2").innerHTML='B';
  }else if(percentage>=82){
    document.getElementById("demo2").innerHTML='B';
  }else if(percentage>=81){
    document.getElementById("demo2").innerHTML='B';
  }else if(percentage>=80){
    document.getElementById("demo2").innerHTML='B';
  }else if(percentage>=79){
    document.getElementById("demo2").innerHTML='C';
  }else if(percentage>=78){
    document.getElementById("demo2").innerHTML='C';
  }else if(percentage>=77){
    document.getElementById("demo2").innerHTML='C';
  }else if(percentage>=76){
    document.getElementById("demo2").innerHTML='C';
  }else if(percentage>=75){
    document.getElementById("demo2").innerHTML='C';
  }else if(percentage>=74){
    document.getElementById("demo2").innerHTML='C';
  }else if(percentage>=73){
    document.getElementById("demo2").innerHTML='C';
  }else if(percentage>=72){
    document.getElementById("demo2").innerHTML='C';
  }else if(percentage>=71){
    document.getElementById("demo2").innerHTML='C';
  }else if(percentage>=70){
    document.getElementById("demo2").innerHTML='C';
  }else if(percentage>=69){
    document.getElementById("demo2").innerHTML='D';
  }else if(percentage>=68){
    document.getElementById("demo2").innerHTML='D';
  }else if(percentage>=67){
    document.getElementById("demo2").innerHTML='D';
  }else if(percentage>=66){
    document.getElementById("demo2").innerHTML='D';
  }else if(percentage>=65){
    document.getElementById("demo2").innerHTML='D';
  }else if(percentage>=64){
    document.getElementById("demo2").innerHTML='D';
  }else if(percentage>=63){
    document.getElementById("demo2").innerHTML='D';
  }else if(percentage>=62){
    document.getElementById("demo2").innerHTML='D';
  }else if(percentage>=61){
    document.getElementById("demo2").innerHTML='D';
  }else if(percentage>=60){
    document.getElementById("demo2").innerHTML='D';
  }else if(percentage>=59){
    document.getElementById("demo2").innerHTML='E';
  }else if(percentage>=58){
    document.getElementById("demo2").innerHTML='E';
  }else if(percentage>=57){
    document.getElementById("demo2").innerHTML='E';
  }else if(percentage>=56){
    document.getElementById("demo2").innerHTML='E';
  }else if(percentage>=55){
    document.getElementById("demo2").innerHTML='E';
  }else if(percentage>=54){
    document.getElementById("demo2").innerHTML='E';
  }else if(percentage>=53){
    document.getElementById("demo2").innerHTML='E';
  }else if(percentage>=52){
    document.getElementById("demo2").innerHTML='E';
  }else if(percentage>=51){
    document.getElementById("demo2").innerHTML='E';
  }else if(percentage>=50){
    document.getElementById("demo2").innerHTML='E';
  }else if(percentage>=49){
    document.getElementById("demo2").innerHTML='F';
  }else if(percentage>=48){
    document.getElementById("demo2").innerHTML='F';
  }else if(percentage>=47){
    document.getElementById("demo2").innerHTML='F';
  }else if(percentage>=46){
    document.getElementById("demo2").innerHTML='F';
  }else if(percentage>=45){
    document.getElementById("demo2").innerHTML='F';
  }else if(percentage>=44){
    document.getElementById("demo2").innerHTML='F';
  }else if(percentage>=43){
    document.getElementById("demo2").innerHTML='F';
  }else if(percentage>=42){
    document.getElementById("demo2").innerHTML='F';
  }else if(percentage>=41){
    document.getElementById("demo2").innerHTML='F';
  }else if(percentage>=40){
    document.getElementById("demo2").innerHTML='F';
  }else if(percentage>=39){
    document.getElementById("demo2").innerHTML='F';
  }else if(percentage>=38){
    document.getElementById("demo2").innerHTML='F';
  }else if(percentage>=37){
    document.getElementById("demo2").innerHTML='F';
  }else if(percentage>=36){
    document.getElementById("demo2").innerHTML='F';
  }else if(percentage>=35){
    document.getElementById("demo2").innerHTML='F';
  }else if(percentage>=34){
    document.getElementById("demo2").innerHTML='F';
  }else if(percentage>=33){
    document.getElementById("demo2").innerHTML='F';
  }else if(percentage>=32){
    document.getElementById("demo2").innerHTML='F';
  }else if(percentage>=31){
    document.getElementById("demo2").innerHTML='F';
  }else if(percentage>=30){
    document.getElementById("demo2").innerHTML='F';
  }else if(percentage>=29){
    document.getElementById("demo2").innerHTML='F';
  }else if(percentage>=28){
    document.getElementById("demo2").innerHTML='F';
  }else if(percentage>=27){
    document.getElementById("demo2").innerHTML='F';
  }else if(percentage>=26){
    document.getElementById("demo2").innerHTML='F';
  }else if(percentage>=25){
    document.getElementById("demo2").innerHTML='F';
  }else if(percentage>=24){
    document.getElementById("demo2").innerHTML='F';
  }else if(percentage>=23){
    document.getElementById("demo2").innerHTML='F';
  }else if(percentage>=22){
    document.getElementById("demo2").innerHTML='F';
  }else if(percentage>=21){
    document.getElementById("demo2").innerHTML='F';
  }else if(percentage>=20){
    document.getElementById("demo2").innerHTML='F';
  }else if(percentage>=19){
    document.getElementById("demo2").innerHTML='F';
  }else if(percentage>=18){
    document.getElementById("demo2").innerHTML='F';
  }else if(percentage>=17){
    document.getElementById("demo2").innerHTML='F';
  }else if(percentage>=16){
    document.getElementById("demo2").innerHTML='F';
  }else if(percentage>=15){
    document.getElementById("demo2").innerHTML='F';
  }else if(percentage>=14){
    document.getElementById("demo2").innerHTML='F';
  }else if(percentage>=13){
    document.getElementById("demo2").innerHTML='F';
  }else if(percentage>=12){
    document.getElementById("demo2").innerHTML='F';
  }else if(percentage>=11){
    document.getElementById("demo2").innerHTML='F';
  }else if(percentage>=10){
    document.getElementById("demo2").innerHTML='F';
  }else if(percentage>=9){
    document.getElementById("demo2").innerHTML='F';
  }else if(percentage>=8){
    document.getElementById("demo2").innerHTML='F';
  }else if(percentage>=7){
    document.getElementById("demo2").innerHTML='F';
  }else if(percentage>=6){
    document.getElementById("demo2").innerHTML='F';
  }else if(percentage>=5){
    document.getElementById("demo2").innerHTML='F';
  }else if(percentage>=4){
    document.getElementById("demo2").innerHTML='F';
  }else if(percentage>=3){
    document.getElementById("demo2").innerHTML='F';
  }else if(percentage>=2){
    document.getElementById("demo2").innerHTML='F';
  }else if(percentage>=1){
    document.getElementById("demo2").innerHTML='F';
  }else{
    document.getElementById("demo2").innerHTML='F';
  }
  console.log("in here")
}