(()=>{

    class Avenger {
        //private name?: string
       //public team?: string
       // public realTeam?: string
        static avgAge?: number
        constructor(
            private name:string, 
            private team:string, 
            public realTeam?:string)
            {}
    }   

    const antman: Avenger = new Avenger("ram","caos","alone")
    console.log("objeto", antman, `propiedades del objeto: 
        equipo real ${antman.realTeam}`)
    console.log("edad promedio:", Avenger.avgAge || 35)

})()