// for Loops
for(let i = 0; i < 5; i++){
	console.log('In loop: ', i);
}

console.log('Loop finished');

const names = ['shaun', 'mario', 'luigi'];

for(let i = 0; i < names.length; i++){
	// console.log(names[i]);

	let html = `<div>${names[i]}</div>`;
	console.log(html);
}

// while Loops
let i = 0;

while(i < 5){
	console.log('In loop: ', i);
	i++;
}

while(i < names.length){
	console.log(names[i]);
	i++;
}

// do while Loops
let j = 5;

do{
	console.log('The value of j is: ', j);
	j++;
} while(j < 5);

// if Statements
const youth = 25;

if(youth > 20){
	console.log('You are over 20 years old');
}

const ninjas = ['shaun', 'ryu', 'chun-li', 'yoshi'];

if(ninjas.length > 4){
	console.log("That's a lot of ninjas");
}

const password = 'p@ssword';

if(password.length >= 8){
	console.log('That password is long enough');
}

// else if Statements
if(password.length >= 12){
	console.log('That password is mighty strong');
} else if(password.length >= 8){
	console.log('That password is long enough');
} else {
	console.log('That password is not long enough');
}

// Logical Operators - OR || and AND &&
if(password.length >= 12 && password.includes('@')){
	console.log('That password is mighty strong');
} else if(password.length >= 8 || password.includes('@') && password.length > 5){
	console.log('That password is strong enough');
} else {
	console.log('That password is not long enough');
}

// Logical NOT (!)
let user = false;

if(!user){
	console.log('You must be logged in to continue');
}

console.log(!true);
console.log(!false);

// Break and Continue
const scores = [50, 25, 0, 30, 100, 20, 10];

for(let k = 0; k < scores.length; k++){
	if(scores[k] === 0){
		continue;
	}

	console.log('Your score: ', scores[k]);

	if(scores[k] === 100){
		console.log('Congrats, you got the top score!');
		break;
	}
}

// Switch Statements
const grade = 'D';

switch(grade){
	case 'A':
		console.log('You got an A');
		break;
	case 'B':
		console.log('You got an B');
		break;
	case 'C':
		console.log('You got an C');
		break;
	case 'D':
		console.log('You got an D');
		break;
	case 'E':
		console.log('You got an E');
		break;
	default:
		console.log('Not a valid grade');
}

/* This can get long, so it's better to use swtich statements.

if(grade === 'A'){

} else if(grade === 'B'){

} else if(grade === 'C'){
	
} else if(grade === 'D'){
	
} else if(grade === 'E'){
	
} else {

} */

// Variables & Block Scope
let age = 30;

if(true){
	let age = 40;
	let name = 'shaun';

	console.log('Inside first code block: ', age, name);

	if(true){
		let age = 50;
		
		console.log('Inside second code block: ', age);

		var test = 'hello';
	}
}

console.log('Outside code block: ', age, test);
