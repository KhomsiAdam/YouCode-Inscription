// Import fetch module
import { fetchWithData, fetchWithGet } from '../modules/fetch.js';

export default class Staff {

    id;
    lastname;
    firstname;
    email;
    ucode;
    phone;
    city;
    status;
    username;
    password;
    duplicate = false;

    // Login
    async signIn(username, password) {
        // Get the username and password entered
        this.username = username;
        this.password = password;

        // Get the staff by it's username
        const data = await fetchWithGet(`http://localhost:3000/staff/?username=${this.username}`);
        if (data.length > 0) {
            // Compare the password entered by the candidate's password
            if (data[0].password == this.password) {
                // Store the CIN in localstorage
                localStorage.setItem("UCODE", data[0].ucode);
                // Redirect to the online test page
                location.replace('/dashboard.html');
            } else {
                document.getElementById('sign-in-error').innerHTML = 'Mot de passe incorrect.';
                document.getElementById('password').classList.add('error');
            }
        } else {
            document.getElementById('sign-in-error').innerHTML = 'Identifiant incorrect.';
            document.getElementById('username').classList.add('error');
        }
    }

    // Get staff by UCODE from localstorage
    async getByUCODE() {
        // Get the CIN if it exists
        if (localStorage.getItem('UCODE')) {
            this.ucode = localStorage.getItem('UCODE');
            const data = await fetchWithGet(`http://localhost:3000/staff/?ucode=${this.ucode}`);
            if (data.length > 0) {
                console.log(data);
                // When the staff tries to navigate to other pages than the dashboard
                if (window.location.pathname !== '/dashboard.html') {
                    location.replace('/dashboard.html');
                }
                // If no candidate found with the UCODE provided remove it from localstorage and redirect to homepage
            } else if (data.length === 0) {
                localStorage.removeItem('UCODE');
                location.replace('/admin.html');
            }
        }
    }

    // Logout = remove UCODE from localstorage and redirect to admin page
    logout() {
        localStorage.removeItem('UCODE');
        location.replace('/admin.html');
    }
}