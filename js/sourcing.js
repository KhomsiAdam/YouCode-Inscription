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

    //Export file txt
    //  document.getElementById("download").addEventListener('click', (e) => {
    //     e.preventDefault();
    //     let seriousgame__title = document.querySelector('.form__title').textContent;
    //     let seriousgame__case = document.querySelector('.seriousgame__case').textContent;
    //     let seriousgame__objective = document.querySelector('.seriousgame__objective').textContent;
    //     let sresponse = document.getElementById('s-response').value;
        
    //     var dataSourcing = '\t' + seriousgame__title + '\n' + '\n' + seriousgame__case + '\n' + '\n' + seriousgame__objective + '\n' + '\n' + sresponse;
    //     console.log(dataSourcing);
    //     var type;
    //     var file = new Blob([dataSourcing], [type = "text"]);
    //     var anchor = document.createElement("a");
    //    anchor.href = URL.createObjectURL(file);
    //    anchor.download = "data.txt";
    //    anchor.click();
    //  });
    // document.getElementById('serious-submi').addEventListener('click', (e) => {
    //     e.preventDefault();
        
    // });
    // Logout
    document.getElementById('logout').addEventListener('click', () => {
        let candidat = new Candidate();
        candidat.logout();
    })
})

// Any code that needs to run after the document fully loads with all the assets
window.addEventListener('load', () => {
})