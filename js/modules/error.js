// Import Regex module
import { regexInputs, regexEmail, regexCIN } from "./regex.js";

// Add error class to input for red outline when empty
export function addError(input) {
    if (input.value == '') {
        input.classList.add('error');
    }
}
// ...when it contains special characters
export function regexError(input) {
    if (!regexInputs(input.value)) {
        input.classList.add('error');
    }
}
// ...when it isn't a valid email
export function regexEmailError(email) {
    if (!regexEmail(email.value)) {
        email.classList.add('error');
    }
}
// ...when it isn't a valid CIN format
export function regexCINError(cin, error) {
    if (!regexCIN(cin.value)) {
        cin.classList.add('error');
        error.innerHTML = 'Doit commencer avec une lettre et 6 nombres.';
    }
}
// Remove error outline from input on focus
export function removeError(input, error) {
    input.addEventListener('focus', () => {
        input.classList.remove('error');
        error.innerHTML = '';
    })
}