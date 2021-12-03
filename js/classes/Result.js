// Import fetch module
import { fetchWithData,fetchWithGet } from '../modules/fetch.js';
import Candidate from './Candidate.js';

export default class Result {

    id;
    name;
    cin;
    QseriousGame;
    AseriousGame;
    Qmotivation;
    Amotivation;
    Q1administrative;
    Q2administrative;
    Q3administrative;
    A1administrative;
    A2administrative;
    A3administrative;
    Qtechnical;
    Atechnical;
    created_at;
    // Result
    async Addresult() {
        // Assign values to the parameters
        this.cin = localStorage.getItem('CIN');
        const data = await fetchWithGet(`http://localhost:3000/candidate/?cin=${this.cin}`);
        this.name = data[0].firstname + ' ' + data[0].lastname;

        let created_at = new Date().toISOString().slice(0, 10);
        // Generate the fetch body data
        let body = {
            "name": this.name,
            "cin": this.cin,
            "created_at": created_at,
            "seriousgame": {
                "question": this.QseriousGame,
                "answer": this.AseriousGame
            },
            "motivation": {
                "question": this.Qmotivation,
                "answer": this.Amotivation
            },
            "administrative": {
                "question1": this.Q1administrative,
                "question2": this.Q2administrative,
                "question3": this.Q3administrative,
                "answer1": this.A1administrative,
                "answer2": this.A2administrative,
                "answer3": this.A3administrative
            },
            "technical": {
                "question": this.Qtechnical,
                "answer": this.Atechnical
            }
            
        }

        await fetchWithData('POST', 'http://localhost:3000/result/', body)
        let candidate = new Candidate();
        candidate.updateStatus('Sourced');
    }
     
    seriousgame(QseriousGame,AseriousGame) {
         this.QseriousGame = QseriousGame;
        this.AseriousGame = AseriousGame;
        
    }

    motivation(Qmotivation,Amotivation) {
        this.Qmotivation = Qmotivation;
        this.Amotivation = Amotivation;
    }
    administrative(Q1administrative,Q2administrative,Q3administrative,A1administrative,A2administrative, A3administrative) {
        this.Q1administrative = Q1administrative;
        this.Q2administrative = Q2administrative;
        this.Q3administrative = Q3administrative;
        this.A1administrative = A1administrative;
        this.A2administrative = A2administrative;
        this.A3administrative = A3administrative;
    }
    technical(Qtechnical,Atechnical) {
        this.Qtechnical = Qtechnical;
        this.Atechnical = Atechnical;
    }
    
}
