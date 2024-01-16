//collecting the dom elements
const teamName = document.getElementById("team-name");
const sportName = document.getElementById("sport-name");
const year = document.getElementById("year");
const coachName = document.getElementById("coach-name");
const result = document.getElementById("result")
const positions = document.getElementById("positions")

// object carrying all info
const team = {
    name: "Argetina",
    sport: "Football",
    year: "1986",
    coach: "Carlos Bilardo",
    players: [
        {
            playerName: "Sergio Almirón",
            Position: "forward",
            Number: 1,
            Nickname: ""
        },
        {
            playerName: "Sergio Batista",
            Position: "midfielder",
            Number: 2,
            Nickname: ""
        },
        {
            playerName: "Ricardo Bochini",
            Position: "midfielder",
            Number: 3,
            Nickname: "El Bocha"
        },
        {
            playerName: "Claudio Borghi",
            Position: "midfielder",
            Number: 4,
            Nickname: "Bichi"
        },
        {
            playerName: "José Luis Brown",
            Position: "defender",
            Number: 5,
            Nickname: "Tata"
        },
        {
            playerName: "Daniel Passarella",
            Position: "defender",
            Number: 6,
            Nickname: "El Gran Capitán"
        },
        {
            playerName: "Jorge Burruchaga",
            Position: "forward",
            Number: 7,
            Nickname: "Burru"
        },
        {
            playerName: "Néstor Clausen",
            Position: "defender",
            Number: 8,
            Nickname: ""
        },
        {
            playerName: "José Luis Cuciuffo",
            Position: "defender",
            Number: 9,
            Nickname: "El Cuchu"
        },
        {
            playerName: "(Captain) Diego Maradona",
            Position: "midfielder",
            Number: 10,
            Nickname: "El Pibe de Oro"
        },
        {
            playerName: "Jorge Valdano",
            Position: "forward",
            Number: 11,
            Nickname: "The Philosopher of Football"
        },
        {
            playerName: "Héctor Enrique",
            Position: "midfielder",
            Number: 12,
            Nickname: ""
        },
        {
            playerName: "Oscar Garré",
            Position: "defender",
            Number: 13,
            Nickname: ""
        },
        {
            playerName: "Ricardo Giusti",
            Position: "midfielder",
            Number: 14,
            Nickname: ""
        },
        {
            playerName: "Luis Islas",
            Position: "goalkeeper",
            Number: 15,
            Nickname: "El loco"
        },
        {
            playerName: "Julio Olarticoechea",
            Position: "defender",
            Number: 16,
            Nickname: ""
        },
        {
            playerName: "Pedro Pasculli",
            Position: "forward",
            Number: 17,
            Nickname: ""
        },
        {
            playerName: "Nery Pumpido",
            Position: "goalkeeper",
            Number: 18,
            Nickname: ""
        },
        {
            playerName: "Oscar Ruggeri",
            Position: "defender",
            Number: 19,
            Nickname: "El Cabezón"
        },
        {
            playerName: "Carlos Tapia",
            Position: "midfielder",
            Number: 20,
            Nickname: ""
        },
        {
            playerName: "Marcelo Trobbiani",
            Position: "midfielder",
            Number: 21,
            Nickname: "Calesita"
        },
        {
            playerName: "Héctor Zelada",
            Position: "goalkeeper",
            Number: 22,
            Nickname: ""
        },
    ]
}
//object destructuring
const {name: myTeam, sport, year:cupYear, coach, players} = team
teamName.textContent = myTeam;
sportName.textContent = sport;
year.textContent = cupYear;
coachName.textContent = coach




const playersCategory = (position) =>{
    //accessed the players property of the team object
    const allPlayers = team?.players;

    // looping through the player array
    const playersElement = allPlayers.filter(player => {

        //object destructuring
        const {playerName, Position: playerPosition, Number, Nickname} = player
        if(position === "nickname"){
            return Nickname != ""
        }else if(position === "all"){
            return player
        }else{
            return playerPosition === position
        }
    })
    return playersElement
}

positions.addEventListener("change", () =>{
    const category = playersCategory(positions.value)
    result.innerHTML = ""
    for (const item of category) {
        result.innerHTML += `<div>
        <h2>${item.playerName}</h2>
        <p>Position: ${item.Position}</p>
        <p>Number: ${item.Number}</p>
        <p>Nickname: ${item.Nickname}</p>
    </div>`
    }     
})
