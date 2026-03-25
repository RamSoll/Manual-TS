function classDecorator<T extends { new(...args: any[]): {} }>(constructor: T) {
    return class extends constructor {
        newProperty = 'New property'
        hello = 'override'
    }
}

@classDecorator
export class SUperclass {
    public myproperty: string = 'Hello world'

    print(){
        console.log(this.myproperty)
    }
}

console.log(SUperclass)


const myInstance = new SUperclass()
console.log(myInstance)