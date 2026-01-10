// Function Declaration
function greet(){
	console.log('Hello there');
}
greet();

/* Function Expression
const speak = function(){
	console.log('Good day');
};
speak();
*/

/* Arguments and Parameters
const speak = function(name, time){
	console.log(`Good ${time} ${name}`);
};
speak('mario', 'morning');
*/

const speak = function(name = 'luigi', time = 'night'){
	console.log(`Good ${time} ${name}`);
};
speak();
speak('shaun');

/* Regular Function and Returning Values
const calcArea = function(radius){
	// let area = 3.14 * radius**2;
	// return area;

	return 3.14 * radius**2;
};
const area = calcArea(5);
console.log(area);
*/

// Arrow Function - A shorter way to write functions
const calcArea = (radius) => 3.14 * radius**2;
const area = calcArea(5);
console.log('Area is: ', area);

/* Practice Arrow Functions
// #1
const greet = function(){
	return 'hello, world';
};

const greet = () => 'hello, world';
const result = greet();
console.log(result);

// #2
const bill = function(products, tax){
	let total = 0;
	for(let i = 0; i < products.length; i++){
		total += products[i] + products[i] * tax;
	}
	return total;
};
console.log(bill([10,15,30], 0.2));

const bill = (products, tax) => {
	let total = 0;
	for(let i = 0; i < products.length; i++){
		total += products[i] + products[i] * tax;
	}
	return total;
};
console.log(bill([10,15,30], 0.2));
*/

// Functions and Methods
const name = 'shaun';

const intro = () => 'hello';
let resultOne = intro();
console.log(resultOne);

let resultTwo = name.toUpperCase();
console.log(resultTwo);

// Callbacks and foreach
/* 
const myFunc = (callbackFunc) => {
	// Do something
	let value = 50;
	callbackFunc(value);
};

myFunc(function(value){
	// Do something
	console.log(value);
});

myFunc(value => {
	// Do something
	console.log(value);
});
*/

const people = ['mario', 'luigi', 'ryu', 'shaun', 'chun-li'];

/*
people.forEach(function(person){
	console.log(person);
});

people.forEach((person, index) => {
	console.log(index, person);
});
*/

const logPerson = (person, index) => {
	console.log(`${index} - hello ${person}`);
};
people.forEach(logPerson);

// Get a reference to the 'ul'
const ul = document.querySelector('.people');
let html = ``;

/* 
people.forEach(function(person){
	// Create HTML template
	html += `<li style="color: purple">${person}</li>`;
});
*/

people.forEach(person => {
	// Create HTML template
	html += `<li style="color: purple">${person}</li>`;
});
console.log(html);
ul.innerHTML = html;
