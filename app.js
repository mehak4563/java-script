
// ///////////////////task no1////////
var input1 = parseInt(prompt("Enter first number:"));
var input2 = parseInt(prompt("Enter second number:"));

 if (input1 > input2) {
    console.log(input1 + " is larger than " + input2);
} else {
    console.log(input1 + " is lesser than " + input2);
}
////////////////////task 2//////////////


var x=3;
var y=-7;
var z=2;
if (x>0 && y>0 && z>0)
{
       alert("The sign is +");
}
else if (x<0 && y<0 && z<0)
        {
          console.log("The sign is -");
        }
        else if (x>0 && y<0 && z<0)
        {
          console.log("The sign is +");
        }
        else if (x<0 && y>0 && z<0)
        {
          console.log("The sign is +");
        }
        else
        {
          console.log("The sign is -");
        }


// //////////////////////////task 3/////////////////////

a=5;
b=2;
c=12;
d=0;
f=10;
if (a>b && a>c && a>d && a>f)
{
    console.log("largest no is" + a);
}
else if (b>a && b>c && b>d && b>f)
{
    console.log(b+"largest no is" +  b);
}
else if (c>a && c>b && c>d && c>f)
{
    console.log("largest no is" + c);
}
else if (d>a && d>c && d>b && d>f)
{
    console.log("largest no is" + d);
}
else
{
    console.log("largest no is" + f);
}


// /////////////////////////////task 4////////


for (let x=0; x<=15; x++) {
    if (x === 0) {
            console.log(x +  " is even");
    }
    else if (x % 2 === 0) {
            console.log(x + " is even");   
    }
    else {
            console.log(x + " is odd");
    }
}

// /////////////////// task no 5/////////////


let students = [['Ali', 80], ['sania', 77], ['tayan', 88], ['mehak', 95], ['yasir', 68]];

let Avgmarks = 0;

for (let i=0; i < students.length; i++) {
        Avgmarks += students[i][1];
        var avg = (Avgmarks/students.length);
}

console.log("Average grade: " + (Avgmarks)/students.length);

        if (avg < 60){
          console.log("Grade : F");      
          } 
        else if (avg < 70) {
                console.log("Grade : D"); 
                  } 
        else if (avg < 80) 
             {
                console.log("Grade : C"); 
        } else if (avg < 90) {
                console.log("Grade : B"); 
        } else if (avg < 100) {
                console.log("Grade : A"); 
}

// ///////////////////////task 6///////////////

for (i = 1; i<100; i++) {
    if (i % 3 == 0) {
        if (i % 5 == 0) {console.log('fizzbuzz')}
        else {console.log('fizz')}}
    else if (i % 5 == 0) {console.log('buzz')}
    else {console.log(i)};
    }


// ////////////////////task 7///////////////////

let n = 5;
let string = "";
for (let i = 1; i <= n; i++) {
  for (let j = 0; j < i; j++) {
    string += "*";
  }
  string += "\n";
}
console.log(string);

///////////////////////////////////////////////////////

let userFavNum = prompt("what is ur fav no?");
console.log(userFavNum);

let userName = prompt("what is ur name?");
console.log("welcome to my website" + userName);

let userName = prompt("what is ur name?");
document.write("welcome to my website" + userName);


let randomNmuber = Math.random();
// randomNmuber = randomNmuber*10;
randomNmuber*=10 //short foam
let roundedNmuber= Math.round(randomNmuber);
console.log(roundedNmuber);

///////////BODMAS rule////
 let num = (5+5)*(5/5);

let num = 5**3; //double xply = power
 console.log(num);





