import Candidate from '../classes/Candidate.js';
// Check if user is logged in by checking the CIN and redirect to homepage if it doesn't exist or it isn't valid
export function auth() {
    if (localStorage.getItem('CIN')) {
        let candidate = new Candidate();
        candidate.getByCIN();
    }
}