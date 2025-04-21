document.querySelector('form').addEventListener('submit', function (e) {
  e.preventDefault();

  const username = document.querySelector('input[name="username"]').value;
  const email = document.querySelector('input[name="email"]').value;
  const password = document.querySelector('input[name="password"]').value;

  // نسترجع المصفوفة القديمة من localStorage (أو نبدأ بمصفوفة فاضية)
  let users = JSON.parse(localStorage.getItem('users')) || [];

  // نضيف المستخدم الجديد
  users.push({ username, email, password, score: 0 });

  // نخزّن المصفوفة المحدّثة من جديد
  localStorage.setItem('users', JSON.stringify(users));

  alert('Account created successfully!');

  window.location.href = '../index.html';
});
