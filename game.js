<!DOCTYPE html>
<html lang="da">
<head>
  <meta charset="UTF-8" />
  <title>Hogwarts Eleven</title>
  <link rel="stylesheet" href="styles/style.css" />
</head>
<body class="game-page">
  <div id="hud">
    <h1>✨ Velkommen, <span id="playerName"></span></h1>
    <p>Hus: <span id="playerHouse">Ikke valgt</span></p>
    <div id="houseSelection" class="popup">
      <h2>Vælg dit hus</h2>
      <div class="house-buttons">
        <button onclick="selectHouse('Gryffindor')">🦁 Gryffindor</button>
        <button onclick="selectHouse('Slytherin')">🐍 Slytherin</button>
        <button onclick="selectHouse('Hufflepuff')">🦡 Hufflepuff</button>
        <button onclick="selectHouse('Ravenclaw')">🦅 Ravenclaw</button>
      </div>
    </div>
  </div>

  <div id="map">
    <h2>🏰 Hogwarts Kort</h2>
    <div class="locations">
      <button onclick="goTo('Forbudt Skov')">🌲 Forbudt Skov</button>
      <button onclick="goTo('Storsalen')">🏰 Storsalen</button>
      <button onclick="goTo('Eliksirklassen')">⚗️ Eliksir</button>
      <button onclick="goTo('Duelsalen')">🗡️ Duelsal</button>
    </div>
    <p id="locationMessage"></p>
  </div>

  <script src="scripts/game.js"></script>
</body>
</html>
