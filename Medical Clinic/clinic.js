const validation = function validation() {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    const emailError = document.getElementById("emailError");
    const passwordError = document.getElementById("passwordError");
    const successMessage = document.getElementById("successMessage");

    // Clear old messages
    emailError.textContent = "";
    passwordError.textContent = "";
    successMessage.textContent = "";

    let isValid = true;

    // Email validation
    if (email === "") {
        emailError.textContent = "Please enter your email.";
        isValid = false;
    } 
    else if (!email.includes("@")) {
        emailError.textContent = "Email is not valid. Please try again.";
        isValid = false;
    }

    // Password validation
    if (password === "") {
        passwordError.textContent = "Please enter your password.";
        isValid = false;
    } 
    else if (password.length < 6) {
        passwordError.textContent = "Password must be at least 6 characters.";
        isValid = false;
    }

    // Final result
    if (isValid) {
        successMessage.textContent = "Sign in successful!";
    }
}


const signIn = document.querySelector(".btn1");

signIn.addEventListener("click", function () {
    validation();
});
const signInBtn = document.getElementById("signInBtn");

signInBtn.addEventListener("click", function () {
    window.location.href = "../MyPatientHUB/dashboard.html";
});