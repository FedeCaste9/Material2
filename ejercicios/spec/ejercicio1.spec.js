require("should");
const posicionDelCapitan = require("../ejercicio1");
const { nakamas } = require("./fixture");

describe("Ejercicio 1", () => {

  it("La posición del capitan luffy debería ser 4", () => {
    return posicionDelCapitan(nakamas).should.be.eql(4); 
  });

})