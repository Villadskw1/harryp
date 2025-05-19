function getUsers() {
  return JSON.parse(localStorage.getItem('users') || '{}');
}

function saveUser(username, password) {
  const users = getUsers();
  if (users[username]) {
    return false;
  }
  users[username] = { password, progress: {} };
  localStorage.setItem('users', JSON.stringify(users));
  return true;
}

function login() {
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;
  const users = getUsers();

  if (users[username] && users[username].password === password) {
    localStorage.setItem('currentUser', username);
    window.location.href = "game.html";
  } else {
    document.getElementById("message").innerText = "Login fejlede!";
  }
}

function register() {
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  if (saveUser(username, password)) {
    document.getElementById("message").innerText = "Bruger oprettet. Du kan nu logge ind.";
  } else {
    document.getElementById("message").innerText = "Brugernavn findes allerede!";
  }
}
