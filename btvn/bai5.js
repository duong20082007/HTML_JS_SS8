const players = [
    "Messi - Forward - 25 - 15",
    "Ronaldo - Forward - 30 - 10",
    "Neymar - Forward - 18 - 20",
    "De Bruyne - Midfielder - 8 - 25",
    "Kante - Midfielder - 2 - 5",
    "Van Dijk - Defender - 5 - 3",
    "Alisson - Goalkeeper - 0 - 1",
];

const reportTopPerformers = (minPerformance, playersList) => {
    const totalPerformance = playersList
        .map(playerStr => {
            const [name, position, goals, ass] = playerStr.split(" - ");
            return { name, performance: +goals + +ass };
        })
        .filter(player => player.performance >= minPerformance)
        .map(player => {
            console.log(`${player.name}: ${player.performance}`);
            return player.performance;
        })
        .reduce((sum, val) => sum + val, 0);

    console.log(`Tổng hiệu suất: ${totalPerformance}`);
    return totalPerformance;
};
reportTopPerformers(30, players);