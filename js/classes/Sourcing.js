// Import fetch module
import { fetchWithGet } from '../modules/fetch.js';

export default class Sourcing {

    id;
    type;

    game;
    case;
    objective;

    motivations;

    administrative;

    technical;

    async getCase() {
        // Get all serious game cases and pick one randomly
        this.cin = localStorage.getItem('CIN');
        const data = await fetchWithGet(`http://localhost:3000/candidate/?cin=${this.cin}`);
        if (data[0].status === "Accepted") {

            const data = await fetchWithGet(`http://localhost:3000/sourcing/?type=seriousgame`);
            if (data.length > 0) {
                console.log(data);
                this.game = data[Math.floor(Math.random() * data.length)];
                console.log(this.game);
                this.case = this.game.case;
                this.objective = this.game.objective;
                document.querySelector('.seriousgame__case').innerHTML = this.case;
                document.querySelector('.seriousgame__objective').innerHTML = '<strong>Objectif: </strong>' + this.objective;
                this.getMotivation();
                this.getAdministrative();
                this.getTechnical();
            }
        } else {
            document.querySelector('.main').innerHTML = '<h1 class="main__title ss-grid-center">Sourcing</h1>';
            let result = document.createElement('div');
            result.setAttribute('class', 'results show');
            result.innerHTML = "Vous avez déjà passé votre sourcing. Vos réponses sont en cours de traitement.";
            document.querySelector('.main').appendChild(result);
        }
    }

    async getMotivation() {
        // Get all motivation questions and pick one randomly
        const data = await fetchWithGet(`http://localhost:3000/sourcing/?type=motivation`);
        if (data.length > 0) {
            console.log(data);
            this.motivations = data[Math.floor(Math.random() * data.length)];
            console.log(this.motivations.question);
            document.querySelector('.motivation__question').innerHTML = this.motivations.question;
        }
    }

    async getAdministrative() {
        // Get all administrative questions
        const data = await fetchWithGet(`http://localhost:3000/sourcing/?type=administrative`);
        if (data.length > 0) {
            console.log(data);
            this.administrative = data;
            const questions = document.querySelectorAll('.administrative__question');
            for (let i = 0; i < questions.length; i++) {
                questions[i].innerHTML = this.administrative[i].question;
            }
        }
    }

    async getTechnical() {
        // Get all technical questions and pick one randomly
        const data = await fetchWithGet(`http://localhost:3000/sourcing/?type=technical`);
        if (data.length > 0) {
            console.log(data);
            this.technical = data[Math.floor(Math.random() * data.length)];
            console.log(this.technical.exercise);
            document.querySelector('.technical__question').innerHTML = this.technical.exercise;
        }
    }
}