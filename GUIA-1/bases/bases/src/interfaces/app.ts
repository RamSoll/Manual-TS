// Crear interfaces
interface auto {
  encender: boolean,
  velocidadMaxima: number,
  acelerar():void
}


// Cree una interfaz para validar el auto (el valor enviado por parametro)
const conducirBatimovil = ( auto:auto ):void => {
  auto.encender = true;
  auto.velocidadMaxima = 100;
  auto.acelerar();
}

const batimovil: auto = {
  encender:false,
  velocidadMaxima:0,
  acelerar(){
    console.log("...... gogogo!!!");
  }
}

// Cree una interfaz con que permita utilzar el siguiente objeto
// utilizando propiedades opcionales

interface guason {
  reir?: boolean,
  comer?: boolean,
  llorar?: boolean
}

const guason : guason = {
  reir: true,
  comer:true,
  llorar:false
}

const reir = ( guason: guason ):void => {
  if( guason.reir ){
    console.log("JAJAJAJA");
  }
}

// Cree una interfaz para la siguiente funcion

interface ciudadGotica {
  (ciudadanos: string[]):number
}

const ciudadGotica:ciudadGotica = ( ciudadanos:string[] ):number => {
  return ciudadanos.length;
}

// Cree una interfaz que obligue crear una clase
// con las siguientes propiedades y metodos

interface persona {
  nombre: string,
  edad: number,
  sexo: string,
  estadoCivil: string,
  imprimirBio():void
}

/*
  propiedades:
    - nombre
    - edad
    - sexo
    - estadoCivil
    - imprimirBio(): void // en consola una breve descripcion.
*/
class Persona implements persona{
  nombre: string = "";
  edad: number = 0;
  sexo: string = "";
  estadoCivil: string = "";
  imprimirBio(): void {
    console.log(`nombre: ${this.nombre} edad: ${this.edad} sexo: ${this.sexo} estadoCivil: ${this.estadoCivil} `)
  }
}