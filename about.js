console.log("hello world");



function handleSubmit(evt) {
	evt.preventDefault();
	
	alert('Thank you for your submission!');
}


let form = document.querySelector('#contact');

form.addEventListener('submit', handleSubmit);

function handleCompliment(evt) {
	evt.preventDefault();
	
	alert('give the user a compliment');
}

let image = document.querySelector('#image')

image.addEventListener('mouseover', handleCompliment)