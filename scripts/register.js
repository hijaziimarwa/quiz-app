document.querySelector('form').addEventListener('submit', function (e) {
  e.preventDefault();

  const username = document.querySelector('input[name="username"]').value;
  const email = document.querySelector('input[name="email"]').value;
  const password = document.querySelector('input[name="password"]').value;

  localStorage.setItem('userUsername', username);
  localStorage.setItem('userEmail', email);
  localStorage.setItem('userPassword', password);

  alert('Account created successfully!');

  window.location.href = '../index.html';
});
