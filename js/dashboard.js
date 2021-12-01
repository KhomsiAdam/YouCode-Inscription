// Import Classes
import Staff from './classes/Staff.js';
// Import Modules
import { auth } from './modules/auth.js';

// Any code that needs to run after the document loads
document.addEventListener('DOMContentLoaded', () => {
    // Check user authenticity
    auth();
    document.getElementById('logout').addEventListener('click', () => {
        let staff = new Staff();
        staff.logout()
    })
})

// Any code that needs to run after the document fully loads with all the assets
window.addEventListener('load', () => {
})