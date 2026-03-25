(() => {

    const number: (number|string) [] = [1,2,3,4,'5']

    const minerals: string[] = ['cuartz','peridot','gold','silver']

    minerals.forEach(mineral => (console.log(mineral.toUpperCase())))

    number.push(1)
    console.log(number)
})()