    console.log('B')
    
    var cantidadDeGatos = 5
     var cantidadDePasos = 3 
     var emojiGato = ['🐈']
     var emojiPasos = [ '🐾']
     for (var i = 1; i <= cantidadDeGatos; i++) {
        var pasos = '';
        for (var j = 1; j <= cantidadDePasos; j++) {
          pasos = pasos + emojiPasos;
        }
    console.log(' Gato #' + i + ': ' + emojiGato  + pasos )
     }