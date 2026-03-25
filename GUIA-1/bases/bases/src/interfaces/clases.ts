(() => {

    interface xmen {
        name : string,
        realName: string,
        mutantPower?(id:number):string
    }

    interface human{
        age: number
    }

    class Mutant implements xmen,human {
       public age: number = 0
       public name: string = ""
       public realName: string = "  "
    }



})()