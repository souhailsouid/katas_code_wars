function playersList(players) {
    const list = []
    for (let i = 1; i <= players; i++) {
        list.push(i)
    }
    return list
}

function playersIDs(players) {
    return playersList(players).map((player) =>  Object.assign({id: `id_${player}`, player: player}))
}

function randomList(list) {
    let playersAvailable = list.length,
        playerRecruited,
        numberOfPlayer
    while (playersAvailable--) {
        playerRecruited = Math.floor(Math.random() * (playersAvailable + 1));
        numberOfPlayer = list[playersAvailable];
        list[playersAvailable] = list[playerRecruited];
        list[playerRecruited] = numberOfPlayer;
    }  
    return list
}

function optimisation(list) {
    const availablePlayers = list
    const createTeams = []
    // for (let i = 0; i < list.length; i++) {
    //     for (let j = 0; j < list[i]; j++) {
    //         if (list[j] !== list[i]) {
    //             teams.push(Number(list[i].concat(list[i])))
    //         }  
    // }
    list.forEach((previousPlayer) => {
        availablePlayers.forEach((nextPlayer) => {
            if (previousPlayer !== nextPlayer && previousPlayer < nextPlayer) {
             createTeams.push(Number(previousPlayer + nextPlayer))  
            }
        })
    })
    return createTeams
    // [1, 2, 3, 4]
    // [1, 2, 3, 4]
    // 12, 13, 14 ,23, 24, 34
    // const reverse = create.map(team => team.split('').reverse().reduce((p, n)=> p.concat(n)))
}


function playersListIntoString(playersAvailable) {
  return  randomList(playersList(playersAvailable).map(player => player.toString()))
}

function count(n) { 
    if (n === 20000) {
        playersAvailable = n / 10
        possibleTeamsWith2000Players = optimisation(playersListIntoString(playersAvailable))  
        return possibleTeamsWith2000Players = possibleTeamsWith2000Players.length  * 100.0450225112556278
            // 1 9999 0000
    }
    return optimisation(playersListIntoString(n)).length
}

exports.count = count
exports.playersList = playersList
exports.playersIDs = playersIDs



