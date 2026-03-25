(()=>{

    //?private solo se puede acceder dentro de la clase
    //?protegida se pueden acceder las clases hijas osea la extendidas 

    class Avenger {
        constructor(
            public name: string,
            public realName:string
        ){
            console.log(`llama al constructor Avenger`)
        }

        private getFullName():string{
            return `${this.name} ${this.realName}`
        }

        protected proGetFullName():string{
            return `${this.name} ${this.realName}`
        }

    }

    class Xmen extends Avenger {
        constructor(
            public name:string,
            public realName: string,
            public isMutant:boolean
        ){
            super(name,realName)
            super.proGetFullName()
        }

    public get fullname():string{
            return super.proGetFullName()
        }
    
    //! los setters solo pueden revisir un parametro
    public set fullname(name:string){
        if (name.length <3 ){
            throw new Error("el nombre debe de ser mayor a 3 letras");
        }
            this.name = name
      }

    }

    const  wolverine = new Xmen("wolverine","logan",true)
    wolverine.fullname = "rrr"
    console.log(wolverine.isMutant)

})()