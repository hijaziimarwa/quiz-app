document.querySelector("form").addEventListener("submit", function (e) {
    e.preventDefault();
    const email = document.querySelector('input[name="email"]').value;
    const password = document.querySelector('input[name="password"]').value;
  
    if (email === "test@example.com" && password === "123456") {
      window.location.href = "./pages/home.html";
    } else {
      alert("Your email or pass are not correct. try againا");
    }
  });
  