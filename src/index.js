import "normalize.css";
import "./index.css";

const formFields = {
  get email() {
    const label = document.querySelector('label[for="email"]');
    const input = document.querySelector("input#email");
    const constraint = new RegExp("[a-z0-9._%+-]+@(gmail|outlook)+.com$");
    return { label, input, constraint };
  },
  get country() {
    const label = document.querySelector('label[for="country"]');
    const input = document.querySelector("select#country");
    return { label, input };
  },
  get zipCode() {
    const label = document.querySelector('label[for="zip-code"]');
    const input = document.querySelector("input#zip-code");
    const constraint = new RegExp(
      `\\b${this.country.input.value.toUpperCase()}\\d{4}\\b`,
    );
    return { label, input, constraint };
  },
  get password() {
    const label = document.querySelector('label[for="password"]');
    const input = document.querySelector("input#password");
    const constraint = new RegExp("(?=.*\\d)(?=.*[a-z])(?=.*[A-Z]).{8,}");
    return { label, input, constraint };
  },
  get confirmPassword() {
    const label = document.querySelector('label[for="confirm-password"]');
    const input = document.querySelector("input#confirm-password");
    const constraint = new RegExp(`\\b${this.password.input.value}\\b`);
    return { label, input, constraint };
  },
  get submit() {
    return document.querySelector("form button");
  },
};

const writeSpan = {
  invalid(formField, errorMessage) {
    const errorSpan = formField.label.children[0];
    errorSpan.innerHTML = ` * ${errorMessage}`;
  },
  valid(formField) {
    const errorSpan = formField.label.children[0];
    errorSpan.innerHTML = "";
  },
};

(function events() {
  window.addEventListener("load", () => {
    formFields.zipCode.input.placeholder = `${formFields.country.input.value.toUpperCase()}0000`;
  });
  formFields.submit.addEventListener("click", (e) => {
    checkConstraint(formFields.email, "This field is empty");
    checkConstraint(formFields.password, "This field is empty");
    checkConstraint(formFields.zipCode, "This field is empty");
    e.preventDefault();
  });
  formFields.country.input.addEventListener("change", () => {
    formFields.zipCode.input.placeholder = `${formFields.country.input.value.toUpperCase()}0000`;
    if (formFields.zipCode.input.value)
      checkConstraint(formFields.zipCode, "This zip code is not valid.");
  });

  formFields.email.input.addEventListener("input", () => {
    checkConstraint(formFields.email, "This email address is not valid.");
  });
  formFields.zipCode.input.addEventListener("input", () => {
    checkConstraint(formFields.zipCode, "This zip code is not valid.");
  });
  formFields.password.input.addEventListener("input", () => {
    checkConstraint(formFields.password, "This password is not valid.");
  });
  formFields.confirmPassword.input.addEventListener("input", () => {
    checkConstraint(formFields.confirmPassword, "The passwords don't match.");
  });

  function checkConstraint(formField, errorMessage) {
    if (!formField.constraint.test(formField.input.value)) {
      writeSpan.invalid(formField, errorMessage);
    } else {
      writeSpan.valid(formField);
    }
  }
})();
