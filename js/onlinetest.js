// Import Classes
import Candidate from './classes/Candidate.js';
import Onlinetest from './classes/Onlinetest.js';
// Import Modules
import { auth } from './modules/auth.js';
import { loading } from './modules/loading.js';

// Any code that needs to run after the document loads
document.addEventListener('DOMContentLoaded', () => {
    // Check user authenticity
    auth();
    loading();
    
    document.getElementById('logout').addEventListener('click', () => {
        let candidat = new Candidate();
        candidat.logout()
    })

    // Fetch data Questions
    let onlinetest = new Onlinetest();
    onlinetest.getQuestions();
})

// Any code that needs to run after the document fully loads with all the assets
window.addEventListener('load', () => {
})