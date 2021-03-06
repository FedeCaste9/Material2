/*
 * Dado un array de nakamas de los sombrero de paja, se desea saber la posición dentro del array del capitán.
 * Los nakamas están estructurados de la siguiente forma:
 *      {
 *          nombre: String,
 *          rol: String
 *      }
 * 
 * Entonces, queremos encontrar el nakama cuyo rol sea 'capitán'.
 * 
 */
  const _ = require("lodash");

  function posicionDelCapitan(nakamas) {
  	

	let pos = o => o.rol == 'capitán';
	return _.findIndex(nakamas, pos);
    
}

module.exports = posicionDelCapitan;


