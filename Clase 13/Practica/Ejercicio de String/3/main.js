/* 3. Definir una función censurarTexto que reciba una frase y una lista de expresiones
censuradas y devuelva la frase reemplazando esas expresiones por astericos que tengan
su mismo tamaño.*/

function censurarTexto (frase,expresionesCensuradas) {
	let fraseNueva= frase
	let resultado = ''
	for(let i=0; i<expresionesCensuradas.length;i++){
			const fraseCensurada= expresionesCensuradas[i]
			resultado = resultado + '*'
			if (fraseNueva.includes(fraseCensurada)) {
				fraseNueva = fraseNueva.replace(fraseCensurada,resultado)
			}
		}
	
	return fraseNueva
}


console.log(censurarTexto('Me encantan los live action',['live','action']))


	

