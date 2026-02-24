const playerNames = [
    "Messi",
    "Ronaldo",
    "Neymar",
    "De Bruyne",
    "Kante",
    "Van Dijk",
    "Alisson",
];

const getUpperNames = (names) => {
    return names.map((name) => name.toUpperCase());
};
upperPlayer = getUpperNames(playerNames);
console.log(upperPlayer);