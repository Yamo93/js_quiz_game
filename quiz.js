// Improvements to Apply
/*
- Add a "Submit Answer" for the last question: because you have to press the last answer twice to get the result: 
- Maybe show the total result in the end, rather than showing it during the quiz
- Add prev and next quiz-buttons
*/

/*
New Bugs:
- One last bug: After playing a set of game, and restarting it: the question stands at 1/10. After answering
the first question, it still stays at 1/10 for the first time, and then it goes up to 9/10. And after submitting
the last question, it displays 10/10 and shows that the game is complete.

*/

let currentUserScore = 0;
let currentQuiz = 0;

let Question = function(question, correctAnswerID, firstAnswer, secondAnswer, thirdAnswer, fourthAnswer) {
    this.question = question;
    this.correctAnswerID = correctAnswerID;
    this.firstAnswer = firstAnswer;
    this.secondAnswer = secondAnswer;
    this.thirdAnswer = thirdAnswer;
    this.fourthAnswer = fourthAnswer;
}

let firstQuestion = new Question('Which sea creature has three hearts?', 'answer_1', 'The Octopus', 'The Whale', 'The Shark', 'The Hippo');
let secondQuestion = new Question('How many bones does an adult human have?', 'answer_2', '302', '206', '310', '500');
let thirdQuestion = new Question('Which country does the sport of pelato come from?', 'answer_3', 'Italy', 'Portugal', 'Spain', 'Brazil');
let fourthQuestion = new Question('Which ocean surrounds the Maldives?', 'answer_1', 'Indian Ocean', 'Red Ocean', 'The Atlantic Ocean', 'The Middle Ocean');
let fifthQuestion = new Question('What is the name of Europe\'s most northern town?', 'answer_1', 'Hammerfest, Norway', 'Kiruna, Sweden', 'Oslo, Norway', 'Helsinki, Finland');
let sixthQuestion = new Question('Name the Chinese writer, born in 551 BCE, known for preaching high moral standards.', 'answer_3', 'Bruce Lee', 'Lang Nu', 'Confucius', 'Wei Lu');
let seventhQuestion = new Question('I am Liverpudlian but not Liverpool. What am I?', 'answer_4', 'Newcastle United', 'Chelsea', 'Arsenal FC', 'Everton Football Club');
let eighthQuestion = new Question("I have a cake and a table named after me, and I'm used all around the world. What am I?", 'answer_1', 'Coffee', 'Tea', 'Chocolate', 'Pizza');
let ninthQuestion = new Question('Info.cern.ch is famous for being what?', 'answer_1', "The world's very first website", 'The greatest e-commerce website in the world', 'An enterprise company for shoes', 'An information agency');
let tenthQuestion = new Question('Name the artist who was born in Milan in 1571 and was described during his lifetime as the most famous painter in Rome, despite having had a death warrant issued against him by the pope.', 'answer_4', "Picasso", 'Alessandro Del Piero', 'Roberto Baggio', 'Michelangelo');

let questions = [firstQuestion, secondQuestion, thirdQuestion, fourthQuestion, fifthQuestion, sixthQuestion, seventhQuestion, eighthQuestion, ninthQuestion, tenthQuestion];

let DOMstrings = {
    title: document.querySelector('.title'),
    userScore: document.querySelector('.user_score'),
    currentQuestionNr: document.querySelector('.question_number'),
    currentQuestion: document.querySelector('.question'),
    answersNodeList: document.querySelectorAll('.answer'),
    firstAnswer: document.getElementById('answer_1'),
    secondAnswer: document.getElementById('answer_2'),
    thirdAnswer: document.getElementById('answer_3'),
    fourthAnswer: document.getElementById('answer_4'),
    restartBtn: document.querySelector('.restart_btn')
};

var nodeListForEach = function(list, callback) {
    for (var i = 0; i < list.length; i++) {
        callback(list[i], i);
    }
};

