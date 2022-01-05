const bandaPirata = {
  barco: "Thousand Sunny",
  banda: "Mugiwaras",
  miembros: ["Luffy", "Zoro", "Nami", "Ussop", "Sanji", "Chopper"],
  islaFinal: { nombre: "Raftel", ubicacion: "Nuevo Mundo" }
}
const property = "islaFinal"
const property2 = "islaFinal.nombre"
console.log(bandaPirata[property])
console.log(bandaPirata[property2]) // Qué muestra?