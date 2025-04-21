document.querySelector('form').addEventListener('submit', function (e) {
  e.preventDefault();

  const email = document.querySelector('input[name="email"]').value;
  const password = document.querySelector('input[name="password"]').value;

  const storedEmail = localStorage.getItem('userEmail');
  const storedPassword = localStorage.getItem('userPassword');

  if (email === 'admin@quiz.com' && password === 'admin123') {
    window.location.href = '../pages/dashboard.html';
  } else if (email === storedEmail && password === storedPassword) {
    window.location.href = '../pages/home.html';
  } else {
    alert('Email and password not found. Please try again !');
  }
});
