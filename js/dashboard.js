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
    if (document.querySelectorAll('.sourced-icon')) {
        const icons = document.querySelectorAll('.sourced-icon');
        icons.forEach(icon => {
            console.log(icon.getAttribute('data-cin'));
            icon.addEventListener('click', () => {
                console.log(icon.getAttribute('data-cin'));
                let dataCandidat = new Staff();
                dataCandidat.getdataResult(icon.getAttribute('data-cin'));
            })
        })
    }
})