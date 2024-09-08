import "normalize.css";
import "./index.css";

const formInputs = {
  get email() {
    return document.querySelector("form input#email");
  },
  get country() {
    return document.querySelector("form select#country");
  },
  get zipCode() {
    return document.querySelector("form input#zip-code");
  },
  get password() {
    return document.querySelector("form input#password");
  },
  get confirmPassword() {
    return document.querySelector("form input#confirm-password");
  },
  get submit() {
    return document.querySelector("form button");
  },
};
