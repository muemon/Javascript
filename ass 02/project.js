document.addEventListener("DOMContentLoaded", function () {
    const API_URL = "https://www.thesportsdb.com/api/v1/json/3/";
    const playerList = document.getElementById("player-list");
    const searchBar = document.getElementById("search-bar");
    const cart = document.getElementById("selected-players");
    const playerCount = document.getElementById("player-count");

    let selectedPlayers = [];
    let allPlayers = [];
    
    const popularPlayers = ["Messi", "Ronaldo", "Neymar", "Mbappe", "Hazard", "Suarez", "Lewandowski", "Modric", "Benzema", "Salah"];

    //for initial page 
    function fetchInitialPlayers() {
        const randomName = popularPlayers[Math.floor(Math.random() * popularPlayers.length)];
        fetchPlayers(randomName);
    }

    function fetchPlayers(query) {
        fetch(API_URL + `searchplayers.php?p=${query}`)
            .then(response => response.json())
            .then(data => {
                console.log("Fetched Data:", data);
                if (data.player) {
                    allPlayers = data.player.slice(0, 12); // Ensure max 12 players
                    displayPlayers(allPlayers);
                } else {
                    playerList.innerHTML = "<p>No players found. Try searching for another name.</p>";
                }
            })
            .catch(error => {
                console.error("Error fetching data:", error);
                playerList.innerHTML = "<p>Could not fetch player data. Please try again.</p>";
            });
    }

    function displayPlayers(players) {
        playerList.innerHTML = "";
        players.forEach(player => {
            const playerCard = document.createElement("div");
            playerCard.classList.add("player-card");
            playerCard.innerHTML = `
                <img src="${player.strThumb || 'https://via.placeholder.com/100'}" alt="Player Image" class="player-img">
                <h3>${player.strPlayer}</h3>
                <p>Phone: ${player.strNumber || 'N/A'}</p>
                <p>Email: ${player.strEmail || 'N/A'}</p>
                <p>City: ${player.strBirthLocation || 'N/A'}</p>
                <p>Country: ${player.strNationality || 'N/A'}</p>
                <p>Gender: ${player.strGender || 'N/A'}</p>
                <button class="add-to-team" data-id="${player.idPlayer}">Add to Team</button>
                <button class="details" data-id="${player.idPlayer}">Details</button>
                <div class="social-media">
                    <a href="#" class="social-icon"><img src="https://upload.wikimedia.org/wikipedia/commons/6/60/Twitter_Logo_2021.svg" alt="Twitter"></a>
                    <a href="#" class="social-icon"><img src="https://upload.wikimedia.org/wikipedia/commons/9/91/Instagram_logo_2022.svg" alt="Instagram"></a>
                </div>
            `;
            playerList.appendChild(playerCard);
        });

        document.querySelectorAll(".add-to-team").forEach(button => {
            button.addEventListener("click", function () {
                addToTeam(this.dataset.id);
            });
        });

        document.querySelectorAll(".details").forEach(button => {
            button.addEventListener("click", function () {
                showDetails(this.dataset.id);
            });
        });
    }

    function addToTeam(playerId) {
        if (selectedPlayers.length >= 11) {
            alert("Your team is already full.");
            return;
        }

        const player = allPlayers.find(p => p.idPlayer == playerId);
        if (!selectedPlayers.includes(player)) {
            selectedPlayers.push(player);
            updateCart();
            document.querySelector(`button[data-id="${playerId}"]`).innerText = "Already Added";
        }
    }

    function updateCart() {
        cart.innerHTML = "";
        selectedPlayers.forEach(player => {
            const li = document.createElement("li");
            li.textContent = player.strPlayer;
            cart.appendChild(li);
        });
        playerCount.textContent = selectedPlayers.length;
    }

    function showDetails(playerId) {
        fetch(API_URL + `lookupplayer.php?id=${playerId}`)
            .then(response => response.json())
            .then(data => {
                if (data.players) {
                    const player = data.players[0];
                    alert(`
                        Name: ${player.strPlayer}
                        Birthdate: ${player.dateBorn}
                        Nationality: ${player.strNationality}
                        Team: ${player.strTeam || 'N/A'}
                        Position: ${player.strPosition || 'N/A'}
                        Height: ${player.strHeight || 'N/A'}
                        Weight: ${player.strWeight || 'N/A'}
                    `);
                } else {
                    alert("No details found.");
                }
            })
            .catch(error => console.error("Error fetching details:", error));
    }

    searchBar.addEventListener("input", function () {
        const query = searchBar.value.trim();
        if (query.length > 2) {
            fetchPlayers(query);
        }
    });

    fetchInitialPlayers();
});
