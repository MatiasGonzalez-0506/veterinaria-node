const { registrar, leer } = require("./operations");

const [comando, NombreDelAnimal, edad, TipoDeAnimal, ColorDelAnimal, enfermedad] = process.argv.slice(2);

if (comando === "registrar") {
  if (
    NombreDelAnimal === undefined ||
    edad === undefined ||
    TipoDeAnimal === undefined ||
    ColorDelAnimal === undefined ||
    enfermedad === undefined
  ) {
    console.log("debes rellenar los campos");
    return;
  } else if (isNaN(edad)) {
    console.log("La edad debe ser un numero");
    return;
  }

  registrar(NombreDelAnimal, edad, TipoDeAnimal, ColorDelAnimal, enfermedad);
} else if (comando === "leer") {
  leer();
} else {
  console.log("El comando ingresado es inválido");
}