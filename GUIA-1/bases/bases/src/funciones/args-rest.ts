(() =>{

    const fullName = (firstName : string, ...otrosNombres : string[] ):string => {
        return `${firstName} ${otrosNombres.join(" ")}`
    }

  const nombre =   fullName("brian","All","Ram", "Dura")
  console.log(nombre);
})() 