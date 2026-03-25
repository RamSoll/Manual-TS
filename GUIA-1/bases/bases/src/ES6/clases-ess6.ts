(() => {

    class Avenger {
        name?: string;
        power?: number;

        constructor(name:string , power:number){
            this.name = name 
            this.power = power 
        }
    }


    class FlyAvengers extends Avenger {
        flying?: boolean

        constructor(name:string, power: number, fly:boolean){
            super(name,power)
            this.flying = fly
        }
       
    }

    const thor = new FlyAvengers("rfr", 0,true)
    const hulk = new Avenger("rrr",0)

    console.log(hulk)
    console.log(thor)

})()