(() =>{
    class Apocalipsis{

        static intance: Apocalipsis

        private constructor(public name: string){
        }

        static callApocalipsis():Apocalipsis{
            if (!Apocalipsis.intance){
                Apocalipsis.intance = new Apocalipsis("caos")
            }

            return Apocalipsis.intance  
        }
    }

    const apocalipsis: Apocalipsis = Apocalipsis.callApocalipsis()

    console.log(apocalipsis)

})()