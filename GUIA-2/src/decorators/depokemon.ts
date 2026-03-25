function printConsole (constructor :Function ){
    console.log(constructor)
}

const printConsoleCondicional = (print: boolean = false):Function => {
    //return () => console.log("hi")
    if(print){
        return printConsole
    }else{
        return () => {}
    }
}

function CheckValidPokemonId(){
    return function(target:any, propertyKey : string, descriptor: PropertyDescriptor){
        const originalMetod = descriptor.value
        descriptor.value = (id:number) => {
            if (id < 1 || id > 800){
                return console.error("ID invalido")
            }else{
                originalMetod(id)
            }
        }
    }
}

const bloquearPrototipo = function(constructor : Function){
    Object.seal(constructor)
    Object.seal(constructor.prototype)

}

function readOnly( isWritable: boolean = true):Function{
    return function(target:any, propertyKey: string){
       const descriptor: PropertyDescriptor = {
        get(){
            console.log(this)
            return "Hi"
        },
        set(this, val){
            Object.defineProperty(this, propertyKey, {
                value: val,
                writable: isWritable,
                enumerable: false
            })
        }
       }
       return descriptor
    }
}

@bloquearPrototipo
@printConsoleCondicional(true)
export class pokemon {
    @readOnly()
    public publicApi: string = "https://pokeapi.co"
    constructor(
        public name: string,
    ){}

    @CheckValidPokemonId()
    savePokemonDB(id: number){
        console.log(`pokemon guardado en BD ${id}`)
    }
}