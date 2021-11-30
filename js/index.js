// Import Classes
import Candidate from './classes/Candidate.js';
// Import Modules
import { auth } from './modules/auth.js';

// Any code that needs to run after the document loads
document.addEventListener('DOMContentLoaded', () => {
    // Check user authenticity
    auth();

    // Hndling the sign up / register
    const lastname = document.getElementById('lastname');
    const firstname = document.getElementById('firstname');
    const email = document.getElementById('email');
    const cin = document.getElementById('cin');
    const phone = document.getElementById('phone');
    const city = document.getElementById('city');
    
    document.getElementById('sign-up-button').addEventListener('click', async function (e) {
        e.preventDefault();
        // Check for empty values
        if (lastname.value === '' || firstname.value === '' || email.value === '' || cin.value === '' || phone.value === '' || city.value === '') {
            console.log('Please fill all the fields');
        } else {
            // Create candidate
            let candidate = new Candidate();
            candidate.register(lastname.value, firstname.value, email.value, cin.value, phone.value, city.value)
        }
    })

    // Handling the sign in / login
    const username = document.getElementById('username');
    const password = document.getElementById('password');

    document.getElementById('sign-in-button').addEventListener('click', async function (e) {
        e.preventDefault();
        // Check for empty values
        if (username.value === '' || password.value === '') {
            console.log('Please fill all the fields');
        } else {
            // Sign in the candidate to pass the online test
            let candidate = new Candidate();
            candidate.signIn(username.value, password.value)
        }
    })
})

// Any code that needs to run after the document fully loads with all the assets
window.addEventListener('load', () => {
})