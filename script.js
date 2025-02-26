"use strict";
const firstName = document.querySelector("#firstName");
const lastName = document.querySelector("#lastName");
const email = document.querySelector("#email");
const textArea = document.querySelector("#textArea");
const term = document.querySelector("#term");
const termError = document.querySelector("#termError");
const userChoice = document.getElementsByName("userChoice");
const errorText = document.querySelector("#error");
const submitBtn = document.querySelector("#submitBtn");

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
  input.style.borderColor = "hsl(0, 66%, 54%)";
}

function showSuccess(input) {
  const errorEl = input.nextElementSibling;
  errorEl.textContent = "";
}

function isValid(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function validateInputs() {
  const firstNameValue = firstName.value.trim();

  if (firstNameValue === "") {
    showError(firstName, "This field is required");
  } else {
    showSuccess(firstName);
  }

  const lastNameValue = lastName.value.trim();

  if (lastNameValue === "") {
    showError(lastName, "This field is required");
  } else {
    showSuccess(lastName);
  }

  const emailValue = email.value.trim();

  if (emailValue === "") {
    showError(email, "This field is required");
  } else if (!isValid(emailValue)) {
    showError(email, "Please enter a valid email address");
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
    errorText.style.fontWeight = "bold";
  } else {
    errorText.textContent = "";
  }

  const messageEl = textArea.value.trim();

  if (messageEl === "") {
    showError(textArea, "This field is required");
  } else {
    showSuccess(textArea);
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
  } else {
    termError.textContent = "";
  }
}
