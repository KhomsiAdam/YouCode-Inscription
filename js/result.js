
// Import Classes
import Result from './classes/Result.js';

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
    const Atechnical = document.getElementById('t-answer').value;

    let result = new Result();
    document.getElementById('export').addEventListener('click', (e) => {
        e.preventDefault();

        // Create result
        result.Addresult();
     
        
    });
    // Serious Game
    document.getElementById('serious-submit').addEventListener('click', (e) => {
        e.preventDefault();
        result.seriousgame(QseriousGame.textContent, AseriousGame.value);
        console.log("serious game");
    });

    //Motivation
     document.getElementById('motivation-submit').addEventListener('click', (e) => {
        e.preventDefault();
         result.motivation(Qmotivation.textContent, Amotivation.value);
         console.log("motivation");
     });
    
    //Administrative
     document.getElementById('administrative-submit').addEventListener('click', (e) => {
        e.preventDefault();
         result.administrative(Q1administrative.textContent, Q2administrative.textContent, Q3administrative.textContent, A1administrative.value, A2administrative.value, A3administrative.value);
         console.log("administrative");
     });
    
    //technical
     document.getElementById('technical-submit').addEventListener('click', (e) => {
        e.preventDefault();
         result.technical(QseriousGame.textContent, AseriousGame.value);
         console.log("technical");
    });
    
   

 

})