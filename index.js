let nombreUsuario = prompt(
  "Hola! Bienvenido a la pasteleria de Candelaria, cómo te llamas?"
);

class Comida {
  constructor(comida, precio) {
    this.comida = comida; //que queres pedir
    this.precio = precio; // cuanto sale
  }

  mult(num1, num2) {
    let resultado = num1 * num2;
    return resultado;
  }

  packaging() {
    this.precio += 50; 
  }
}

// menu
const tortas = [];
tortas.push(new Comida("Chocotorta", 200))
tortas.push(new Comida("Lemon Pie", 100))
tortas.push(new Comida("Cheescake", 259))
tortas.push(new Comida("Rogel", 180))
tortas.push(new Comida("Brownie", 200))
tortas.push(new Comida("Tiramisu", 220))

for (const torta of tortas) {
  torta.packaging();
}

let opcionElegida = false;
let opcionMenu;
let carrito = [];

while (opcionElegida === false) {

  let opcion = parseInt(
    prompt(
      "¿Qué deseas pedir " +
        nombreUsuario +
        "? Escriba el unicamente el número.     1. Chocotorta  2. Lemon Pie  3. Cheescake  4. Rogel  5. Brownie  6. Tiramisu  "
    ) 
  );

  switch (opcion) {
    case 1:
      opcionMenu = tortas[0];
      break;
    case 2:
      opcionMenu = tortas[1];
      break;
    case 3:
      opcionMenu = tortas[2];
      break;
    case 4:
      opcionMenu = tortas[3];
      break;
    case 5:
      opcionMenu = tortas[4];
      break;
    case 6:
      opcionMenu = tortas[5];
      break;
    default:
      alert("Ese valor no existe");
      opcion = parseInt(
        prompt(
          "¡¡Vuelva a ver sus opciones!!   1. Chocotorta  2. Lemon Pie  3. Cheescake  4. Rogel  5. Brownie  6. Tiramisu "
        )
      );
  }

  let pregunta;

  if (
    opcionMenu === tortas[5] ||
    opcionMenu === tortas[4] ||
    opcionMenu === tortas[2] ||
    opcionMenu === tortas[1] ||
    opcionMenu === tortas[0]
  ) {
    pregunta = parseInt(
      prompt("Escriba la cantidad de " + opcionMenu.comida + "s que vas a querer")
    );
  } else if (opcionMenu === tortas[3]) {
    pregunta = parseInt(
      prompt(
        "Escriba la cantidad de " + opcionMenu.comida + "es que vas a querer"
      )
    );
  }

  if (opcionMenu) {
    carrito.push(opcionMenu)
  }

  opcionMenu.precio =  opcionMenu.precio * pregunta
  let total = 0;
  
  carrito.forEach( (producto) => {
    total = total + producto.precio;
  })

  alert("Total de compra: $" + total )
  
  let vuelta = false;

  while (vuelta === false) {

    let repetir = prompt("Queres comprar algo mas?").toLowerCase().trim();

    if (repetir === "no") {
      opcionElegida = true;
      vuelta = true

    } else if (repetir === "si") {
      opcionElegida = false;
      vuelta = true
    } else {
      alert("Esa respuesta no contesta mi pregunta")
    }
  }

}


let opcionTarjeta = prompt(
  "Con que tarjeta desea pagar?        VISA // AMERICAN EXPRESS // DINERS"
).toLowerCase();

let opcionValidar = false;
while (opcionValidar === false) {

  if (
    opcionTarjeta === "visa" ||
    opcionTarjeta === "american express" ||
    opcionTarjeta === "diners"
  ) {
    let cuotas = parseInt(prompt("Escriba en cuantas cuotas desea abonar"));
    if (cuotas > 6 || cuotas < 1) {
      alert("Numero de cuotas inexistentes");
    } else if (cuotas === 1) {
      alert(
        "Compra finalizada. Has encargado " +
         carrito.map(carrito => carrito.comida).toLowerCase()
        + /*MAL*/ 
          " y has elegido abonar en " +
          cuotas +
          " cuota con la tarjeta " +
          opcionTarjeta
      );
      opcionValidar = true;
    } else if (cuotas > 1 || cuotas < 7) {
      alert(
        "Compra finalizada. Has encargado " +
        carrito.map(carrito => carrito.comida) + 
          " y has elegido abonar en " +
          cuotas +
          " cuotas con la tarjeta " +
          opcionTarjeta
      );
      opcionValidar = true;
    } else {
      alert("Invalido");
    }
  } else {
    opcionTarjeta = prompt(
      "Esa tarjeta no existe. Vuelva a intentar!!        VISA // AMERICAN EXPRESS // DINERS"
    ).toLowerCase();
  }
}
//opcionMenu.comida