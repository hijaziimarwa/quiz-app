const questions = [
    {
      question: "What is 2 + 2?",
      answers: [
        { text: "3", correct: false },
        { text: "4", correct: true },
        { text: "5", correct: false }
      ]
    },
    {
      question: "What is 5 x 3?",
      answers: [
        { text: "15", correct: true },
        { text: "8", correct: false },
        { text: "10", correct: false }
      ]
    },
    {
      question: "What is 10 - 4?",
      answers: [
        { text: "6", correct: true },
        { text: "7", correct: false },
        { text: "5", correct: false }
      ]
    },
    {
      question: "What is 12 / 4?",
      answers: [
        { text: "3", correct: true },
        { text: "4", correct: false },
        { text: "2", correct: false }
      ]
    },
    {
      question: "What is 7 + 6?",
      answers: [
        { text: "14", correct: false },
        { text: "13", correct: true },
        { text: "12", correct: false }
      ]
    }
  ];
  
  let currentQuestionIndex = 0;
  
  const questionText = document.getElementById("question-text");
  const answerButtons = document.getElementById("answer-buttons");
  
  function showQuestion() {
    resetState();
  
    const questionText = document.getElementById("question-text");
    const answerButtons = document.getElementById("answer-buttons");
  
    const currentQuestion = questions[currentQuestionIndex];
    questionText.textContent = currentQuestion.question;
  
    currentQuestion.answers.forEach(answer => {
      const button = document.createElement("button");
      button.textContent = answer.text;
      button.classList.add("option");
      button.dataset.correct = answer.correct;
      button.addEventListener("click", selectAnswer);
      answerButtons.appendChild(button);
    });
  }
  
  function resetState() {
    const answerButtons = document.getElementById("answer-buttons");
    answerButtons.innerHTML = "";
  }
  
  let score = 0;
  
  function selectAnswer(e) {
    const selectedButton = e.target;
    const isCorrect = selectedButton.dataset.correct === "true";
  
    if (isCorrect) {
      selectedButton.style.backgroundColor = "green";
      score++;
    } else {
      selectedButton.style.backgroundColor = "red";
    }
  
    const answerButtons = document.getElementById("answer-buttons");
    Array.from(answerButtons.children).forEach(button => {
      if (button.dataset.correct === "true") {
        button.style.backgroundColor = "green";
      }
      button.disabled = true;
    });
  
    document.getElementById("next-button").style.display = "block";
  }
  
  const nextButton = document.getElementById("next-button");
  
  nextButton.addEventListener("click", () => {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
      showQuestion();
      nextButton.style.display = "none";
    } else {
      showScore();
    }
  });
  
  function showScore() {
    const questionText = document.getElementById("question-text");
    const answerButtons = document.getElementById("answer-buttons");
    const nextButton = document.getElementById("next-button");
  
    questionText.textContent = `🎉 Quiz Finished! 🎉 You got ${score} out of ${questions.length}`;
    answerButtons.innerHTML = "";
    nextButton.style.display = "none";
  }
  
  showQuestion();
  