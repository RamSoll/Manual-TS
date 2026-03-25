
export class Person{

    constructor( public name: string,
                public address: string)
                {}
}

/* export class Hero extends Person{
    constructor(public alterEgo: string, 
                public age: number, 
                public realname: string,
                public address: string){
        super(realname, address)
    }
} */

export class Hero{
    constructor(public alterEgo: string, 
                public age: number, 
                public realname: string,
                public address: string,
                public person: Person){
        }
}

const p1 = new Person('Sol', 'Calle 123')
const Ram: Hero = new Hero('Ram', 25, 'Sol', 'Calle 123', p1)
console.log({Ram})