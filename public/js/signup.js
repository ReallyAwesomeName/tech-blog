// signup.js
// handles sign up form functionality

const signupFormHandler = async function (event) {
  event.preventDefault();
  const usernameElement = document.querySelector("#username-input-signup");
  const passwordElement = document.querySelector("#password-input-signup");
  const passwordConfirmationElement = document.querySelector(
    "password-input-signup-confirmation"
  );
  // check that passwords match
  if (passwordElement.value !== passwordConfirmationElement.value) {
    alert("Passwords do not match. Please try again.");
    return;
  }

  const res = await fetch("/api/user", {
    method: "POST",
    body: JSON.stringify({
      username: usernameElement.value,
      password: passwordElement.value,
    }),
    headers: { "Content-Type": "application/json" },
  });

  if (res.ok) {
    document.location.replace("/profile");
  } else {
    alert("Sign up failed.");
  }
};

document
  .querySelector("#signup-form")
  .addEventListener("submit", signupFormHandler);
