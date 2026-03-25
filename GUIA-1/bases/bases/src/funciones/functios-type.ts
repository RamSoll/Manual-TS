(() => {

    const addNumber = (a:number, b:number) => a + b;
    const saludar = (nombre : string) => `Hola ${nombre}`;
    const saveTheWord = () => `El mundo esta salvado!`;

    let myFunction : Function;
    //let myFunction : (a:number, b:number) => number;
     //   let myFunction : (a:string) => string;

   // myFunction = 10
   //console.log(myFunction)

    myFunction = addNumber
    console.log(myFunction(1,2))

    myFunction = saludar
    console.log(myFunction("Ram"))

})()