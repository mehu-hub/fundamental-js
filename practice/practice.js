// Practice problem - 1
var fruits = ['Apple', 'Banana', 'Orange'];
var checkIndex = fruits.indexOf('Banana');
// console.log(checkIndex);
fruits[1] = 'Mango';
// console.log(fruits);
fruits.pop()
fruits.push('Watermalon');
// console.log(fruits);
// -----------------------------------

// Practice Problem - 2
var myMarks = 85;
var tomMarks = 66;
var janesMarks = 95;
var peterMarks = 56;
var jhonMarks = 40;

if (jhonMarks >= 80) {
    // console.log('A+');
}
else if (jhonMarks >= 70) {
    // console.log('A-');
}
else if (jhonMarks >= 60) {
    // console.log('B');
}
else if (jhonMarks >= 50) {
    // console.log('C');
}
else if (jhonMarks >= 40) {
    // console.log('D');
}
else {
    // console.log('F');
}
// ------------------------------------

// Practice Problem - 3
var num1 = 90;
var num2 = 450;
var num3 = 11;

if(num1 > num2 && num1 > num3){
    // console.log(num1);
}
else if (num2 > num3){
    // console.log(num2);
}
else{
    // console.log(num3);
}
 

// ------------------------------------
// Practice problem - 4
var sides1 = 9;
var sides2 = 9;
var sides3 = 6;

if(sides1 === sides2 && sides2 === sides3 && sides1 === sides3 ){
    // console.log('Somodibahu Triangle');
}
else{
    // console.log('Not Triangle');
}

