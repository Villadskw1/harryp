const currentUser = localStorage.getItem("currentUser");
const users = JSON.parse(localStorage.getItem("users") || "{}");
const playerSpan = document.getElementById("playerName");
const houseSpan = document.getElementById("playerHouse");

if (!currentUser || !users[currentUser]) {
  alert("Du skal logge ind først!");
  window.location.href = "index.html";
}

const playerData = users[currentUser];
playerSpan.innerText = currentUser;
houseSpan.innerText = playerData.house || "Ikke valgt";

// Hvis huset ikke er valgt, vis valg-popup
if (!playerData.house) {
  document.getElementById("houseSelection").style.display = "block";
}

// Husvalg
function selectHouse(house) {
  users[currentUser].house = house;
  localStorage.setItem("users", JSON.stringify(users));
  houseSpan.innerText = house;
  document.getElementById("houseSelection").style.display = "none";
  alert(`Du er nu i ${house}!`);
}

// Gå til lokation
function goTo(location) {
  document.getElementById("locationMessage").innerText = `Du er nu i ${location}. En ny mission venter...`;
}
