(() => {

    const color:string = 'wh'
    const color0:string = "bc"
    const color1:string = `gr`

    const test:string = 'qwertyuiopqwertyuiop'

    console.log(`color: ${color}`)
    console.log(`${test[4]?.toLocaleUpperCase() || 'no esta presente'}`)
    console.log(color.toLocaleUpperCase())
})()