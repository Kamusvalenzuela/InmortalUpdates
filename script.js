// Definir un objeto que asocie las ligas con valores numéricos
const ligaValores = {
    "Hierro": 1,
    "Bronce": 2,
    "Plata": 3,
    "Oro": 4,
    "Platino": 5,
    "Esmeralda": 6,
    "Diamante": 7,
    "Maestro": 8,
    "Gran Maestro": 9,
    "Retador": 10
};

// Obtén la lista de jugadores desde players.json
fetch('players.json')
    .then(response => response.json())
    .then(data => {
        // Ordena los jugadores por liga
        data.players.sort((a, b) => ligaValores[a.liga] - ligaValores[b.liga]);
        
        // Accede al elemento donde mostrarás la lista
        const playerList = document.getElementById('player-list');
        
        // Agrega los jugadores ordenados a la lista
        data.players.forEach(player => {
            const listItem = document.createElement('li');
            listItem.textContent = player.name + ' - Liga: ' + player.liga;
            playerList.appendChild(listItem);
        });
    })
    .catch(error => console.error('Error: ' + error));
