document.querySelector('form').addEventListener('submit', function (e) {
  e.preventDefault();

  const username = document.querySelector('input[name="username"]').value;
  const email = document.querySelector('input[name="email"]').value;
  const password = document.querySelector('input[name="password"]').value;

  let users = JSON.parse(localStorage.getItem('users')) || [];

  users.push({ username, email, password, score: 0 });

  localStorage.setItem('users', JSON.stringify(users));

  alert('Account created successfully!');

  window.location.href = '../index.html';
});
