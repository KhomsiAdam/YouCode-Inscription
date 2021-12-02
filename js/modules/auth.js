import Candidate from '../classes/Candidate.js';
import Staff from '../classes/Staff.js';
// Check if user is logged in by checking the CIN and redirect to homepage if it doesn't exist or it isn't valid
export function auth() {

    const routes = ['/', '/index.html', '/onlinetest.html', '/sourcing.html', '/admin.html', '/dashboard.html']

    switch (window.location.pathname) {
        // Candidate platform
        case '/':
            routingCandidate();
            break;
        case '/index.html':
            routingCandidate();
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
        if (redirect === true) location.replace('/')
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