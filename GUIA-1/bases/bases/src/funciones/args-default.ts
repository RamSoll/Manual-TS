(() => {

    const fullName = (firstName:string, lastName?:string, upper :boolean = false):string =>{

        if(upper){
                    return `${firstName} ${lastName || 'no apellido'}`.toUpperCase()
        }else{
                    return `${firstName} ${lastName || 'no apellido'}`
        }
    } 

    const name = fullName("All","Ram",true)
    console.log(name)
})()