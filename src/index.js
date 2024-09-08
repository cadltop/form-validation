import "normalize.css";
import "./index.css";

const formElements = {
  get email() {
    const label = document.querySelector('label[for="email"]');
    const input = document.querySelector("input#email");
    return { label, input };
  },
  get country() {
    const label = document.querySelector('label[for="country"]');
    const input = document.querySelector("select#country");
    return { label, input };
  },
  get zipCode() {
    const label = document.querySelector('label[for="zip-code"]');
    const input = document.querySelector("input#zip-code");
    return { label, input };
  },
  get password() {
    const label = document.querySelector('label[for="password"]');
    const input = document.querySelector("input#password");
    return { label, input };
  },
  get confirmPassword() {
    const label = document.querySelector('label[for="confirm-passsword"]');
    const input = document.querySelector("input#confirm-password");
    return { label, input };
  },
  get submit() {
    return document.querySelector("form button");
  },
};

const ElementStyle = {
  styleInvalid(formElement, errorMessage) {
    const errorSpan = document.createElement("span");
    errorSpan.style.color = "red";
    errorSpan.style.fontSize = "0.8rem";
    errorSpan.innerHTML = errorMessage;
    formElement.label.append(errorSpan);
    formElement.input.style.outlineColor = "red";
  },
  styleValid(formElement) {
    formElement.label.removeChild(formElement.label.children[0]);
    formElement.input.style.outlineColor = "#33CC33";
  },
};
