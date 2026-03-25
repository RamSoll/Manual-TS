(()=> {
const hero:string = 'RAM'

function returnName():string{
    return hero
}

const ActivatedSignal = ():string =>{
    return "signal"
}

console.log(typeof ActivatedSignal)

const name = returnName()

})()