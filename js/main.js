const submitBtn = document.querySelector('.submit-btn');

function validateEmail() {
	let mailFormat = /^\w+([.-]?=\w+)*@\w+([.-]?=\w+)*(.\w{2,3})+$/;
    
	if (document.querySelector('.email-input').value.match(mailFormat)) {
	} else {
		document.querySelector('.error-msg').style.display = 'block';
		document.querySelector('.error-msg').innerHTML =
			'Please provide a valid email';
		document.querySelector('.error-icon').style.display = 'block';
	}
}

submitBtn.addEventListener('click', validateEmail);
