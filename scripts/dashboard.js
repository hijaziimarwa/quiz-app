document.addEventListener('DOMContentLoaded', function() {

    const isAdmin = localStorage.getItem('isAdmin');
  
   
    const loggedInUser = JSON.parse(localStorage.getItem('loggedInUser'));

    const users = JSON.parse(localStorage.getItem('users')) || [];
  
    const user = users.find(u => u.email === loggedInUser.email);
  
    if (user) {
      
      const emailElement = document.getElementById('email');
      const usernameElement = document.getElementById('name');
      const scoreElement = document.getElementById('quiz-score');
      const chosenQuizElement = document.getElementById('quiz-name');
  
      usernameElement.textContent = ` ${user.username}`;
      emailElement.textContent = ` ${user.email}`;
      scoreElement.textContent = `${user.score}`;
      chosenQuizElement.textContent = ` ${user.chosenQuiz}`;
    }
  });
  