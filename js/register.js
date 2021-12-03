// Import Classes
import Candidate from './classes/Candidate.js';
// Import Modules
import { auth } from './modules/auth.js';
import { loading } from './modules/loading.js';
import { regexInputs, regexEmail, regexCIN } from './modules/regex.js';
import { addError, regexError, regexEmailError, regexCINError, removeError } from './modules/error.js';
import { getAge } from './modules/age.js';

// Any code that needs to run after the document loads
document.addEventListener('DOMContentLoaded', () => {
    // Check user authenticity
    auth();
    loading();

    // Handling the sign up / register
    const lastname = document.getElementById('lastname');
    const firstname = document.getElementById('firstname');
    const email = document.getElementById('email');
    const cin = document.getElementById('cin');
    const birthdate = document.getElementById('birthdate');
    const phone = document.getElementById('phone');
    const city = document.getElementById('city');
    const sign_up_error = document.getElementById('sign-up-error');

    document.getElementById('sign-up-button').addEventListener('click', (e) => {
        e.preventDefault();
        // Check for empty values
        if (lastname.value === '' || firstname.value === '' || email.value === '' || cin.value === '' || birthdate.value === '' || phone.value === '' || city.value === '') {
            sign_up_error.innerHTML = 'Veuillez remplir tout les champs.';
            addError(lastname);
            addError(firstname);
            addError(email);
            addError(cin);
            addError(birthdate);
            addError(phone);
            addError(city);
        } else {
            // Check for special characters
            if (regexInputs(lastname.value) && regexInputs(firstname.value) && regexEmail(email.value) && regexCIN(cin.value) && regexInputs(birthdate.value) && regexInputs(phone.value) && regexInputs(city.value)) {
                if (getAge(birthdate.value) >= 18 &&  getAge(birthdate.value) <= 35) {
                    // Create candidate
                    let candidate = new Candidate();
                    candidate.signUp(lastname.value, firstname.value, email.value, cin.value, birthdate.value, phone.value, city.value);
                } else {
                    sign_up_error.innerHTML = "Votre age n'est pas valide (doit être entre 18 et 35 ans).";
                    birthdate.classList.add('error');
                }
            } else if (!regexInputs(lastname.value) || !regexInputs(firstname.value) || !regexEmail(email.value) || !regexCIN(cin.value) || !regexInputs(birthdate.value) || !regexInputs(phone.value) || !regexInputs(city.value)) {
                sign_up_error.innerHTML = 'Veuillez entrer des charactères valides.';
                regexError(lastname);
                regexError(firstname);
                regexEmailError(email);
                regexCINError(cin);
                regexError(birthdate);
                regexError(phone);
                regexError(city);
            }
        }
    })
    removeError(lastname, sign_up_error);
    removeError(firstname, sign_up_error);
    removeError(email, sign_up_error);
    removeError(cin, sign_up_error);
    removeError(birthdate, sign_up_error);
    removeError(phone, sign_up_error);
    removeError(city, sign_up_error);

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
                // Sign in the candidate to pass the online test
                let candidate = new Candidate();
                candidate.signIn(username.value, password.value);
            } else if (!regexInputs(username.value) || !regexInputs(password.value)) {
                sign_in_error.innerHTML = 'Veuillez entrer des charactères valides.';
                regexError(username);
                regexError(password);
            }
        }
    })
    removeError(username, sign_in_error);
    removeError(password, sign_in_error);

    // Show the login form, hide the register form
    document.getElementById('login').addEventListener('click', () => {
        const inputs = document.getElementById('sign-in').getElementsByTagName('input');
        for (let i = 0; i < inputs.length; i++) {
            inputs[i].classList.remove('error');
            inputs[i].value = '';
        }
        document.querySelector('.material-icons').classList.remove('hidden');
        sign_in_error.innerHTML = '';
        document.getElementById('sign-in').classList.remove('hidden');
        document.getElementById('sign-up').classList.add('hidden');
        document.querySelector('.main__title').innerHTML = "Connexion";
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    })
    // Show the register form, hide the login form
    document.getElementById('register').addEventListener('click', () => {
        const inputs = document.getElementById('sign-up').getElementsByTagName('input');
        for (let i = 0; i < inputs.length; i++) {
            inputs[i].classList.remove('error');
            inputs[i].value = '';
        }
        sign_up_error.innerHTML = '';
        document.getElementById('sign-in').classList.add('hidden');
        document.getElementById('sign-up').classList.remove('hidden');
        document.querySelector('.main__title').innerHTML = "Inscription";
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    })

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
})