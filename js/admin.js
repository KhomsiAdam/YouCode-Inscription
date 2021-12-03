// Import Classes
import Staff from './classes/Staff.js';
// Import Modules
import { auth } from './modules/auth.js';
import { loading } from './modules/loading.js';

// Any code that needs to run after the document loads
document.addEventListener('DOMContentLoaded', () => {
    // Check user authenticity
    auth();
    loading();

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