// public/js/logout.js
// handles logout functionality

const logout = async () => {
  const response = await fetch("/api/user/logout", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
  });
  if (response.ok) {
    document.location.replace("/login");
  } else {
    alert(response.statusText);
  }
};

// event handler
document.querySelector("#logout-link").addEventListener("click", logout);
