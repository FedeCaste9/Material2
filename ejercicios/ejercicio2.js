/* 
 * Yo te elijo!
 * 
 * Pokémon quiere sacar un nuevo juego y nos contrato para programar el sistema de batalla.
 * Por ahora vamos a hacer un prototipo para tratar de convencer a los inversores, así que por el momento solo contaremos con tres tipos:
 *      'Agua', 'Fuego' y 'Planta'
 * 
 * Además, para simplificar aún más, modelaremos a los Pokémon de la siguiente manera:
 *      {
 *          tipo: String,
 *          vida: Number,
 *          ataque: Number,
 *          velocidad: Number  
 *      }
 * 
 * Queremos que la batalla dure como máximo 5 turnos, o hasta que uno de los pokemon se debilite (su vida llegue a 0).
 * 
 * En el caso de que se llegue a los 5 turnos con ambos Pokémon en pie, el ganador será el que tenga más vida.
 * 
 * Algunas cosas a tener en cuenta:
 *      - El pokemon más rápido ataca primero
 *      - La vida de un pokémon nunca puede ser menor a 0
 *      - Hay tipos que son muy eficaces contra otro, en cuyo caso los ataques harán el doble de daño según esta tabla:
 * 
 *                  Agua    Fuego   Planta
 *        Agua      x1      x2      x1
 *        Fuego     x1      x1      x2
 *        Planta    x2      x1      x1
 * 
 * La funcion que ejecute la batalla debe devolver al Pokemon ganador.
 * 
 */
// Recibe dos pokemones y devuelve el ganador de la pelea :)
function peleaPokemon(unPokemon, otroPokemon) { //FUNCION PRICIPAL, Recibe los nombres genericos de los pokemones.
	var primero = quienempieza(unPokemon, otroPokemon) //llamo a la funcion quienempieza y mando los pokemones que juegan 
	//el mas rapido lo guardo en "primero" que va a ser "true" o "false".

	var ataqueXcuanto1 = multiataque(unPokemon, otroPokemon) //llamo a estas funciones para determinar el porcentaje de daño 
	var ataqueXcuanto2 = multiataque(otroPokemon, unPokemon) //de los pokemones dependiendo del "tipo" que tengan y contra quien juegan.

	if (primero) { //si primero es "true"
		var ganador = pelea(unPokemon, otroPokemon, ataqueXcuanto1, ataqueXcuanto2)
	} else {
		var ganador = pelea(otroPokemon, unPokemon, ataqueXcuanto2, ataqueXcuanto1)
	}
	return ganador
}

function quienempieza(x, y) { //Recibo los pokemones que van a jugar y devuelvo "true" si es "x" el más rápido
	return x.velocidad > y.velocidad //sino, devuelve "false" y es "y" el más rápido
}

function multiataque(x, y) { //Recibo los poquemones que van a jugar y voy a devolver el ataque multiplicado
	//dependiendo de que "tipo" sea el pokemon con el que va a jugar, si no tiene que multiplicarse
	//se devuelve el ataque por defecto
	if (x.tipo === "Agua" && y.tipo === "Fuego" || x.tipo === "Planta" && y.tipo === "Agua" || x.tipo === "Fuego" && y.tipo === "Planta") {
		return x.ataque * 2
	} else {
		return x.ataque
	}
}

function pelea(x, y, poder1, poder2) { //esta funciión recibe, pokemon1, pokemon2, poder pokemon1, poder pokemon2.

	for (var i = 0; i < 5; i++) { //la pelea como máximo son 5 rounds.
		if (x.vida > 0) { //si la vida del primer pokemon es mayor a 0, va a atacar al otro pokemon.
			y.vida = y.vida - poder1
		}

		if (y.vida > 0) { //si la vida del segundo pokemon es mayor a 0, va a atacar al otro pokemon.
			x.vida = x.vida - poder2
		}
	}
	if (x.vida > y.vida) { //puede ser que la vida de los pokemones no haya llegado a 0,
		return x //por eso va a devolver el que tiene mayor vida y va a ser el ganador.
	} else {
		return y
	}
}

module.exports = peleaPokemon;