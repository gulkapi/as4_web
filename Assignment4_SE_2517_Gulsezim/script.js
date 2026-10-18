(() => {
  const basicContactForm = document.getElementById("basicContactForm");
  const basicContactStatus = document.getElementById("basicContactStatus");

  basicContactForm.addEventListener("submit", (event) => {
    event.preventDefault();
    if (!basicContactForm.checkValidity()) {
      basicContactForm.reportValidity();
      return;
    }
    basicContactStatus.textContent = "Your message passed HTML5 validation. This demo does not send data to a server.";
    basicContactForm.reset();
  });

  const bootstrapContactForm = document.getElementById("bootstrapContactForm");
  const bootstrapContactStatus = document.getElementById("bootstrapContactStatus");

  bootstrapContactForm.addEventListener("submit", (event) => {
    event.preventDefault();
    bootstrapContactForm.classList.add("was-validated");
    if (!bootstrapContactForm.checkValidity()) {
      bootstrapContactStatus.textContent = "";
      return;
    }
    bootstrapContactStatus.textContent = "The contact form is valid. This demo does not send data to a server.";
    bootstrapContactForm.reset();
    bootstrapContactForm.classList.remove("was-validated");
  });

  const registrationForm = document.getElementById("registrationForm");
  const password = document.getElementById("password");
  const confirmPassword = document.getElementById("confirmPassword");
  const confirmPasswordFeedback = document.getElementById("confirmPasswordFeedback");
  const genderFeedback = document.getElementById("genderFeedback");
  const hobbiesFeedback = document.getElementById("hobbiesFeedback");
  const registrationSuccess = document.getElementById("registrationSuccess");
  const genderOptions = [...registrationForm.querySelectorAll('input[name="gender"]')];
  const hobbyOptions = [...registrationForm.querySelectorAll(".hobby-option")];

  function validatePasswordMatch() {
    if (confirmPassword.value !== password.value) {
      confirmPassword.setCustomValidity("Passwords do not match");
      confirmPasswordFeedback.textContent = "Passwords must match.";
    } else {
      confirmPassword.setCustomValidity("");
      confirmPasswordFeedback.textContent = "Please confirm your password.";
    }
  }

  password.addEventListener("input", validatePasswordMatch);
  confirmPassword.addEventListener("input", validatePasswordMatch);

  registrationForm.addEventListener("submit", (event) => {
    event.preventDefault();
    validatePasswordMatch();

    const genderSelected = genderOptions.some((option) => option.checked);
    const hobbySelected = hobbyOptions.some((option) => option.checked);

    genderFeedback.hidden = genderSelected;
    hobbiesFeedback.hidden = hobbySelected;
    registrationForm.classList.add("was-validated");

    if (!registrationForm.checkValidity() || !genderSelected || !hobbySelected) {
      registrationSuccess.classList.add("d-none");
      registrationForm.reportValidity();
      return;
    }

    const firstName = document.getElementById("firstName").value.trim();
    const lastName = document.getElementById("lastName").value.trim();
    registrationSuccess.textContent = `Success, ${firstName} ${lastName}! The form is valid. This demo does not create an actual account or send data to a server.`;
    registrationSuccess.classList.remove("d-none");
  });

  registrationForm.addEventListener("reset", () => {
    window.setTimeout(() => {
      registrationForm.classList.remove("was-validated");
      registrationSuccess.classList.add("d-none");
      genderFeedback.hidden = true;
      hobbiesFeedback.hidden = true;
      confirmPassword.setCustomValidity("");
    }, 0);
  });
})();
