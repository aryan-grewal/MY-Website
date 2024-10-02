window.onload = function(){        // just to check if js is working.
  console.log("hello from JavaScript!");
}

function validateForm() {    // the main function which produces alert messgaes and shows the confirmation popup.
  if (!checkEmails()) {
    alert("Emails do not match. Please confirm your email.");
    return false;
  }

  if (!checkDate()) {
    alert("Please select a project date that is at least 1 day in the future.");
    return false;
  }

  if (!checkDuration()) {
    alert("Project Duration must be a positive integer.");
    return false; 
  }
  
    showConfirmationPopup();
    return false;
  
}

function checkEmails() {           // checks if email and confirm email are equal.
  let email = document.getElementById('Email').value;
  let confirmEmail = document.getElementById('confirmEmail').value;
  return email === confirmEmail;
}

function checkDate() {        // checks if project date is at least 1 day in the future.
  let projectDate = new Date(document.getElementById('projectDate').value);
  let currentDate = new Date();
  currentDate.setHours(0, 0, 0, 0);  // Set time to midnight
  currentDate.setDate(currentDate.getDate() + 1); // Adding 1 day

  return projectDate >= currentDate;
}

function checkDuration() {           // checks if project duration is a postive integer.
  let projectDuration= document.getElementById('projectDuration').value;
  return projectDuration > 0;
}

function showConfirmationPopup() {              // produces the confirmation popup
  let firstName = document.getElementById('firstName').value;
  let Email = document.getElementById('Email').value;
  let phoneNumber = document.getElementById('phoneNumber').value;
  let contactPreference = document.getElementById('contactPreference').value;
  let projectDate = document.getElementById('projectDate').value;
  let projectDuration = document.getElementById('projectDuration').value;
  let description = document.getElementById('description').value;

  let confirmationMessage = `Please confirm the following details:\n\n`;
  confirmationMessage += `Name: ${firstName}\n`;
  confirmationMessage += `Email: ${Email}\n`;
  confirmationMessage += `Phone Number: ${phoneNumber}\n`;
  confirmationMessage += `Preferred Contact Method: ${contactPreference}\n`;
  confirmationMessage += `Project Date: ${projectDate}\n`;
  confirmationMessage += `Project Duration (in days): ${projectDuration}\n`;
  confirmationMessage += `Project Description:\n${description}\n\n`;
  confirmationMessage += `To: aryanzgrewal@gmail.com\n`;

  if (window.confirm(confirmationMessage)) {
      alert("Thank you for your submission.");
      document.getElementById('contactForm').reset();
      window.scrollTo(0, 0);  // Scroll to the top after form reset
  }
}
