/*1. Definir una función duplicarNumeros que reciba como parámetro una lista de números y
devuelva la lista con esos números duplicados.*/




function duplicarNumeros (listaDeNumeros){
	for(let i=0;i<listaDeNumeros.length;i++){
		duplicado.push(listaDeNumeros[i] * 1)
		
	}


	return listaDeNumeros
}

let duplicado= []

const listaDeNumeros = [0,1,2,3,4,5]


const listaDuplicada = duplicarNumeros(listaDeNumeros)

const nuevaListaDuplicada = listaDeNumeros.concat(duplicado)

console.log(nuevaListaDuplicada)