// Import Classes
import Staff from './classes/Staff.js';
// Import Modules
import { auth } from './modules/auth.js';

// Any code that needs to run after the document loads
document.addEventListener('DOMContentLoaded', () => {
    // Check user authenticity
    auth();
    // Handling the sign in / login
    const username = document.getElementById('username');
    const password = document.getElementById('password');

    document.getElementById('sign-in-button').addEventListener('click', (e) => {
        e.preventDefault();
        // Check for empty values
        if (username.value === '' || password.value === '') {
            console.log('Please fill all the fields');
        } else {
            // Sign in the staff to pass the online test
            let staff = new Staff();
            staff.signIn(username.value, password.value);
        }
    })
})

// Any code that needs to run after the document fully loads with all the assets
window.addEventListener('load', () => {
})