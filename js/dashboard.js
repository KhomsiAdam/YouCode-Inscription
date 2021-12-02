// Import Classes
import Candidate from './classes/Candidate.js';
import Staff from './classes/Staff.js';
// Import Modules
import { auth } from './modules/auth.js';
import { loading } from './modules/loading.js';

// Any code that needs to run after the document loads
document.addEventListener('DOMContentLoaded', () => {
    // Check user authenticity
    auth();
    loading();

    document.getElementById('logout').addEventListener('click', () => {
        let staff = new Staff();
        staff.logout()
    })
    // Get all candidates
    const candidates = new Candidate();
    candidates.getAll();
})

// Any code that needs to run after the document fully loads with all the assets
window.addEventListener('load', () => {
})