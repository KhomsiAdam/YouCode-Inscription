import Candidate from '../classes/Candidate.js';
import Staff from '../classes/Staff.js';
// Check if user is logged in by checking the CIN and redirect to homepage if it doesn't exist or it isn't valid
export function auth() {

    const routes = ['/', '/index.html', '/register.html', '/onlinetest.html', '/sourcing.html', '/admin.html', '/dashboard.html']

    switch (window.location.pathname) {
        // Candidate platform
        case '/':
            routingCandidate();
            break;
        case '/index.html':
            routingCandidate();
            break;
        case '/register.html':
            routingCandidate();
            if (localStorage.getItem('password') && localStorage.getItem('username')) {
                const inputs = document.getElementById('sign-in').getElementsByTagName('input');
                for (let i = 0; i < inputs.length; i++) {
                    inputs[i].classList.remove('error');
                    inputs[i].value = '';
                }
                document.querySelector('.material-icons').classList.remove('hidden');
                document.getElementById('sign-up-error').innerHTML = '';
                document.getElementById('sign-in').classList.remove('hidden');
                document.getElementById('sign-up').classList.add('hidden');
                document.querySelector('.main__title').innerHTML = "Connexion";
                document.body.scrollTop = 0;
                document.documentElement.scrollTop = 0;

                document.getElementById('username').value = localStorage.getItem('username');
                document.getElementById('password').value = localStorage.getItem('password');
            }
            break;
        case '/onlinetest.html':
            routingCandidate(true);
            break;
        case '/sourcing.html':
            routingCandidate(true);
            break;
        // Staff platform
        case '/admin.html':
            routingStaff()
            break;
        case '/dashboard.html':
            routingStaff(true)
            break;
    }
}

// Handling Candidate routes
function routingCandidate(redirect = false) {
    if (localStorage.getItem('CIN')) {
        let candidate = new Candidate();
        candidate.getByCIN();
    } else if (localStorage.getItem('UCODE')) {
        let staff = new Staff();
        staff.getByUCODE();
    } else {
        if (redirect === true) location.replace('/register.html')
    }
}

// Handling Staff routes
function routingStaff(redirect = false) {
    if (localStorage.getItem('CIN')) {
        let candidate = new Candidate();
        candidate.getByCIN();
    } else if (localStorage.getItem('UCODE')) {
        let staff = new Staff();
        staff.getByUCODE();
    } else {
        if (redirect === true) location.replace('/admin.html')
    }
}