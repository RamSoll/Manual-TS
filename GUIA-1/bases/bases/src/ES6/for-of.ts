(() => {

    type avenger = {
        name : string,
        weapon : string
    }

    const ironMan: avenger = {
        name: "IronMan",
        weapon: "ArmorSuit"
    }
    
    const capAmerica: avenger = {
        name: "Capitan America",
        weapon: "escudo"
    }

       const thor: avenger = {
        name: "Thor",
        weapon: "Mjolnir"
    }

    const avengers: avenger[] = [ironMan, capAmerica, thor]

    for (const avenger of avengers) {
        console.log(avenger.name, avenger.weapon)
    }
    
})()