const questions = [
  {
    question: 'What is 2 + 2?',
    answers: [
      { text: '3', correct: false },
      { text: '4', correct: true },
      { text: '5', correct: false },
    ],
  },
  {
    question: 'What is 5 x 3?',
    answers: [
      { text: '15', correct: true },
      { text: '8', correct: false },
      { text: '10', correct: false },
    ],
  },
  {
    question: 'What is 10 - 4?',
    answers: [
      { text: '6', correct: true },
      { text: '7', correct: false },
      { text: '5', correct: false },
    ],
  },
  {
    question: 'What is 12 / 4?',
    answers: [
      { text: '3', correct: true },
      { text: '4', correct: false },
      { text: '2', correct: false },
    ],
  },
  {
    question: 'What is 7 + 6?',
    answers: [
      { text: '14', correct: false },
      { text: '13', correct: true },
      { text: '12', correct: false },
    ],
  },
];

let currentQuestionIndex = 0;

const questionText = document.getElementById('question-text');
const nextButton = document.getElementById('next-button');

const answerButtons = [
  document.getElementById('answer1'),
  document.getElementById('answer2'),
  document.getElementById('answer3'),
];

function showQuestion() {
  resetState();

  const currentQuestion = questions[currentQuestionIndex];
  questionText.textContent = currentQuestion.question;

  for (let i = 0; i < currentQuestion.answers.length; i++) {
    const answer = currentQuestion.answers[i];
    const button = answerButtons[i];

    button.textContent = answer.text;
    button.dataset.correct = answer.correct;
  }
 
  
}
answerButtons.forEach((button) => {
  button.addEventListener('click', selectAnswer);
});
function resetState() {
  answerButtons.forEach((btn) => {
    btn.disabled = false;
    btn.classList.remove('correct', 'incorrect');
  });
}

let score = 0;

function selectAnswer(e) {
  const selectedButton = e.target;
  const isCorrect = selectedButton.dataset.correct === 'true';

  if (isCorrect) {
    selectedButton.classList.add('correct');
    score++;
  } else {
    selectedButton.classList.add('incorrect');
  }

  answerButtons.forEach((button) => {
    button.disabled = true;
    if (button.dataset.correct === 'true') {
      button.classList.add('correct');
    }
  });
}

nextButton.addEventListener('click', () => {
  currentQuestionIndex++;
  if (currentQuestionIndex < questions.length) {
    showQuestion();
  } else {
    showScore();
  }
});

  
function showScore() {
    questionText.textContent = ` Quiz Finished ! `;
    answerButtons.forEach((btn) => {
      btn.classList.add('hide');
    });
  
    if (score >= questions.length / 2) {
      questionText.textContent += `Congratulations! You passed the quiz by score ${score} out of ${questions.length}.!`;
      nextButton.textContent = 'Logout';
      nextButton.onclick = () => {
        window.location.href = '../index.html';
        const loggedInUser = JSON.parse(localStorage.getItem('loggedInUser'));
        let users = JSON.parse(localStorage.getItem('users')) || [];
  
        users = users.map(u => {
          if (u.email === loggedInUser.email) {
            return { ...u, score: score, chosenQuiz: 'Math' };  
          }
          return u;
        });
  
       
        localStorage.setItem('users', JSON.stringify(users));
        
      };
    } else {
      questionText.textContent += 'Better luck next time.. Press below if you want to restart the quiz!';
      nextButton.textContent = 'Logout';
      nextButton.onclick = () => {
        window.location.href = '../index.html';
        const loggedInUser = JSON.parse(localStorage.getItem('loggedInUser'));
        let users = JSON.parse(localStorage.getItem('users')) || [];
  
        users = users.map(u => {
          if (u.email === loggedInUser.email) {
            return { ...u, score: score, chosenQuiz: 'Math' };  
          }
          return u;
        });
  
       
        localStorage.setItem('users', JSON.stringify(users));
        
      };
    }
  }
  
showQuestion();
