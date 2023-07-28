console.log('C')
var cantidadDeGatos = 10;
var cantidadDePasos = 4;
var emojiGato = ['🐈']
var emojiGato1 = ['🐈 ⬛']
var emojiPasos = [ '🐾']
for (var i = 1; i <= cantidadDeGatos; i++) {
    var pasos = '';
    for (var j = 1; j <= cantidadDePasos; j++) {
      pasos = pasos + emojiPasos;
    }

   let gato;
     if (i % 2 === 0) {
     gato = emojiGato1;
} else {
     gato = emojiGato;
}
console.log(' Gato #' + i + ': ' + gato + pasos)
}





    