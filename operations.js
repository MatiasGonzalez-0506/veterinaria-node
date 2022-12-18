const fs = require('fs')

const registrar = (NombreDelAnimal,edad,TipoDeAnimal,ColorDelAnimal,enfermedad) => {
   
   const citas = JSON.parse(fs.readFileSync('citas.json', 'utf8'))
    citas.push({NombreDelAnimal, edad, TipoDeAnimal, ColorDelAnimal, enfermedad})

    fs.writeFileSync('citas.json', JSON.stringify(citas) )
    }

const leer = () => {
    const display_citas = JSON.parse(fs.readFileSync('citas.json', 'utf8'));
    console.log(display_citas)

}

module.exports = { registrar, leer }