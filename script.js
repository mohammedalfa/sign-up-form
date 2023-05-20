const password = document.getElementById("password");
const confirmPassword = document.getElementById("confirm-password");
const confirmation = document.querySelector(".confirmation");

const checkPasswords = function () {
  if (password.value !== confirmPassword.value) {
    password.setCustomValidity("Passwords do not match");
    confirmPassword.setCustomValidity("Passwords do not match");
    confirmation.style.display = "block";
  } else {
    password.setCustomValidity("");
    confirmPassword.setCustomValidity("");
    confirmation.style.display = "none";
  }
};

password.addEventListener("input", checkPasswords);
confirmPassword.addEventListener("input", checkPasswords);
