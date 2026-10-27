const studenta = {
  name: "Dk",
  age: 25,
  level: "Masters Degree"
};
// const studentb = {
//   name: "Dkm",
//   age: 27,
//   level: "Masters Degreeb"
// };

// function displayStudent(student) {
//   const info = `Name: ${student.name}`;
//   return info;
// }
// const stuInfo = displayStudent(studenta);
// console.log(stuInfo);
// console.log(displayStudent(studentb));

// Question Two

// const person1 = {
//   name: "Dk",
//   age: 25
// }
// const person2 = {
//   name: "Dk2",
//   age: 25
// }

// function ageEqualizer (person1, person2){
//   const person1Age = person1.age;
//   const person2Age = person2.age;
//   if (person1Age === person2Age){
//     return true
//   } else{
//     return false;
//   }

// }
// console.log(ageEqualizer(person1, person2));

// Question Three
// const circle = {
//   radius: 5,
//   calculateArea : function (radius){
//     return 3.14*(this.radius)*(this.radius);
//   }
// }
// console.log(circle.calculateArea());

// Question Four

function Car(make, model) {
    (this.make = make), (this.model = model);
  }
  
  const car1 = new Car("Toyota", "Hilux");
  const car2 = new Car("Mazda", "Cx5");
  
  console.log(car1);
  
  // Question Five
  
  function calculateArea(length, width = 5) {
    const area = length * width;
    return area;
  }
  
  console.log(calculateArea(10, 6));
  console.log(calculateArea(8));


  
  const cal = (a,b, callback) => {
    let result = a*b;
    callback (result);
  };

  const distotal = (total) =>{
    console.log("The total is" + total);
  }
 cal(5,2, distotal);

 function myFunction(a, b){
  let word;
  if (a.indexOf(b)>1){
    word = b+a;
  }
  else {
    word = a+b;
  }
  return word;
  }
  // function myFunction(a,b){
  //   return a.indexOf(b);
  // }
console.log(myFunction("hellwor", "mp"));
console.log("hellp");

function countChar (a, b){
 
  const eachChar = b.split('');
  const filterAchar = eachChar.filter((eachChar) => eachChar == a );
  return filterAchar.length;
  
}
console.log(countChar('t', "Have paramatta"));

// Get nth element of array
//     Write a function that takes an array (a) and a value (n) as argument
//     Return the nth element of 'a'

const newArray = ["toyota", "nissan","hyundai","volvo", "holden","mitshibushi","isuzu"];
function nArray (a, n) {
  return a[n-1];
}
console.log(nArray(newArray, 3));

// Remove first n elements of an array
// function nremoveN (a, n) {
//   const newCar = a.splice(n,n);
//    return newCar;
// }
// console.log(nremoveN(newArray,3));

// Checking Number has decimal or not
function checkDecimal(num){
  if(Number.isInteger(num)){
    return true;
  }
  else{
    return false;
  }
}
console.log(checkDecimal(2.1));

// Reservsing in array and Sorting in Array
function sorting(a){
  return sortReverse = a.sort();

}
console.log(sorting(newArray));

// Returning Average of Array
const numArray = [2,4,5,9];
const avgArray = (arr) => {
  const avg = arr.reduce((accumulator, currentValue) => 
     accumulator + currentValue
  )
  return avg;
}
console.log(avgArray(numArray));

// Reduce Array method for finding longest string
const findLongestString = (arr) => {
   const stringLength = arr.map((items) => items.length);
    // const longestLength = Math.max(...stringLength);
    // const longestString = stringLength.longest;
    
   
return stringLength;

}
console.log(findLongestString(newArray));



var x = 7;
if (1 > 0.5) {
  let x = 1;
} else {
  let x = 2;
}
console.log(x);


function first()
{
  console.log("1");
}
function second()
{
  setTimeout(() =>{
    console.log("2");
  },0)
  
}
function third()
{
  console.log(3)
}
first();

third();

const promise = new Promise((resolve, reject) => {
  resolve({ user: 'dk'})
})

promise
.then((data) => {
  console.log(data)
})
.catch((err) => {
  console.log(err)
})