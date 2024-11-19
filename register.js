function toggleForm(type) {
    const loginFields = document.getElementById("login-fields");
    const signupFields = document.getElementById("signup-fields");
    const loginBtn = document.getElementById("login-btn");
    const signupBtn = document.getElementById("signup-btn");
    const forgotPassword = document.getElementById("forgot-password");

    if (type === 'signupBtn') {
        loginFields.style.display = "none";
        signupFields.style.display = "block";
        forgotPassword.style.display = "none";
        loginBtn.textContent = "Back to Login";
        signupBtn.style.display = "none";
    } else {
        loginFields.style.display = "block";
        signupFields.style.display = "none";
        forgotPassword.style.display = "block";
        loginBtn.textContent = "Login";
        signupBtn.style.display = "inline-block";
    }
}