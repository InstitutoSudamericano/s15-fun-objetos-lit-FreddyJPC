//Crear una función que reciba un objeto literal con nombre y edad de una persona, 
//la función debe validar si la edad aceptado para recibir la vacuna que debe ser 
//para menores a 5 anos o mayor a 65. La salida de la función es un string de
//aceptado y no aceptado.


function validarVacuna(persona) {
    let nombre = persona.nombre;
    let edad = persona.edad;
  
    if (edad < 5 || edad > 65) {
      return "Aceptado";
    } else {
      return "No aceptado";
    }
  }
  
  let persona1 = { nombre: "Juan", edad: 3 };

  alert(validarVacuna(persona1));

  