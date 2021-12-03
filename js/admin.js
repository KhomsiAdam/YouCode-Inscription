// Import Classes
import Staff from './classes/Staff.js';
// Import Modules
import { auth } from './modules/auth.js';
import { addError, regexError, removeError } from './modules/error.js';
import { loading } from './modules/loading.js';
import { regexInputs } from './modules/regex.js';

// Any code that needs to run after the document loads
document.addEventListener('DOMContentLoaded', () => {
    // Check user authenticity
    auth();
    loading();

    // Handling the sign in / login
    const username = document.getElementById('username');
    const password = document.getElementById('password');
    const sign_in_error = document.getElementById('sign-in-error');

    document.getElementById('sign-in-button').addEventListener('click', (e) => {
        e.preventDefault();
        // Check for empty values
        if (username.value === '' || password.value === '') {
            sign_in_error.innerHTML = 'Veuillez remplir tout les champs.';
            addError(username);
            addError(password);
        } else {
            // Check for special characters
            if (regexInputs(username.value) && regexInputs(password.value)) {
                // Sign in the staff to view candidates
                let staff = new Staff();
                staff.signIn(username.value, password.value);
            } else if (!regexInputs(username.value) || !regexInputs(password.value)) {
                sign_in_error.innerHTML = 'Veuillez entrer des charactères valides.';
                regexError(username);
                regexError(password);
            }
        }
    })
    removeError(username, sign_in_error);
    removeError(password, sign_in_error);

    // Show/Hide password field in user login page
    if (document.getElementById('password')) {
        let password_field = document.getElementById('password');
        let password_eyecon = document.getElementById('password-eyecon');
        password_eyecon.addEventListener('click', () => {
            if (password_field.type === 'password') {
                password_field.type = 'text';
                password_eyecon.innerHTML = 'visibility';
            } else {
                password_field.type = 'password';
                password_eyecon.innerHTML = 'visibility_off';
            }
        })
    }

    
})

// Any code that needs to run after the document fully loads with all the assets
window.addEventListener('load', () => {
    document.querySelector('.material-icons.hidden').classList.remove('hidden');
})