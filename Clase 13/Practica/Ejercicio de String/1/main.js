/*1. Definir una función contarEspacios que reciba un texto y devuelva la cantidad de
espacios que tenga.*/


function contarEspacios(texto) {
	let espacios = 0
	for(let i=0; i<texto.length ;i++) {
		if(texto[i]=== ' '){
			espacios++
			
		}
	}

	return espacios
}


const hayEspacios = contarEspacios('hola que tal tu como estas')

console.log(hayEspacios)