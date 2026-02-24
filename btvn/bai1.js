const players = [
    "Messi - Forward",
    "Ronaldo - Forward",
    "Neymar - Forward",
    "De Bruyne - Midfielder",
    "Kante - Midfielder",
    "Van Dijk - Defender",
    "Alisson - Goalkeeper",
];

const displayPlayers = (listPlayers) => {
    listPlayers.forEach((player) => {
        console.log(`${player}`);
    });
}
displayPlayers(players);