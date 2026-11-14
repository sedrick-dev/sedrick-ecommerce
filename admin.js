document.getElementById("loginBtn").addEventListener("click", function () {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    if (email === "" || password === "") {
        alert("Enter email and password");
        return;
    }

    alert("Login ready: " + email);
});