
// Import Classes
import Result from './classes/Result.js';
import { addError, removeError } from './modules/error.js';

document.addEventListener('DOMContentLoaded', () => {

    const QseriousGame = document.querySelector('.seriousgame__case');
    const AseriousGame = document.getElementById('s-response');
    const Qmotivation = document.querySelector('.motivation__question');
    const Amotivation = document.getElementById('m-answer');
    const Q1administrative = document.getElementById('Q1administrative');
    const Q2administrative = document.getElementById('Q2administrative');
    const Q3administrative = document.getElementById('Q3administrative');
    const A1administrative = document.getElementById('a-answer-1');
    const A2administrative = document.getElementById('a-answer-2');
    const A3administrative = document.getElementById('a-answer-3');
    const Qtechnical = document.querySelector('.technical__question');
    const Atechnical = document.getElementById('t-answer');
    const export_btn = document.getElementById('export');
    
    const serious_error = document.getElementById('serious-error');
    const motivation_error = document.getElementById('motivation-error');
    const administrative_error = document.getElementById('administrative-error');
    const technical_error = document.getElementById('technical-error');
    const result_error = document.getElementById('result-error');

    let result = new Result();
    export_btn.addEventListener('click', (e) => {
        e.preventDefault();
        result_error.innerHTML = '';

        // Create result
        if (AseriousGame.value !== '' && Amotivation.value !== '' && A1administrative.value !== '' && A2administrative.value !== '' && A3administrative.value !== '' && Atechnical.value !== '') {
            result.Addresult();
        } else {
            result_error.innerHTML = 'Veuillez remplir tout les champs.';
        }

    });
    // Serious Game
    document.getElementById('serious-submit').addEventListener('click', (e) => {
        e.preventDefault();
        serious_error.innerHTML = '';
        if (AseriousGame.value !== '') {
            result.seriousgame(QseriousGame.textContent, AseriousGame.value);
            console.log("serious game");
            QseriousGame.disabled = "true";
            AseriousGame.disabled = "true";
            document.getElementById('serious-submit').classList.add('disabled');
            if (AseriousGame.disabled === true && Amotivation.disabled === true && A1administrative.disabled === true && A2administrative.disabled === true && A3administrative.disabled === true && Atechnical.disabled === true) {
                export_btn.classList.remove('hide');
            }
        } else {
            addError(AseriousGame);
            serious_error.innerHTML = 'Veuillez remplir tout les champs.';
        }
    });
    removeError(AseriousGame, serious_error);

    //Motivation
    document.getElementById('motivation-submit').addEventListener('click', (e) => {
        e.preventDefault();
        motivation_error.innerHTML = '';
        if (Amotivation.value !== '') {
            result.motivation(Qmotivation.textContent, Amotivation.value);
            console.log("motivation");
            Qmotivation.disabled = "true";
            Amotivation.disabled = "true";
            document.getElementById('motivation-submit').classList.add('disabled');
            if (AseriousGame.disabled === true && Amotivation.disabled === true && A1administrative.disabled === true && A2administrative.disabled === true && A3administrative.disabled === true && Atechnical.disabled === true) {
                export_btn.classList.remove('hide');
            }
        } else {
            addError(Amotivation);
            motivation_error.innerHTML = 'Veuillez remplir tout les champs.';
        }
    });
    removeError(Amotivation, motivation_error);

    //Administrative
    document.getElementById('administrative-submit').addEventListener('click', (e) => {
        e.preventDefault();
        administrative_error.innerHTML = '';
        if (A1administrative.value !== '' && A2administrative.value !== '' && A3administrative.value !== '') {
            result.administrative(Q1administrative.textContent, Q2administrative.textContent, Q3administrative.textContent, A1administrative.value, A2administrative.value, A3administrative.value);
            console.log("administrative");
            Q1administrative.disabled = "true";
            Q2administrative.disabled = "true";
            Q3administrative.disabled = "true";
            A1administrative.disabled = "true";
            A2administrative.disabled = "true";
            A3administrative.disabled = "true";
            document.getElementById('administrative-submit').classList.add('disabled');
            if (AseriousGame.disabled === true && Amotivation.disabled === true && A1administrative.disabled === true && A2administrative.disabled === true && A3administrative.disabled === true && Atechnical.disabled === true) {
                export_btn.classList.remove('hide');
            }
        } else {
            addError(A1administrative);
            addError(A2administrative);
            addError(A3administrative);
            administrative_error.innerHTML = 'Veuillez remplir tout les champs.';
        }
    });
    removeError(A1administrative, administrative_error);
    removeError(A2administrative, administrative_error);
    removeError(A3administrative, administrative_error);


    //technical
    document.getElementById('technical-submit').addEventListener('click', (e) => {
        e.preventDefault();
        technical_error.innerHTML = '';
        if (Atechnical.value !== '') {
            result.technical(Qtechnical.textContent, Atechnical.value);
            console.log("technical");
            Qtechnical.disabled = "true";
            Atechnical.disabled = "true";
            document.getElementById('technical-submit').classList.add('disabled');
            if (AseriousGame.disabled === true && Amotivation.disabled === true && A1administrative.disabled === true && A2administrative.disabled === true && A3administrative.disabled === true && Atechnical.disabled === true) {
                export_btn.classList.remove('hide');
            }
        } else {
            addError(Atechnical);
            technical_error.innerHTML = 'Veuillez remplir tout les champs.';
        }
    });
    removeError(Atechnical, technical_error);

})