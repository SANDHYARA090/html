function login() {
  const role = document.getElementById("role").value;
  const user = document.getElementById("userid").value;
  const pass = document.getElementById("password").value;

  if (!role || !user || !pass) {
    alert("Please fill all fields");
    return;
  }

  if (role === "admin") {
    window.location.href = "admin.html";
  } else {
    alert(role + " dashboard will be added");
  }
}
