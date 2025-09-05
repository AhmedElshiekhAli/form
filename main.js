function validateForm() {
  let x = document.getElementById("Name").value;
  let y = document.getElementById("password").value;
  let text;

  if (x === "admin" && y === "3122006") {
    text = "✅ Correct, redirecting...";
    document.getElementById("demo").style.color = "lightgreen";
    document.getElementById("demo").innerHTML = text;

    // تخزين حالة تسجيل الدخول
    localStorage.setItem("loggedIn", "true");

    setTimeout(function() {
      window.location.href = "dachpord.html";
    }, 1500);
    return false;
  }
  else if (x === "" || y === "") {
    text = "⚠️ The form is Empty!!!";
    document.getElementById("demo").style.color = "orange";
    document.getElementById("demo").innerHTML = text;
    return false;
  }
  else {
    text = "❌ Username or Password Not Correct!!!";
    document.getElementById("demo").style.color = "red";
    document.getElementById("demo").innerHTML = text;
    return false;
  }
}


function logout_page() {
    localStorage.removeItem("loggedIn");
    window.location.href="loginpage.html"
}