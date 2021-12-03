// Import fetch module
import { fetchWithGet } from '../modules/fetch.js';
import Candidate from './Candidate.js';
let countSpan = document.querySelector(".count span");
let bullets = document.querySelector(".bullets");
let bulletsSpanContainer = document.querySelector(".bullets .spans");
let quizApp = document.querySelector(".quiz-app");
let quizArea = document.querySelector(".quiz-area");
let answersArea = document.querySelector(".answers-area");
let submitButton = document.querySelector(".submit-button");
let resultsContainer = document.querySelector(".results");
let countdownElement = document.querySelector(".countdown");

// Set Options
let currentIndex = 0;
let rightAnswers = 0;
let countdownInterval;

export default class Onlinetest {

    // Get all Questions test online
    async getQuestions() {
        this.cin = localStorage.getItem('CIN');
        const data = await fetchWithGet(`http://localhost:3000/candidate/?cin=${this.cin}`);
        if (data[0].status === "Pending") {
            const data = await fetchWithGet("http://localhost:3000/onlinetest");
            let questionsObject = data;
            console.log(data);
            let qCount = questionsObject.length;

            // Create Bullets + Set Questions Count
            this.createBullets(qCount);

            // Add Question Data
            this.addQuestionData(questionsObject[currentIndex], qCount);

            // Start CountDown
            // this.countdown(5, qCount);

            // Click On Submit
            submitButton.onclick = () => {
                // Get Right Answer
                let theRightAnswer = questionsObject[currentIndex].right_answer;

                // Increase Index
                currentIndex++;

                // Check The Answer
                this.checkAnswer(theRightAnswer, qCount);

                // Remove Previous Question
                quizArea.innerHTML = "";
                answersArea.innerHTML = "";

                // Add Question Data
                this.addQuestionData(questionsObject[currentIndex], qCount);

                // Handle Bullets Class
                this.handleBullets();

                // Start CountDown
                clearInterval(countdownInterval);
                // this.countdown(3, qCount);

                // Show Results
                this.showResults(qCount);
            }
        } else {
            quizApp.innerHTML = '';
            let result = document.createElement('div');
            result.setAttribute('class', 'results show');
            result.innerHTML = "Vous pouvez réssayer l'année prochaine";
            quizApp.appendChild(result);
        }

    };
    createBullets(num) {
        // countSpan.innerHTML = num;

        // Create Spans
        for (let i = 0; i < num; i++) {
            // Create Bullet
            let theBullet = document.createElement("span");
            theBullet.setAttribute('class', 'ss-grid-center')
            theBullet.innerHTML = i + 1;

            // Check If Its First Span
            if (i === 0) {
                // theBullet.className = "on";
                theBullet.setAttribute('class', 'ss-grid-center on')
            }

            // Append Bullets To Main Bullet Container
            bulletsSpanContainer.appendChild(theBullet);
        }
    }

    addQuestionData(obj, count) {
        if (currentIndex < count) {
            // Create H2 Question Title
            let questionTitle = document.createElement("h2");

            // Create Question Text
            let questionText = document.createTextNode(obj["title"]);

            // Append Text To H2
            questionTitle.appendChild(questionText);

            // Append The H2 To The Quiz Area
            quizArea.appendChild(questionTitle);

            // Create The Answers
            for (let i = 1; i <= 4; i++) {
                // Create Main Answer Div
                let mainDiv = document.createElement("div");

                // Add Class To Main Div
                mainDiv.className = "answer";

                // Create Radio Input
                let radioInput = document.createElement("input");
                // Add Type + Name + Id + Data-Attribute
                radioInput.name = "question";
                radioInput.type = "radio";
                radioInput.id = `answer_${i}`;
                radioInput.dataset.answer = obj[`answer_${i}`];

                // Make First Option Selected
                if (i === 1) {
                    // radioInput.checked = true;
                }

                // Create Label
                let theLabel = document.createElement("label");

                // Add For Attribute
                theLabel.htmlFor = `answer_${i}`;

                // Create Label Text
                let theLabelText = document.createTextNode(obj[`answer_${i}`]);

                // Add The Text To Label
                theLabel.appendChild(theLabelText);

                // Add Input + Label To Main Div
                mainDiv.appendChild(radioInput);
                mainDiv.appendChild(theLabel);

                // Append All Divs To Answers Area
                answersArea.appendChild(mainDiv);
            }
        }
    }

