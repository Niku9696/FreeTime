const form = document.querySelector('#form');
const username = document.querySelector('#username');
const email = document.querySelector('#email');
const password = document.querySelector('#password');
const password2 = document.querySelector('#password2');

form.addEventListener('submit', (event) => {
event.preventDefault();

checkInputs();
});

const checkInputs = () => {
const usernameValue = username.value.trim();
const emailValue = email.value.trim();
const passwordValue = password.value.trim();
const password2Value = password2.value.trim();

if (usernameValue === '') {
setError(username, 'Enter username');
} else {
setSuccess(username);
}

if (emailValue === '') {
setError(email, 'Enter Email');
} else {
setSuccess(email);
}

if (passwordValue === '') {
setError(password, 'Enter password');
} else {
setSuccess(password);
}

if (password2Value === '') {
setError(password2, 'Enter password again');
} else if (passwordValue !== password2Value) {
setError(password2, 'Passwords are not the same');
} else {
setSuccess(password2);
}
};

const setError = (input, message) => {
const formControl = input.parentElement;
const small = formControl.querySelector('small');

formControl.className = 'form-control error'; // Cambiar a 'form-control' en lugar de 'formControl'
small.innerText = message;
};

const setSuccess = (input) => { // Pasar el parámetro 'input'
const formControl = input.parentElement;
formControl.className = 'form-control success'; // Cambiar a 'form-control' en lugar de 'formControl'
};