//Crear variables con diferentes tipos de datos (number, string, array, objetos literales) para almacenar información de una persona, 
//pasar estos como parámetros de una función, que imprimirá en pantalla usando un template string con backcstick (``).
let nombre= "FREDDY";
let CI="0300997988";
let Skills=["Python","JS"];
let Adress={
        mainstreet:"Charasol ",
        secondstreet:"Ingaloma"
}



function curriculum(nombre,CI,Skills,Adress){
  let salida= `Hoja de vida
  Nombre: ${nombre}
  Cedula de indentidad: ${CI}
  Habilidades: ${Skills}
  Adress: ${Adress.mainstreet+Adress.secondstreet}
  `;
  return salida
  };
  let out = curriculum(nombre,CI,Skills,Adress)
  alert(out);