"use strict";
const firstName = document.querySelector("#firstName");
const lastName = document.querySelector("#lastName");
const email = document.querySelector("#email");
const userMessage = document.querySelector("#userMessage");
const term = document.querySelector("#term");
const termError = document.querySelector("#termError");
const userChoice = document.getElementsByName("userChoice");
const errorText = document.querySelector("#error");
const submitBtn = document.querySelector("#submitBtn");
const successMessage = document.querySelector("#successMessage");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  validateInputs();
});

function showError(input, message) {
  const errorEl = input.nextElementSibling;
  errorEl.textContent = message;
  errorEl.style.color = "hsl(0, 66%, 54%)";
  errorEl.style.fontWeight = "bold";
  errorEl.style.fontSize = "14px";
  errorEl.style.marginTop = "0.3rem";
  input.style.borderColor = "hsl(0, 66%, 54%)";
}

function showSuccess(input) {
  const errorEl = input.nextElementSibling;
  errorEl.textContent = "";
}

function isValid(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function showSuccessMessage() {
  successMessage.style.display = "block";

  setTimeout(() => {
    successMessage.style.display = "none";
  }, 6000);

  firstName.value = "";
  lastName.value = "";
  email.value = "";
  userMessage.value = "";
  term.checked = false;

  userChoice.forEach((choice) => (choice.checked = false));
}

function validateInputs() {
  let isFormValid = true;

  const firstNameValue = firstName.value.trim();
  if (firstNameValue === "") {
    showError(firstName, "This field is required");
    isFormValid = false;
  } else {
    showSuccess(firstName);
  }

  const lastNameValue = lastName.value.trim();
  if (lastNameValue === "") {
    showError(lastName, "This field is required");
    isFormValid = false;
  } else {
    showSuccess(lastName);
  }

  const emailValue = email.value.trim();
  if (emailValue === "") {
    showError(email, "This field is required");
    isFormValid = false;
  } else if (!isValid(emailValue)) {
    showError(email, "Please enter a valid email address");
    isFormValid = false;
  } else {
    showSuccess(email);
  }

  let isSelected = false;
  for (let i = 0; i < userChoice.length; i++) {
    if (userChoice[i].checked) {
      isSelected = true;
      break;
    }
  }

  if (!isSelected) {
    errorText.textContent = "Please select a query type";
    errorText.style.color = "hsl(0, 66%, 54%)";
    errorText.style.fontSize = "14px";
    errorText.style.marginTop = "0.2rem";
    errorText.style.fontWeight = "bold";
    isFormValid = false;
  } else {
    errorText.textContent = "";
  }

  const messageEl = userMessage.value.trim();
  if (messageEl === "") {
    showError(userMessage, "This field is required");
    isFormValid = false;
  } else {
    showSuccess(userMessage);
  }

  let isChecked = false;
  if (term.checked) {
    isChecked = true;
  }

  if (!isChecked) {
    termError.textContent =
      "To submit this form, please consent to being contacted";
    termError.style.color = "hsl(0, 66%, 54%)";
    termError.style.fontSize = "14px";
    termError.style.fontWeight = "bold";
    isFormValid = false;
  } else {
    termError.textContent = "";
  }

  showSuccessMessage();
}
