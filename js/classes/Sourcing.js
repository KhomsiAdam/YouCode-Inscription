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
        const data = await fetchWithGet(`http://localhost:3000/sourcing/?type=seriousgame`);
        if (data.length > 0) {
            console.log(data);
            this.game = data[Math.floor(Math.random()*data.length)];
            console.log(this.game);
            this.case = this.game.case;
            this.objective = this.game.objective;
            document.querySelector('.seriousgame__case').innerHTML = this.case;
            document.querySelector('.seriousgame__objective').innerHTML = '<strong>Objectif: </strong>' + this.objective;
        }
    }

    async getMotivation() {
        // Get all motivation questions and pick one randomly
        const data = await fetchWithGet(`http://localhost:3000/sourcing/?type=motivation`);
        if (data.length > 0) {
            console.log(data);
            this.motivations = data[Math.floor(Math.random()*data.length)];
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
            this.technical = data[Math.floor(Math.random()*data.length)];
            console.log(this.technical.exercise);
            document.querySelector('.technical__question').innerHTML = this.technical.exercise;
        }
    }
}