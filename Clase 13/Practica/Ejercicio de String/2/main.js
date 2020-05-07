/*Definir una función buscarTweets que reciba una lista de tweets (mensajes) y un texto a
buscar, y devuelva todos los tweets que contengan ese texto.*/


function buscarTweets (listaTweets,textoABuscar) {
	for (let i=0; i<listaTweets.length; i++){
		if(listaTweets[i].includes(textoABuscar)) {
			console.log(listaTweets[i])
		}
	}
	return listaTweets
}


const listaTweets = ['no gracias tenemos torrent, Albert ',
'El presidente Ameal inaguro formalmente el taller Online de formacion para dirigentes,Lberto',
'-Borges,quiero agradecerle una cosa-me dijo. -Usted me ha hecho conocer a Stevens.Me senti justificado y feliz',
'Alberto esta feliz','De principio a fin, gracias']



const tweetsBuscados = buscarTweets(listaTweets,'Alberto')

