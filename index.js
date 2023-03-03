let nombreUsuario = prompt(
  "Hola! Bienvenido a la pasteleria de Candelaria, como te llamas?"
);

class Comida {
  constructor(comida, precio) {
    this.comida = comida; //que queres pedir
    this.precio = precio; // cuanto queres
  }
}

const chocotorta = new Comida("Chocotorta", 200);
const lemonPie = new Comida("Lemon Pie", 100);
const cheescake = new Comida("Cheescake", 259);
const rogel = new Comida("Rogel", 180);
const brownie = new Comida("Brownie", 200);
const tiramisu = new Comida("Tiramisu", 220);
const tartaDeVerdura = new Comida("Tarta de Verdura", 140);
const tartaDeJamonYQueso = new Comida("Tarta de jamon y queso", 160);
const arrolladoDeAtun = new Comida("Arrollado de atun", 170);

let opcion = parseInt(
  prompt(
    "¿Que deseas pedir " +
      nombreUsuario +
      "? Escriba el unicamente el numero.   1. Chocotorta  2. Lemon Pie  3. Cheescake  4. Rogel  5. Brownie  6. Tiramisu  7. Tarta de Verdura  8. Tarta de jamon y queso  9. Arrollado de atun "
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
  } else if (opcion === 7) {
    opcionElegida = true;
    opcionMenu = tartaDeVerdura;
  } else if (opcion === 8) {
    opcionElegida = true;
    opcionMenu = tartaDeJamonYQueso;
  } else if (opcion === 9) {
    opcionElegida = true;
    opcionMenu = arrolladoDeAtun;
  } else {
    alert("Ese valor no existe");
    opcion = parseInt(
      prompt(
        "¡¡Vuelva a ver sus opciones!!   1. Chocotorta  2. Lemon Pie  3. Cheescake  4. Rogel  5. Brownie  6. Tiramisu  7. Tarta de Verdura  9. Tarta de jamon y queso  10. Arrollado de atun "
      )
    ); //tildes
  }
}

alert("Tu opcion elegida cuesta: $" + opcionMenu.precio);
let opcionTarjeta = prompt(
  "Con que tarjeta desea pagar?        VISA // AMERICAN EXPRESS // DINERS"
).toUpperCase();
let opcionValidar = true;

while (opcionValidar === true) {
  if (
    opcionTarjeta === "VISA" ||
    opcionTarjeta === "AMERICAN EXPRESS" ||
    opcionTarjeta === "DINERS"
  ) {
    let cuotas = prompt(
      "Escriba en cuantas cuotas desea abonar.    1. En 12 cuotas   2. En 6 cuotas   3. En 3 cuota"
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
  } else {
    opcionTarjeta = prompt(
      "Esa tarjeta no existe. Vuelva a intentar!!        VISA // AMERICAN EXPRESS // DINERS"
    ).toUpperCase();
  }
}
