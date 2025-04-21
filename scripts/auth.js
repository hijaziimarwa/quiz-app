
  document.querySelector("form").addEventListener("submit", function (e) {
    e.preventDefault();
  
    const email = document.querySelector('input[name="email"]').value;
    const password = document.querySelector('input[name="password"]').value;
  
    // بيانات المستخدم المسجلة سابقًا
    const storedEmail = localStorage.getItem("userEmail");
    const storedPassword = localStorage.getItem("userPassword");
  
    // تحقق من admin
    if (email === "admin@quiz.com" && password === "admin123") {
      window.location.href = "../pages/dashboard.html";
    }
    // تحقق من مستخدم عادي
    else if (email === storedEmail && password === storedPassword) {
      window.location.href = "../pages/home.html";
    }
    // بيانات غير صحيحة
    else {
      alert("Email أو Password غير صحيح، حاول مجددًا.");
    }
  });
  