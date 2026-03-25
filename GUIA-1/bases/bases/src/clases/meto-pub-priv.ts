(()=>{

    class Avenger {
        //private name?: string
        //public team?: string
        // public realTeam?: string
        static avgAge?: number
        static Age():string{
            return this.name
        }

        constructor(
            private name:string, 
            private team:string, 
            public realTeam?:string
        ){}
        
       public bio():string{
            return `${this.name} ${this.realTeam} `
        }

    }   

    const antman: Avenger = new Avenger("ram","caos","alone")
    console.log(antman.bio())
    console.log("objeto", antman, `propiedades del objeto: 
        equipo real ${antman.realTeam}`)
    console.log("edad promedio:", Avenger.avgAge || 35)

    //*aqui llamamos al nombre de la clase no estamos llamando ninguna propiedad
    console.log(Avenger.Age())

})()