'use strict'
const form = document.querySelector('#form');
const firstName = document.querySelector('#firstName');
const lastName = document.querySelector('#lastName');
const email = document.querySelector('#email');
const textArea = document.querySelector('#textArea');
// const term = document.querySelector('#term');
const submitBtn = document.querySelector('#submitBtn');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    validateInputs();
});

const showError = (input, message) => {
    const errorEl = input.nextElementSibling;
    errorEl.textContent = message;
};

const showSuccess = (input) => {
    const errorEl = input.nextElementSibling;
    errorEl.textContent = '';
}


const validateInputs = () => {
    const firstNameValue = firstName.value.trim();
    const lastNameValue = lastName.value.trim();
    const emailValue = email.value.trim();
    const textAreaValue = textArea.value.trim();
    // const term = term.value.trim();

    if (firstNameValue === '') {
        showError(firstName, 'This field is required');
    } else {
        showSuccess(firstName);
    };

    if (lastNameValue === '') {
        showError(lastName, 'This field is required');
    } else {
        showSuccess(lastName)
    }
}