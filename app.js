document.getElementById("registrationForm");
document.addEventListener("submit", function (event) {
  event.preventDefault();
  let isValid = true;

  // errors
  document.querySelectorAll(".error").forEach((e) => (e.textContent = ""));

  //  no spacesing
  const username = document.getElementById("username").value;
  if (username.includes(" ")) {
    document.getElementById("usernameError").textContent =
      "Username must not contain spaces.";
    isValid = false;
  }

  //  password
  const password = document.getElementById("password").value;
  const passwordPattern = /^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*]).{8,}$/;
  if (!passwordPattern.test(password)) {
    document.getElementById("passwordError").textContent =
      "Password must be at least 8 characters long, include one uppercase letter, one number, and one special character.";
    isValid = false;
  }

  //  birthday 
  const birthday = document.getElementById("birthday").value;
  if (!/^\d{4}-\d{2}-\d{2}$/.test(birthday)) {
    document.getElementById("birthdayError").textContent =
      "Birthday must be in the format YYYY-MM-DD.";
    isValid = false;
  }

  // email 
  const email = document.getElementById("email").value;
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(email)) {
    document.getElementById("emailError").textContent =
      "Please enter a valid email address.";
    isValid = false;
  }

  // phone
  const phone = document.getElementById("phone").value;
  const phonePattern = /^07\d{8}$/;
  if (!phonePattern.test(phone)) {
    document.getElementById("phoneError").textContent =
      "Phone number must be 10 digits long and start with 07.";
    isValid = false;
  }

  // check if user already exists
  const existingUsers = ["user1", "user2", "user3"];
  if (existingUsers.includes(username)) {
    alert("User already exists. Please choose a different username.");
    isValid = false;
  }

  if (isValid) {
    alert("Registration successful!");
    
  }
});
