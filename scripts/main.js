const myHeading = document.querySelector('h1');
myHeading.textContent = 'Hi there!';

let breathe = 'The world is full of beautiful things just like you';
let n = 'You are like this jar, Open yourself and spread the goods in world';

const para = document.querySelector('p');
para.textContent = breathe;

document.querySelector('h1').addEventListener('click', function() {
  alert('Ouch! Stop poking me!');
});

/*
document.querySelector('html').addEventListener('click', () => {
  alert('Ouch! Stop poking me!');
});
*/

const myImage = document.querySelector('img');
//myImage.addEventListener('click', changeImage());

	
myImage.addEventListener('click', () => {
	let mySrc = myImage.getAttribute('src');
    if(mySrc === 'resources/breathe.jpg') {
      myImage.setAttribute('src','resources/n.jpg');
	  para.textContent = n;
    } else {
      myImage.setAttribute('src','resources/breathe.jpg');
	  para.textContent = breathe;
    }
});

let myButton = document.querySelector('button');
function setUserName() {
	let myName = prompt('Please enter your name.');
	if(!myName) {
		setUserName();
	} else {
		localStorage.setItem('name', myName);
		myHeading.textContent = 'Hi ' + myName;
	}
}

if(!localStorage.getItem('name')) {
  setUserName();
} else {
  let storedName = localStorage.getItem('name');
  myHeading.textContent = 'Hi ' + storedName;
}

myButton.onclick = function() {
  setUserName();
}
