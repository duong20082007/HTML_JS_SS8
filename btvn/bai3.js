const players = [
    "Messi - Forward", 
    "Ronaldo - Forward", 
    "Neymar - Forward", 
    "De Bruyne - Midfielder", 
    "Kante - Midfielder", 
    "Van Dijk - Defender",
    "Alisson - Goalkeeper",
];

const filterPlayersByPosition = (position, listPlayers) => {
    return listPlayers.filter((player) => player.includes(position));
};

const midfielder = filterPlayersByPosition("Midfielder", players);
console.log(midfielder);

const forward = filterPlayersByPosition("Forward", players);
console.log(forward);

