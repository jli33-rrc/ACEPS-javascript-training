// // Document Object Model
// const a = document.querySelector('p');
// console.log(a);

// const b = document.querySelector('.error');
// console.log(b);

// const c = document.querySelector('div.error');
// console.log(c);

// // Inspect > Right click for 'Copy selector'
// const d = document.querySelector('body > h1');
// console.log(d);

// const e = document.querySelectorAll('p');
// e.forEach(ee => {
// 	console.log(ee);
// });
// console.log(e[2]);

// const error = document.querySelectorAll('.error');
// console.log(error);

// // Get An Element by ID
// const pageTitle = document.getElementById('page-title');
// console.log(pageTitle);

// // Get Elements by Their Class Name
// const errors = document.getElementsByClassName('error');
// console.log(errors);
// console.log(errors[0]);

// // Get Elements by Their Tag Name
// const f = document.getElementsByTagName('p');
// console.log(f);
// console.log(f[1]);

// const ninjas = document.querySelector('p');
// // console.log(ninjas.innerText);
// // ninjas.innerText = 'ninjas are awesome!';
// // ninjas.innerText += 'ninjas are awesome!';

// const g = document.querySelectorAll('p');
// g.forEach(gg => {
// 	console.log(gg.innerText);
// 	gg.innerText += 'new text';
// });

// const content = document.querySelector('.content');
// // console.log(content.innerHTML);
// // content.innerHTML = '<h2>THIS IS A NEW H2</h2>';
// // content.innerHTML += '<h2>THIS IS A NEW H2</h2>';

// const people = ['mario', 'luigi', 'yoshi'];
// people.forEach(person => {
// 	content.innerHTML += `<p>${person}</p>`;
// });

// const link = document.querySelector('a');
// console.log(link.getAttribute('href'));
// link.setAttribute('href', 'https://www.youtube.com');
// link.innerHTML = 'YouTube website';

// const message = document.querySelector('p');
// console.log(message.getAttribute('class'));
// message.setAttribute('class', 'success');
// message.setAttribute('style', 'color: green');

// const title = document.querySelector('h1');
// // title.setAttribute('style', 'margin: 50px');
// console.log(title.style);
// console.log(title.style.color);
// title.style.margin = '50px';
// title.style.color = 'blue';
// title.style.fontSize = '60px';
// title.style.margin = '';

// const stuff = document.querySelector('p');
// console.log(stuff.classList);
// stuff.classList.add('error');
// stuff.classList.remove('error');
// stuff.classList.add('success');

const paras = document.querySelectorAll('p');
paras.forEach(p => {
	// console.log(p.innerText);
	//console.log(p.textContent);
	if(p.textContent.includes('error')){
		p.classList.add('error');
	}
	if(p.innerText.includes('success')){
		p.classList.add('success');
	}
});

const title = document.querySelector('.title');
title.classList.toggle('test');
title.classList.toggle('test');
