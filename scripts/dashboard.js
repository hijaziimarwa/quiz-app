document.addEventListener('DOMContentLoaded', function() {
  const isAdmin = localStorage.getItem('isAdmin');
  

  const users = JSON.parse(localStorage.getItem('users')) || [];

  const dashboardTableBody = document.querySelector('table.score-table tbody');


  
  users.forEach((user) => {
    const row = document.createElement('tr');
    row.innerHTML = `
      <td>${user.username}</td>
      <td>${user.email}</td>
      <td>${user.chosenQuiz }</td>
      <td>${user.score}</td>
    `;
    dashboardTableBody.appendChild(row);
  });
});
