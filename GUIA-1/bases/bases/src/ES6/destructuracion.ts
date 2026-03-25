(() => {

    type avenger = {
        nick :string,
        iron: string,
        vision: string,
        activo: boolean,
        poder: number
    }

    let avengers: avenger = {
        nick: "brian",
        iron: "al",
        vision: "Le",
        activo: true,
        poder: 1500.1829
    }

    const  {nick, iron, poder} = avengers
    console.log(nick.toUpperCase(), poder.toFixed(2) )


    const printAvenger = (avenger:avenger) =>{
        console.log(avenger.poder.toFixed(2))
    }

    const desAvenger = ({poder, ...restos}:avenger) => {
        console.log(poder, restos)
    }

    printAvenger(avengers)
    desAvenger(avengers)

    const avengerArr :[string , boolean, number] = ['Raaa',true,150.15];
    const [, segunda , numero] = avengerArr
    console.log(segunda)
    console.log(numero)

})()