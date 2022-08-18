/*
// Question-1

let temp = 0
function findPower2 (number)
 {
    for (let i=0 ; i*i < number ; i++)
    {
       temp = ++i
    }
    console.log(temp)
 }

 findPower2(101)
*/

//-------------------------------------

/*
//Question-2

 function target(number)
 {
 let temp = 0;
    for(var i=1; i<=number/2; i++)
      {
        if(number%i === 0)
           {
             temp += i;
           }
      }
    
      if(temp === number && temp !== 0)
         {
        console.log("Yes");
         } 
      else
         {
        console.log("No");
         }   
  } 
 target(27);
*/

 //------------------------------------

 /*
 //Qustion-3

 function triangle(a, b, c)
 {
    if(c === Math.sqrt( (a*a)+(b*b) ) && a<b && b<c)
        console.log("Yes")
    else console.log("No")
 }
 triangle(3,4,5);
*/

//------------------------------------

/*
//Question-4

let person =
{
    firstName :'' ,
    lastName :'' ,
    age :'' ,
    phoneNumber :'' ,
    email :''
};
function input (firstName , lastName , age , phoneNumber , email )
{
    person.firstName = firstName;
    person.lastName = lastName;
    person.age = age;
    person.phoneNumber = phoneNumber;
    person.email = email;
    console.log(person);
}
input('Sohei','Saedi','21','09197164064','soheil.saedi1379@gmail.com')
*/

//-------------------------------------

/*
//Question-5

function BMI(height , weight)
{
    let a = weight/(height*height)
    if( a<18.5  ){
        console.log("Underweight")
    }
    else if ( a>=18.5 && a<25 ){
        console.log("Normal")
    }
    else if( a>=25 && a<30 ){
        console.log("Overweight")
    }
    else
    console.log("Obese")
}
BMI(1.71 , 93)
*/

//-----------------------------------

//Question-6