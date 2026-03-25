(() =>{
    //* las clases abstractas no se pueden instanciar pero si extender 
    abstract class Mutante {
        constructor(public name:string, public realName:string){}
    }

    //* como aqui extendemos de la clase abastracta
    class Xmen extends Mutante { 

        SalvarMundo():string{
            return "mundo salvado"
        }

    }

    class Villian extends Mutante{

        conquistarMundo():string{
            return "mundo conquistado"
        }
    }
    
    const printName= (character: Mutante):void => {
        console.log(character.name)
    }

    //? aqui podemos ver que no se puede extender de la clase absctata 
   // const nuevoMutante: Mutante = new Mutante("wolverine","logan")
    //console.log(nuevoMutante.name)

    const nuevoXmen: Xmen = new Xmen("wolverine","logan")
    const nuevoVillano: Villian = new Villian("es","noza")
    console.log(nuevoXmen.SalvarMundo())
    console.log(nuevoVillano.conquistarMundo())
    
    printName(nuevoVillano)

})()