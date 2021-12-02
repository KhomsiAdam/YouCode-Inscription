// Import fetch module
import { fetchWithData, fetchWithGet } from '../modules/fetch.js';

export default class Candidate {

    id;
    lastname;
    firstname;
    email;
    cin;
    phone;
    city;
    status;
    created_at;
    username;
    password;
    duplicate = false;

    // Register
    async signUp(lastname, firstname, email, cin, phone, city) {
        // Assign values to the parameters
        this.lastname = lastname;
        this.firstname = firstname;
        this.email = email;
        this.cin = cin;
        this.phone = phone;
        this.city = city;

        // Init duplicate status
        this.duplicate = false;

        // Generate the fetch body data
        let body = {
            "lastname": this.lastname,
            "firstname": this.firstname,
            "email": this.email,
            "cin": this.cin,
            "phone": this.phone,
            "city": this.city,
            "status": "Neutral",
            "created_at": "2021-11-30",
            "username": this.firstname + this.lastname,
            "password": "test123"
        }

        // Get all candidates and see if candidate already exists
        const data = await fetchWithGet(`http://localhost:3000/candidate/`);
        if (data.length > 0) {
            console.log(data);
            for (let i = 0; i < data.length; i++) {
                if (data[i].email == this.email || data[i].cin == this.cin) {
                    console.log("Candidate already exists");
                    this.duplicate = true;
                    break;
                }
            }
        }

        // Create new candidate when there isn't a duplicate
        if (this.duplicate == false) {
            await fetchWithData('POST', 'http://localhost:3000/candidate/', body)
        }
    }

    // Login
    async signIn(username, password) {
        // Get the username and password entered
        this.username = username;
        this.password = password;

        // Get the candidate by it's username
        const data = await fetchWithGet(`http://localhost:3000/candidate/?username=${this.username}`);
        if (data.length > 0) {
            console.log(data);
            console.log('fetched password: ' + data[0].password);
            console.log('input password: ' + this.password);
            // Compare the password entered by the candidate's password
            if (data[0].password == this.password) {
                console.log("Correct password");
                // Store the CIN in localstorage
                localStorage.setItem("CIN", data[0].cin);
                // Redirect to the online test page
                location.replace('/onlinetest.html');
            } else {
                console.log("Incorrect password");
            }
        } else {
            console.log("Incorrect username");
        }
    }

    // Get candidate by CIN from localstorage
    async getByCIN() {
        // Get the CIN if it exists
        if (localStorage.getItem('CIN')) {
            this.cin = localStorage.getItem('CIN');
            const data = await fetchWithGet(`http://localhost:3000/candidate/?cin=${this.cin}`);
            if (data.length > 0) {
                console.log(data);
                // When the candidate tries to navigate to other pages than the online test while his status is 'Neutral'
                if (data[0].status == 'Neutral' && window.location.pathname !== '/onlinetest.html') {
                    location.replace('/onlinetest.html');
                // When the candidate tries to navigate to other pages than the sourcing while his status is 'Accepted'
                } else if (data[0].status == 'Accepted' && window.location.pathname !== '/sourcing.html') {
                    location.replace('/sourcing.html');
                }
            // If no candidate found with the CIN provided remove it from localstorage and redirect to homepage
            } else if (data.length === 0) {
                localStorage.removeItem('CIN');
                location.replace('/');
            }
        }
    }

    // Logout = remove CIN from localstorage and redirect to homepage
    logout() {
        localStorage.removeItem('CIN');
        location.replace('/');
    }
}