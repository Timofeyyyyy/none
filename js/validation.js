function validateForm() {
  var firstNameInput = document.getElementById("first_name");
  var lastNameInput = document.getElementById("last_name");
  var emailInput = document.getElementById("email");
  var phoneInput = document.getElementById("phone");

  var firstName = firstNameInput.value;
  var lastName = lastNameInput.value;
  var email = emailInput.value;
  var phone = phoneInput.value;

  var isValid = true;

  // First Name validation
  if (firstName === "") {
    firstNameInput.style.borderColor = "red";
    isValid = false;
  } else {
    firstNameInput.style.borderColor = "green";
  }

  // Last Name validation
  if (lastName === "") {
    lastNameInput.style.borderColor = "red";
    isValid = false;
  } else {
    lastNameInput.style.borderColor = "green";
  }

  // Email validation
  if (email === "" || !email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
    emailInput.style.borderColor = "red";
    isValid = false;
  } else {
    emailInput.style.borderColor = "green";
  }

  // Phone number validation: allow only digits
  phoneInput.value = phone.replace(/\D/g, ""); // Remove non-digit characters from input value

  // Phone validation
  if (phone === "" || !phone.match(/^\d+$/)) {
    phoneInput.style.borderColor = "red";
    isValid = false;
  } else {
    phoneInput.style.borderColor = "green";
  }

  if (!isValid) {
    alert("Please fill in all fields correctly.");
    return false;
  }

  var ukrainePrefixes = [
    "066",
    "067",
    "068",
    "096",
    "097",
    "098",
    "050",
    "066",
    "095",
    "099",
  ];
  var phoneNumberPrefix = phoneInput.value.substring(0, 3);
  if (ukrainePrefixes.includes(phoneNumberPrefix)) {
    phoneInput.style.borderColor = "red";
    alert("The program does not accept citizens of Ukraine.");
    return false;
  }

  return true;
}

// Add event listeners for real-time input validation
var firstNameInput = document.getElementById("first_name");
firstNameInput.addEventListener("input", function () {
  if (firstNameInput.value === "") {
    firstNameInput.style.borderColor = "red";
  } else {
    firstNameInput.style.borderColor = "green";
  }
});

var lastNameInput = document.getElementById("last_name");
lastNameInput.addEventListener("input", function () {
  if (lastNameInput.value === "") {
    lastNameInput.style.borderColor = "red";
  } else {
    lastNameInput.style.borderColor = "green";
  }
});

var emailInput = document.getElementById("email");
emailInput.addEventListener("input", function () {
  if (
    emailInput.value === "" ||
    !emailInput.value.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)
  ) {
    emailInput.style.borderColor = "red";
  } else {
    emailInput.style.borderColor = "green";
  }
});

var phoneInput = document.getElementById("phone");
phoneInput.addEventListener("input", function () {
  phoneInput.value = phoneInput.value.replace(/\D/g, ""); // Remove non-digit characters from input value

  if (phoneInput.value === "" || !phoneInput.value.match(/^\d+$/)) {
    phoneInput.style.borderColor = "red";
  } else {
    phoneInput.style.borderColor = "green";
  }
});
