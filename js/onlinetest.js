// Import Classes
import Candidate from './classes/Candidate.js';
// Import Modules
import { auth } from './modules/auth.js';

// Any code that needs to run after the document loads
document.addEventListener('DOMContentLoaded', () => {
    // Check user authenticity
    auth();
    document.getElementById('logout').addEventListener('click', () => {
        let candidat = new Candidate();
        candidat.logout()
    })
})

// Any code that needs to run after the document fully loads with all the assets
window.addEventListener('load', () => {
})