    checkAnswer(rAnswer, count) {
        let answers = document.getElementsByName("question");
        let theChoosenAnswer;

        for (let i = 0; i < answers.length; i++) {
            if (answers[i].checked) {
                theChoosenAnswer = answers[i].dataset.answer;
            }
        }

        if (rAnswer === theChoosenAnswer) {
            rightAnswers++;
        }
    };

    handleBullets() {
        let bulletsSpans = document.querySelectorAll(".bullets .spans span");
        let arrayOfSpans = Array.from(bulletsSpans);
        arrayOfSpans.forEach((span, index) => {
            if (currentIndex === index) {
                // span.className = "on";
                span.classList.add('on')
            }
        });
    }

    showResults(count) {
        let theResults;
        let confirm = document.createElement('button');
        confirm.setAttribute('class', 'submit-button');
        if (currentIndex === count) {
            quizArea.remove();
            answersArea.remove();
            submitButton.remove();
            bullets.remove();

            // if (rightAnswers == count) {
            //     theResults = `<span class="good">Good</span>, ${rightAnswers} From ${count}`;
            // } else

            if (rightAnswers === count) {
                theResults = `<span class="perfect">Parfait</span>, vous avez répondu juste à toutes les questions! ${rightAnswers} sur ${count}!<br>Vous pouvez continuer à l'étape suivante`;
                confirm.innerHTML = 'Passer le sourcing';
                confirm.setAttribute('id', 'accepted');
            } else {
                theResults = `<span class="bad">Imparfait</span>, vous avez répondu ${rightAnswers} sur ${count}.<br>Vous pouvez réssayer l'année prochaine`;
                confirm.innerHTML = 'Confirmer';
                confirm.setAttribute('id', 'rejected');
            }

            resultsContainer.classList.add('show');
            resultsContainer.innerHTML = theResults;

            quizApp.appendChild(confirm);
            confirm.onclick = () => {
                if (rightAnswers === count) {
                    let candidate = new Candidate();
                    candidate.updateStatus("Accepted");
                } else {
                    let candidate = new Candidate();
                    candidate.updateStatus("Rejected");
                }
            };
        }
    };

    countdown(duration, count) {
        if (currentIndex < count) {
            let minutes, seconds;
            countdownInterval = setInterval(function () {
                minutes = parseInt(duration / 60);
                seconds = parseInt(duration % 60);

                minutes = minutes < 10 ? `0${minutes}` : minutes;
                seconds = seconds < 10 ? `0${seconds}` : seconds;

                countdownElement.innerHTML = `${minutes}:${seconds}`;

                if (--duration < 0) {
                    clearInterval(countdownInterval);
                    submitButton.click();
                }
            }, 5000);
        }
    }




    //     let quiz = document.querySelector(".quiz");
    //     if (data.length > 0) {
    //         console.log(data);
    //         for (let i = 0; i < data.length; i++) {
    //             quiz.innerHTML +=`
    // <h4 class="quiz-question">Q${data[i].id}: ${data[i].question}</h4>
    // <ul data-quiz-question="${data[i].id}">
    //   <li class="quiz-answer" data-quiz-answer="a">a. ${data[i].choices.choice1}</li>
    //   <li class="quiz-answer" data-quiz-answer="b">b. ${data[i].choices.choice2}</li>
    //   <li class="quiz-answer" data-quiz-answer="c">c. ${data[i].choices.choice3}</li>
    //   <li class="quiz-answer" data-quiz-answer="d">d. ${data[i].choices.choice4}</li>
    // </ul>`;

    //         }
    //     } 
}





