// Import Classes
import Candidate from './classes/Candidate.js';
import quiz from './classes/onlinetest.js';
// Import Modules
import { auth } from './modules/auth.js';

// Any code that needs to run after the document loads
document.addEventListener('DOMContentLoaded', () => {
    // Check user authenticity
    auth();
    document.getElementById('logout').addEventListener('click', () => {
        let candidat = new Candidate();
        candidat.logout()
    })

    /// Fetch data Questions
    let Quiz = new quiz();
    Quiz.getQuestions();
    

    // let Test = document.querySelector(".quiz");


//       var Quiz = function(){
//   var self = this;
//   this.init = function(){
//     self._bindEvents();
//   }
  
//   this.correctAnswers = [
//     { question: 1, answer: 'a' },
//     { question: 2, answer: 'b' },
//     { question: 3, answer: 'd' },
//     { question: 4, answer: 'c' },
//     { question: 5, answer: 'd' },
//     { question: 6, answer: 'b' },
//   ]
  
//   this._pickAnswer = function($answer, $answers){
//     $answers.querySelector('.quiz-answer').removeClass('active');
//     $answer.classList.add('active');
//   }
//   this._calcResult = function(){
//     var numberOfCorrectAnswers = 0;
//     document.querySelector('ul[data-quiz-question]').each(function(i){
//       var $this = document.querySelector(this),
//           chosenAnswer = $this.querySelector('.quiz-answer.active').data('quiz-answer'),
//           correctAnswer;
      
//       for ( var j = 0; j < self.correctAnswers.length; j++ ) {
//         var a = self.correctAnswers[j];
//         if ( a.question == $this.data('quiz-question') ) {
//           correctAnswer = a.answer;
//         }
//       }
      
//       if ( chosenAnswer == correctAnswer ) {
//         numberOfCorrectAnswers++;
        
//         // highlight this as correct answer
//         $this.querySelector('.quiz-answer.active').classList.add('correct');
//       }
//       else {
//         $this.querySelector('.quiz-answer[data-quiz-answer="'+correctAnswer+'"]').classList.add('correct');
//         $this.querySelector('.quiz-answer.active').classList.add('incorrect');
//       }
//     });
//     if ( numberOfCorrectAnswers != 5 ) {
//       return {code: 'bad', text: 'Good luck next time'};
//     }
//     else if ( numberOfCorrectAnswers == 5 ) {
//       return {code: 'good', text: 'Well Done '};
      
//     }
//   }
//   this._isComplete = function(){
//     var answersComplete = 0;
//     document.querySelector('ul[data-quiz-question]').each(function(){
//       if ( document.querySelector(this).querySelector('.quiz-answer.active').length ) {
//         answersComplete++;
//       }
//     });
//     if ( answersComplete >= 5 ) {
//       return true;
//     }
//     else {
//       return false;
//     }
//   }
//   this._showResult = function(result){
//     document.querySelector('.quiz-result').classList.add(result.code).html(result.text);
//   }
//   this._bindEvents = function(){
//     document.querySelector('.quiz-answer').addEventListener('click', function(){
//       var $this = find(this),
//           $answers = $this.closest('ul[data-quiz-question]');
//       self._pickAnswer($this, $answers);
//       if ( self._isComplete() ) {
        
//         // scroll to answer section
//         document.querySelector('html, body').animate({
//           scrollTop: document.querySelector('.quiz-result').offset().top
//         });
        
//         self._showResult( self._calcResult() );
//         document.querySelector('.quiz-answer').removeEventListener('click');
        
//       }
//     });
//   }
   
// }

// var quiz = new Quiz();

// quiz.init();
})

// Any code that needs to run after the document fully loads with all the assets
window.addEventListener('load', () => {
})