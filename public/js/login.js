// login.js
// handles login form functionality

const loginFormHandler = async function (event) {
  event.preventDefault();
  const usernameElement = document.querySelector("#username-input-login");
  const passwordElement = document.querySelector("#password-input-login");
  const res = await fetch("/api/user/login", {
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
    alert("Login failed. Please try again.");
  }
};

document
  .querySelector("#login-form")
  .addEventListener("submit", loginFormHandler);