function startGame() {


nodeListForEach(DOMstrings.answersNodeList, function(current, index) {
            resetScore();
            DOMstrings.currentQuestionNr.textContent = `Current Question: ${currentQuiz+1}/10`;
            current.addEventListener('click', function() {
                console.log(currentQuiz);
                console.log('The current index is' + index);
                console.log('The current score is' + currentUserScore);
                console.log('The current quiz is' + currentQuiz);

                if (currentQuiz === 0) {
                    newQuestion();
                    if (current.id === questions[currentQuiz].correctAnswerID) {
                        DOMstrings.currentQuestionNr.textContent = `Current Question: ${currentQuiz+1}/10`;
                    }
                }
    
    
                if (currentQuiz < 9) {
    
                if (current.id === questions[currentQuiz].correctAnswerID) {
                    correctAnswer();
                    newQuestion();
                    console.log('in the if-statement' + currentQuiz);
                    DOMstrings.currentQuestionNr.textContent = `Current Question: ${currentQuiz+1}/10`;
                } else if (current.id !== questions[currentQuiz].correctAnswerID) {
                    incorrectAnswer();
                    newQuestion();
                    console.log('The current question is: ' + currentQuiz);
                    DOMstrings.currentQuestionNr.textContent = `Current Question: ${currentQuiz+1}/10`;
                }
            };
    
                // The Ultimate Question:
                if (currentQuiz === 9) {
                    console.log('This is the last question');
                    //DOMstrings.restartBtn.style.left = '10%';
                    nodeListForEach(DOMstrings.answersNodeList, function(current, index) {
                        current.addEventListener('click', function() {
                            if (current.id === questions[9].correctAnswerID && currentQuiz === 9) {
                                console.log('You pressed the right answer');
                                console.log('Current quiz is: ' + currentQuiz);
                                console.log('Current score is: ' + currentUserScore);
                                //currentUserScore++;
                                currentQuiz++;
                                currentUserScore++;
                                DOMstrings.currentQuestion.textContent = 'Quiz Completed!';
    
                                    if (!DOMstrings.title.classList.contains('correct')) {
                                        DOMstrings.title.classList.add('correct');
                                        DOMstrings.title.classList.remove('incorrect');
                                    };
                                    //let correctColorOn = false;
                                    if (DOMstrings.title.classList.contains('correct')) {
                                        correctColorOn = true;
                                    };
    
                                    if (!DOMstrings.title.classList.contains('correct')) {
                                        DOMstrings.title.classList.add('correct');
                                    };
    
                                    DOMstrings.title.classList.remove('incorrect');
                                    //currentUserScore++;
                                    // end of correct func
                                    //resetScore();
    
                                DOMstrings.userScore.textContent = `Your Score is: ${currentUserScore}`;
                                DOMstrings.currentQuestionNr.textContent = `Current Question: ${currentQuiz}/10`;
                                //resetScore();
                            } else {
                                //DOMstrings.currentQuestion.textContent = 'Quiz Completed!';
                                //resetScore();
                                //DOMstrings.title.textContent = 'Good job!';
                                if (!DOMstrings.title.classList.contains('correct')) {
                                    DOMstrings.title.classList.add('correct');
                                    DOMstrings.title.classList.remove('incorrect');
                                };
    
                                DOMstrings.userScore.textContent = `Your Score is: ${currentUserScore}`;
                                DOMstrings.currentQuestionNr.textContent = `Current Question: ${currentQuiz}/10`;
                                //resetScore();
                            }
                        })
                    });
                };
            });
            
        });
    }
    
startGame();


function correctAnswer() {

    let correctColorOn = false;
    DOMstrings.title.textContent = 'The answer is correct!';
    if (DOMstrings.title.classList.contains('correct')) {
        correctColorOn = true;
    };

    if (!DOMstrings.title.classList.contains('correct')) {
        DOMstrings.title.classList.add('correct');
    };

    DOMstrings.title.classList.remove('incorrect');
    currentUserScore++;
    currentQuiz++;
};

function incorrectAnswer() {

    let incorrectColorOn = false;
    DOMstrings.title.textContent = 'The answer is NOT correct!';
    if (DOMstrings.title.classList.contains('incorrect')) {
        incorrectColorOn = true;
    };

    if (!DOMstrings.title.classList.contains('incorrect')) {
        DOMstrings.title.classList.add('incorrect');
    };

    DOMstrings.title.classList.remove('correct');
    currentQuiz++;
}


function newQuestion() {
    DOMstrings.userScore.textContent = `Your Score is: ${currentUserScore}`;
    DOMstrings.currentQuestionNr.textContent = `Current Question: ${currentQuiz+1}/10`;
    DOMstrings.currentQuestion.textContent = questions[currentQuiz].question;
    DOMstrings.firstAnswer.textContent = questions[currentQuiz].firstAnswer;
    DOMstrings.secondAnswer.textContent = questions[currentQuiz].secondAnswer;
    DOMstrings.thirdAnswer.textContent = questions[currentQuiz].thirdAnswer;
    DOMstrings.fourthAnswer.textContent = questions[currentQuiz].fourthAnswer;
}

function resetScore() {
    currentQuiz = 0;
    currentUserScore = 0;
}


DOMstrings.restartBtn.addEventListener('click', function() {
    resetScore();
    newQuestion()
    DOMstrings.title.textContent = 'Game Restarted!';
    DOMstrings.title.classList.add('correct');
    DOMstrings.title.classList.remove('incorrect');
})