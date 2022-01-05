require("should");
const peleaPokemon = require("../ejercicio2");
const { squirtle, charmander, bulbasaur, snorlax, slaking } = require("./fixture");
describe("Ejercicio 2", () => {

  let _squirtle, _charmander, _bulbasaur;
  beforeEach(() => {
    _squirtle = { ...squirtle }; 
    _charmander = { ...charmander }; 
    _bulbasaur = { ...bulbasaur };
    _snorlax = { ...snorlax };
    _slaking = { ...slaking };
  });

  it("El ganador entre squirtle y charmander debería ser squirtle", () => {
    const ganador = peleaPokemon(_squirtle, _charmander);
    return ganador.should.be.eql({ 
      nombre: 'Squirtle',
      vida: 30,
      ataque: 15,
      velocidad: 12,
      tipo: 'Agua' 
    }); 
  });

  it("El ganador entre charmander y bulbasaur debería ser charmander", () => {
    const ganador = peleaPokemon(_bulbasaur, _charmander);
    return ganador.should.be.eql({ 
      nombre: 'Charmander',
      vida: 80,
      ataque: 20,
      velocidad: 15,
      tipo: 'Fuego' 
    });
  });

  it("El ganador entre squirtle y bulbasaur debería ser bulbasaur", () => {
    const ganador = peleaPokemon(_bulbasaur, _squirtle);
    return ganador.should.be.eql({
      nombre: "Bulbasaur",
      vida: 45,
      ataque: 10,
      velocidad: 10,
      tipo: "Planta"
    }); 
  })

  it("Pelea de titanes: El ganador entre snorlax y slaking debería ser snorlax (por 5 turnos)", () => {
    const ganador = peleaPokemon(_snorlax, _slaking);
    return ganador.should.be.eql({
      nombre: "Snorlax",
      vida: 1450,
      ataque: 10,
      velocidad: 10,
      tipo: "Normal"
    }); 
  })



})