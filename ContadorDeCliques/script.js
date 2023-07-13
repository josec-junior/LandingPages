var contador = 0
var i = 30
cliques = document.getElementById("cliques")
tempo = document.getElementById("tempo")

function clicar() {
    if(contador == 0) {
        tempo.innerHTML = "30 Segundos"
        loop = setInterval("contagemRegressiva()", 1000)
    }
    if(i > 0) {
        contador ++
        cliques.innerHTML = `${contador} Cliques`
    }
}

function contagemRegressiva() {
    i--
    if(i <= 0) {
        tempo.innerHTML = `Tempo Esgotado!`
        clearInterval(loop)
        tempo.innerHTML += "<p> <input type = 'button' value = 'Recomeçar' onclick = 'recomecar()' id = 'recomecar'> </p>"
    } else {
        tempo.innerHTML = `${i} Segundos`
    }
}

function recomecar() {
    contador = 0
    i = 30
    loop = setInterval("ContagemRegressiva()", 1000)
    cliques.innerHTML = "Clique no botão para começar."
    tempo.innerHTML = "30 Segundos"
}