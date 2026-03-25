(() => {

    const fullName = (firstName:string, lastName?:string):string =>{
        return `${firstName} ${lastName || 'no apellido'}`
    } 

    const name = fullName("AL")
    console.log(name)
})()