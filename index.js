const ovejas = [
  { name: 'Noa', color: 'azul' },
  { name: 'Euge', color: 'rojo' },
  { name: 'Navidad', color: 'rojo' },
  { name: 'Ki Na Ma', color: 'rojo'},
  { name: 'AAAAAaaaaa', color: 'rojo' },
  { name: 'Nnnnnnnn', color: 'rojo'}
]

   function contarOvejas(ovejas=[]) {
    // aquí tu magia
    const expresionA= /(a)+/gi;
    const expresionN= /(n)+/gi;

    ovejas = ovejas.filter(oveja=>expresionA.test(oveja.name) & expresionN.test(oveja.name))
    ovejas = ovejas.filter(oveja=>oveja.color === 'rojo')
    return ovejas
  }




  const ovejasFiltradas = contarOvejas(ovejas)



console.log(ovejasFiltradas)

// [{ name: 'Navidad', color: 'rojo' },
//  { name: 'Ki Na Ma', color: 'rojo' }]