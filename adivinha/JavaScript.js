var retorno = document.getElementById('res')
var computador = 0
var jogador = 0

function sortear() {
    var min = 0
    var max = 100
    var dif = max - min
    var aleatorio = Math.random()
    computador = min + Math.trunc(dif * aleatorio)
}
function iniciar() {
    jogador = Number(prompt('Qual é o seu palpite? '))

    document.getElementById('iniciar').innerHTML = 'Novo palpite'
    if (jogador < computador) {
        retorno.innerHTML = `<p>Você falou ${jogador}. Meu número é <strong>MAIOR!</strong></p>`

    } else if (jogador > computador) {
        retorno.innerHTML = `<p>Você falou ${jogador}. Meu número é <strong>MENOR!</strong></p>`
    } else if (jogador == computador) {
        //document.getElementById('iniciar').disabled = true
        retorno.innerHTML = `<strong>PARABÉNS!</strong> você acertou. eu tinha sorteado o número: <mark><strong>${computador}</strong></mark>.`

        document.getElementById('iniciar').style.display = "none";
    }
}
function reiniciar() {
    window.location.reload()
}