(()=>{

    interface Client {
        name: string,
        age: number
        adress?: Adress
        getFullAdress?(id:number):Adress | undefined
    }

    interface Adress {
        id: number,
        zip: string,
        city: string
    }

    const client01: Client = {
        name: "brian",
        age: 24,
        adress: {
            id: 1,
            zip: "s",
            city :"s"
        },
        getFullAdress(id:number){
            return this.adress
        }
    } 

    const client02: Client = {
        name: "al",
        age: 20
    } 
    
})()