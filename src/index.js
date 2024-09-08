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
      `\\b${this.country.value.toUpperCase()}\\d{4}\\b`,
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
    const label = document.querySelector('label[for="confirm-passsword"]');
    const input = document.querySelector("input#confirm-password");
    const constraint = new RegExp(
      `\\b${this.password.value.toUpperCase()}\\d{4}\\b`,
    );
    return { label, input, constraint };
  },
  get submit() {
    return document.querySelector("form button");
  },
};

const fieldStyle = {
  invalid(formField, errorMessage) {
    const errorSpan = document.createElement("span");
    errorSpan.style.color = "red";
    errorSpan.style.fontSize = "0.8rem";
    errorSpan.innerHTML = errorMessage;
    formField.label.append(errorSpan);
    formField.input.style.outlineColor = "red";
  },
  valid(formField) {
    const errorSpan = formElement.label.children[0];
    if (errorSpan) formElement.label.removeChild(errorSpan);
    formElement.input.style.outlineColor = "#33CC33";
  },
};
