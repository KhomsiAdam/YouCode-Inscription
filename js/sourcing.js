// Import Classes
import Candidate from './classes/Candidate.js';
import Sourcing from './classes/Sourcing.js';
// Import Modules
import { auth } from './modules/auth.js';
import { loading } from './modules/loading.js';

// Any code that needs to run after the document loads
document.addEventListener('DOMContentLoaded', () => {
    // Check user authenticity
    auth();
    loading();

    let sourcing = new Sourcing();
    sourcing.getCase();
    sourcing.getMotivation();
    sourcing.getAdministrative();
    sourcing.getTechnical();

    document.getElementById('logout').addEventListener('click', () => {
        let candidat = new Candidate();
        candidat.logout();
    })
})

// Any code that needs to run after the document fully loads with all the assets
window.addEventListener('load', () => {
})