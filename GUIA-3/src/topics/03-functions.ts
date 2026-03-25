
const addNumber = (a:number , b:number):number => a+b;
const multiply = (firstNumber: number, base: number = 2, secondNumber?:number):number => firstNumber * base ;

/* const resultMul = multiply(4)
const result:number = addNumber(10,10)
console.log({result, resultMul}) */

interface Charater {
    name: string,
    hp:number,
    showHp():number
}

const healCharater = (charater:Charater, amount:number) => {
    (charater.hp += amount) > 100 ? charater.hp = 100 : charater.hp
    console.log(charater.showHp())
};

const strider: Charater = {
    name:"strider",
    hp:50,
    showHp(){
        console.log(`puntos de vida: ${this.hp}`)
        return this.hp
    }
}

strider.showHp()
healCharater(strider,49)

export {}