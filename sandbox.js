// alert('Hello world!');

// console.log(1);
// console.log(2);

let mm = 12;
let yyyy = 2019;
console.log(mm, yyyy);

age = 30;
console.log(age);

const points = 100;
/*  points = 50;
    This will give an error: "Error - Uncaught TypeError: Assignment to constant variable." */
console.log(points);

var total = 75;
console.log(total);

// Strings
console.log('hello, world');

let marioEmail = 'mario@thenetninja.co.uk';
console.log(marioEmail);

// String Concatenation
let firstName = 'Jenna';
let lastName = 'Li';
let fullName = firstName + ' ' + lastName;
console.log(fullName);

// Getting Characters
console.log(fullName[0]);
console.log(fullName[2]);

// String Length
console.log(fullName.length);

// String Methods
console.log(fullName.toUpperCase());
let result = fullName.toLowerCase();
console.log(result, fullName);

let index = marioEmail.indexOf('@');
console.log(index);

// Common String Methods
let findN = marioEmail.lastIndexOf('n');
console.log(findN);

let rio = marioEmail.slice(2,5);
console.log(rio);

let substr = marioEmail.substring(4,10);
console.log(substr);

let wario = marioEmail.replace('m', 'w');
console.log(wario);

let wet = marioEmail.replace('n', 'w');
console.log(wet);

// Numbers
let radius = 10;
const pi = 3.14;
console.log(radius, pi);

// Math Operators: + - * / ** %
console.log(10 / 2);

let remainder = radius % 3;
console.log(remainder);

let answer = pi * radius**2;
console.log(answer);

// Order of Operations: B I D M A S
let bidmas = 5 * (10-3)**2;
console.log(bidmas);

let likes = 10;
// likes = likes + 1;
// likes++;
// likes--;
// likes += 10;
// likes -= 5;
// likes *= 2;
// likes /= 2;
console.log(likes);

// NaN (Not a Number)
console.log(5 / 'hello');
console.log(5 * 'hello');

let blogLikes = 'The blog has ' + likes + ' likes';
console.log(blogLikes);

// Template Strings
const title = 'Best reads of 2019';
const author = 'Mario';
const favourites = 30;

// Concatenation Way
let concatWay = 'The blog called ' + title + ' by ' + author + ' has ' + favourites + ' likes';
console.log(concatWay);

// Template String/Template Literal Way
let tempLit = `The blog called ${title} by ${author} has ${favourites} likes`;
console.log(tempLit)

// Creating HTML Templates
let html = `
    <h2>${title}</h2>
    <p>By ${author}</p>
    <span>This blog has ${favourites} likes</span>
`;
console.log(html);

// Arrays
let ninjas = ['shaun', 'ryu', 'chun-li'];
console.log(ninjas);

ninjas[1] = 'ken';
console.log(ninjas[1]);

let ages = [20,25,30,35];
console.log(ages[2]);

let random = ['shaun', 'crystal', 30, 20];
console.log(random);

console.log(ninjas.length);

// Arrays Methods
let comma = ninjas.join(',');
console.log(comma);

let chunLi = ninjas.indexOf('chun-li');
console.log(chunLi);

let group = ninjas.concat(['ken', 'crystal']);
console.log(group);

let fourNinjas = ninjas.push('ken'); // Returns the length of the new array
// fourNinjas = ninjas.pop();
console.log(fourNinjas);

fourNinjas = ninjas.pop(); // Returns the value of the array
console.log(ninjas);

// Null and Undefined
// let age;
// let age = null;
// console.log(age, age + 3, `the age is ${age}`);

// Boolean and Comparisons
console.log(true, false);
console.log(true, false, "true", "false");

// Methods Can Return Booleans
let luigiEmail = 'luigi@thenetninja.co.uk';
let a = luigiEmail.includes('!');
console.log(a)

let names = ['mario', 'luigi', 'toad'];
let b = names.includes('luigi');
console.log(b);

// Comparison Operators
let youth = 25;
console.log(youth == 25);
console.log(youth == 30);
console.log(youth != 30);
console.log(youth > 20);
console.log(youth < 20);
console.log(youth <= 25);
console.log(youth >= 25);

let name = 'shaun';
console.log(name == 'shaun');
console.log(name == 'Shaun');
console.log(name > 'crystal');
console.log(name > 'Shaun');
console.log(name > 'Crystal');

// Loose Comparison (Different Types Can Still Be Equal)
console.log(youth == 25);
console.log(youth == '25');
console.log(youth != 25);
console.log(youth != '25');

// Strict Comparison (Different Types Cannot Be Equal)
console.log(youth === 25);
console.log(youth === '25');
console.log(youth !== 25);
console.log(youth !== '25');

// Type Conversion
let score = '100';
score = Number(score);
console.log(score + 1);
console.log(typeof score);

let c = Number('hello');
console.log(c);

let d = String(50);
console.log(d, typeof d);

let e = Boolean(100);
console.log(e, typeof e);

let f = Boolean(0);
console.log(f, typeof f);

let g = Boolean('0');
console.log(g, typeof g);
