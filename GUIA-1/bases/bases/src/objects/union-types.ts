(() => {

      type human = {
        name: string,
        age?: number,
        power: string[],
        getName?():string
    }
    
    let myCustomVariable : string | number | human = "Ram"
    console.log(myCustomVariable)
    console.log(typeof myCustomVariable)
})()