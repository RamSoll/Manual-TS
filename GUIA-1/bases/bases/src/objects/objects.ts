(() =>{

    let ningen: {name: string, age: number, power: string[], getName?(): string} = {
        name : "Brian Ram",
        age : 600000000000000000000000000000000000000000000000000000000000000000000000000000000000,
        power: ['semi human']
    }
    console.log(ningen)


    ningen = {
        name : "Alve",
        age : 21,
        power : ["calma"],
        getName(){
            return `${this.name}`
        }
    }
    console.log(ningen)

    let ningen2: {name: string, age: number, power: string[], getName?(): string} = {
        name : "Brian Ram",
        age : 600000000000000000000000000000000000000000000000000000000000000000000000000000000000,
        power: ['semi human']
    }
    console.log(ningen)


})()