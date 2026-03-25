(()=>{

    class Avenger {
        private name?: string
        public team?: string
        public realTeam?: string
        static avgAge?: number

        constructor(name:string, team:string, realTeam?:string){
            this.name = name
            this.team = team
            this.realTeam = realTeam
        }
    }   

    const antman: Avenger = new Avenger("ram","caos","alone")
    console.log("objeto", antman, `propiedades del objeto: 
        equipo real ${antman.realTeam}, equipo ${antman.team}`)
    console.log("edad promedio:", Avenger.avgAge || 35)

})()