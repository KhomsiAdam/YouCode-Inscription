// Import Modules
import { auth } from './modules/auth.js';
import { loading } from './modules/loading.js';

// Any code that needs to run after the document loads
document.addEventListener('DOMContentLoaded', () => {
    // Check user authenticity
    auth();
    loading();
})

// Any code that needs to run after the document fully loads with all the assets
window.addEventListener('load', () => {
})