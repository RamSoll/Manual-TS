import { genericFunctionArrow } from "../generics/generic"
import { Villain } from "../interfaces/villains"

//import { Hero } from "./classes/Hero";
//import { Hero as superHero, Hero2 } from "./classes/hero";
/* import * as Heroclasses from "./classes/Hero";
import powers from "./data/power";

const Hero:string = "ss"

const hero = new Heroclasses.Hero("e",2,2)
console.log(hero)
console.log(Heroclasses.myName)
console.log(powers)
 */
//const nuevoHereo = new Hero("ra",1,20)
//console.log(nuevoHereo.power)




/* printObject(123)
printObject(new Date())
printObject({a:1, b:2, c:3})
printObject([1,2,3,45,64,4])
printObject("hola xD")
console.log(genericFunction(3.1416.toFixed(2)))
console.log(genericFunctionArrow(3.1416.toFixed(2))) */

const deadpool = {
    name : "Deadpool",
    realName : "Wade Winston Wilson",
    dangerLevel: 130
}

console.log(genericFunctionArrow<Villain>(deadpool).dangerLevel)









