document.querySelector('form').addEventListener('submit', function (e) {
  e.preventDefault();

  const email = document.querySelector('input[name="email"]').value;
  const password = document.querySelector('input[name="password"]').value;

  const users = JSON.parse(localStorage.getItem('users')) || [];

  const user = users.find((u) => u.email === email && u.password === password);

  if (email === 'admin@quiz.com' && password === 'admin123') {
    window.location.href = '/quiz-app/scripts/dashboard.html';
  } else if (user) {
    localStorage.setItem('loggedInUser', JSON.stringify(user));
    window.location.href = '/quiz-app/scripts/home.html';
  } else {
    alert('Email and password not found. Please try again!');
  }
});
