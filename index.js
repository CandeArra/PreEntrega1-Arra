let nombreUsuario = prompt(
  "Hola! Bienvenido a la pasteleria de Candelaria, cómo te llamas?"
);

class Comida {
  constructor(comida, precio) {
    this.comida = comida; //que queres pedir
    this.precio = precio; // cuanto sale
  }
}

// menu 

const chocotorta = new Comida("Chocotorta", 200);
const lemonPie = new Comida("Lemon Pie", 100);
const cheescake = new Comida("Cheescake", 259);
const rogel = new Comida("Rogel", 180);
const brownie = new Comida("Brownie", 200);
const tiramisu = new Comida("Tiramisu", 220);


let opcion = parseInt(
  prompt(
    "¿Qué deseas pedir " +
      nombreUsuario +
      "? Escriba el unicamente el número.     1. Chocotorta  2. Lemon Pie  3. Cheescake  4. Rogel  5. Brownie  6. Tiramisu  "
  ) //tildes
);

let opcionElegida = false;
let opcionMenu;

while (opcionElegida === false) {
  if (opcion === 1) {
    opcionElegida = true;
    opcionMenu = chocotorta;
  } else if (opcion === 2) {
    opcionElegida = true;
    opcionMenu = lemonPie;
  } else if (opcion === 3) {
    opcionElegida = true;
    opcionMenu = cheescake;
  } else if (opcion === 4) {
    opcionElegida = true;
    opcionMenu = rogel;
  } else if (opcion === 5) {
    opcionElegida = true;
    opcionMenu = brownie;
  } else if (opcion === 6) {
    opcionElegida = true;
    opcionMenu = tiramisu;
  } else {
    alert("Ese valor no existe");
    opcion = parseInt(
      prompt(
        "¡¡Vuelva a ver sus opciones!!   1. Chocotorta  2. Lemon Pie  3. Cheescake  4. Rogel  5. Brownie  6. Tiramisu "
      )
    ); //tildes
  }
}

alert("Tu opción elegida cuesta: $" + opcionMenu.precio);
let opcionTarjeta = prompt(
  "Con que tarjeta desea pagar?        VISA // AMERICAN EXPRESS // DINERS"
).toLowerCase();
let opcionValidar = true;

while (opcionValidar === true) {
  if (
    opcionTarjeta === "visa" ||
    opcionTarjeta === "american express" ||
    opcionTarjeta === "diners"
  ) {
    let cuotas = prompt(
      "Escriba en cuantas cuotas desea abonar.    1. En 12 cuotas   2. En 6 cuotas   3. En 3 cuotas"
    );
    alert(
      "Compra finalizada. Has encargado " +
        opcionMenu.comida +
        " y has elegido abonar en " +
        cuotas +
        " cuotas con la tarjeta " +
        opcionTarjeta
    );
    opcionValidar = false;
    // break
  } else {
    opcionTarjeta = prompt(
      "Esa tarjeta no existe. Vuelva a intentar!!        VISA // AMERICAN EXPRESS // DINERS"
    ).toLowerCase();
  }
}
