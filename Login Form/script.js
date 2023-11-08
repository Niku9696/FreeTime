const form = document.querySelector('#form');
const username = document.querySelector('#username');
const password = document.querySelector('#password');

form.addEventListener('submit', (event) => {
event.preventDefault();

checkInputs();
});

const checkInputs = () => {
const usernameValue = username.value.trim();
const passwordValue = password.value.trim();

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